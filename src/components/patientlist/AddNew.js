/* eslint-disable linebreak-style */
import React, { Component } from "react";
import * as equal from "fast-deep-equal";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import Container from "../controls/Container";
import Form from "../controls/Form";
// import Dropdown from "../controls/dropdown/Dropdown";
// import GenderDropdown from "../controls/pickers/GenderDropdown";
import { isValueExists, isValidDDMMYY } from "../../utils";
import CustomTextField from "../controls/textfields/CustomTextField";
import api from "../../api";
import Prompt from "../controls/dialog/Prompt";
import CircularLoader from "../controls/loader/CircularLoader";
import Message from "../controls/Message";
// import CustomDatePicker from "../controls/pickers/CustomDatePicker"
// import { array } from "prop-types";

// eslint-disable-next-line
const styles = theme => ({
  form: {
    marginLeft: 20
  }
});

class AddNew extends Component {
  initialData = {
   // patientid: "",
    name: "",
    dateofbirth: "",
    gender: ""
  };

  state = {
    data: this.initialData,
    errors: {},
    showMessageDialog: false,
    isLoading: false,
    message: false,
    showMessage: false,
    isError: false,
    isEdit: false
  };

  async componentDidMount() {
    try {
      const { patientid } = this.props.match.params;

      if (!patientid) {
        return;
      }

      this.setState({ isLoading: true });

      const stateToUpdate = {};
      const res = await api.mpatient.fetchById(patientid);

      stateToUpdate.data = res.data;
      stateToUpdate.isLoading = false;
      stateToUpdate.isEdit = true;

      this.setState({ ...stateToUpdate });
    } catch (error) {
      this.showMessage(error.message, true);
    }
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
      errors: { ...this.state.errors, [e.target.name]: "" }
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const errors = this.validate();

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    try {
      if (this.state.isEdit === false) {
        await this.createNew(this.state.data);
      } else {
        await this.update(this.state.data);
      }
    } catch (error) {
      this.showError(error);
    }
  };

  createNew = async data => {
    const res = await api.mpatient.createNew(data);

    if (res.status === 200) {
      this.showMessage("Saved successfully");
      this.clearForm();
    } else {
      throw new Error(
        `Unable to create the record. The status code is ${res.status}`
      );
    }
  };

  update = async data => {
    const res = await api.mpatient.update(this.props.match.params.patientid, data);

    if (res.status === 200) {
      this.clearForm(true);
    } else {
      throw new Error(`Unable to update. The status code is ${res.status}`);
    }
  };

  clearForm = (canShowMessageDialog = false) => {
    this.setState({
      data: this.initialData,
      showMessageDialog: canShowMessageDialog
    });

    if (this.idRef) {
      this.idRef.focus();
    }
  };

  onMessageCloseClick = () => {
    this.setState({
      showMessage: false,
      message: "",
      isError: false
    });
  };

  showMessage = message => {
    this.setState({
      showMessage: true,
      message,
      isError: false
    });
  };

  showError = error => {
    this.setState({
      showMessage: true,
      message: error.message,
      isError: true,
      isLoading: false
    });
  };

  onMessageDialogCloseClick = () => {
    this.setState({ showMessageDialog: false });
    this.props.history.goBack();
  };

  validate = () => {
    let errors = isValueExists(this.state.data);

    if (this.state.data.name.length !== 2) {
      errors = {
        ...errors,
        mobile: "Nama harus lebih panjang dari 2 karakter"
      };
    }

    if (!isValidDDMMYY(this.state.data.dateofbirth)) {
      errors = {
        ...errors,
        email: "Invalid DOB."
      };
    }

    return errors;
  };

  onCancelClick = () => {
    const isDirty = !equal(this.initialData, this.state.data);

    if (isDirty === true && this.state.isEdit === false) {
      this.clearForm();
      return;
    }

    this.props.history.goBack();
  };


  render() {
    const {
      data,
      errors,
      showMessageDialog,
      isLoading,
      message,
      showMessage,
      isError,
      isEdit
    } = this.state;

    return (
      <Container title={isEdit ? "Edit Patient" : "New Patient"}>
        <Prompt
          message="The patient you entered was saved successfully."
          open={showMessageDialog}
          handleClose={this.onMessageDialogCloseClick}
        />
        <CircularLoader isLoading={isLoading} />
        <Message
          title="Message"
          message={message}
          show={showMessage}
          isError={isError}
          onCloseClick={this.onMessageCloseClick}
          autoClose={!isError}
        />

        <Form
          id="mpatient"
          onSubmit={this.onSubmit}
          onCancel={this.onCancelClick}
        >
          <CustomTextField
            error={!!errors.name}
            name="name"
            value={data.name}
            label="Patient Name"
            onChange={this.onChange}
          />
          
          <CustomTextField
            error={!!errors.dateofbirth}
            name="dateofbirth"
            value={data.dateofbirth}
            label="Date Of Birth"
            type="Date"
            onChange={this.onChange}
          />
 
          <CustomTextField
            error={!!errors.gender}
            name="gender"
            value={data.gender}
            label="Gender"
            margin="normal"
            onChange={this.onChange}
          />
           
        </Form>
      </Container>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(AddNew));
