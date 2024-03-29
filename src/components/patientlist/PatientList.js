/* eslint-disable linebreak-style */
import React, { Component } from "react";
import Button from "material-ui/Button";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import Container from "../controls/Container";
import Searchbox from "../controls/Searchbox";
import Message from "../controls/Message";
import ApiAutoFetchDatagrid from "../controls/datagrid/ApiAutoFetchDatagrid";
import api from "../../api";
import CircularLoader from "../controls/loader/CircularLoader";
import YesNo from "../controls/dialog/YesNo";

const styles = theme => ({
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  wrapper: {
    position: "relative",
    margin: "20px 5px 5px 5px"
  }
});

class PatientList extends Component {
  mPatientColumns = ["Patient Id", "Name", "DOB", "Gender"];

  state = {
    clearSearch: false,
    searchQuery: "",
    message: "",
    showMessage: false,
    isError: false,
    isLoading: false,
    showConfirmDeleteDialog: false
  };

  onListClick = () => {
    this.setState({ clearSearch: true, searchQuery: "", showMessage: false });
  };

  onSearchSubmit = async id => {
    this.setState({ clearSearch: false, searchQuery: id });
  };

  onCreateNewClick = () => {
    this.props.history.push("patientlist/new");
  };

  onEdit = row => {
    this.props.history.push(`patientlist/edit/${row.id}`);
  };

  onDelete = itemToDelete => {
    this.setState({ showConfirmDeleteDialog: true, itemToDelete });
  };

  onConfirmDeleteClick = async () => {
    const { id } = this.state.itemToDelete;

    try {
      this.setState({ isLoading: true });

      const res = await api.mpatient.delete(id);

      if (res.status === 200) {
        this.showMessage("Deleted successfully.");
      } else {
        throw new Error(
          `Couldn't delete the record. The status code is ${res.status}`
        );
      }
    } catch (error) {
      this.showMessage(error.message, true);
    }
  };

  showMessage = (message, isError = false) => {
    this.setState({
      showMessage: true,
      isError,
      message,
      isLoading: false,
      showConfirmDeleteDialog: false
    });
  };

  onMessageCloseClick = () => {
    this.setState({ showMessage: false });
  };

  onCancelConfirmDeleteClick = () => {
    this.setState({ showConfirmDeleteDialog: false });
  };

  getApiPromise = () => {
    const { searchQuery } = this.state;

    if (searchQuery.length === 0) {
      return api.mpatient.fetchByPages();
    }

    return api.mpatient.searchByIdAndGetByPages(searchQuery);
  };

  render() {
    const { classes } = this.props;
    const {
      clearSearch,
      message,
      showMessage,
      isError,
      isLoading,
      showConfirmDeleteDialog
    } = this.state;

    return (
      <Container title="PatientList">
        <CircularLoader isLoading={isLoading} />
        <YesNo
          open={showConfirmDeleteDialog}
          message="Are you sure wan't to delete the selected item"
          onOk={this.onConfirmDeleteClick}
          onCancel={this.onCancelConfirmDeleteClick}
        />

        <div>
          <Button
            className={classes.button}
            variant="raised"
            color="default"
            size="small"
            onClick={this.onListClick}
          >
            List
          </Button>

          <Button
            className={classes.button}
            variant="raised"
            color="primary"
            size="small"
            onClick={this.onCreateNewClick}
          >
            Create New
          </Button>

          <Searchbox
            clear={clearSearch}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          />
        </div>

        <Message
          style={{ width: "98%" }}
          title="Message"
          message={message}
          show={showMessage}
          isError={isError}
          onCloseClick={this.onMessageCloseClick}
          autoClose={!isError}
        />
        <div className={classes.wrapper}>
          <ApiAutoFetchDatagrid
            datasourcePromise={this.getApiPromise}
            actions={["del", "edit"]}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
            headers={this.mPatientColumns}
          />
        </div>
      </Container>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(PatientList));
