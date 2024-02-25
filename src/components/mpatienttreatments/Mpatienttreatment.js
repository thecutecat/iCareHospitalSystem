/* eslint-disable linebreak-style */
import React, { Component } from "react";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import CustomTabs from "../controls/Tabs";
import TabContainer from "../controls/TabContainer";
import PatientTreatmentTab from "./PatientTreatmentTab";
import TreatmentListTab from "./TreatmentListTab";

const styles = theme => ({
  root: {
    padding: 10
  },
  tabHolder: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    boxShadow: "none"
  },
  tabItem: {
    fontSize: "12px"
  },
  indicator: {
    backgroundColor: "#3f51b5"
  }
});

class Products extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    if (this.props.history.location.pathname === "/products") {
      this.setState({ value: 0 });
    } else {
      this.setState({ value: 1 });
    }
  }

  handleChange = (event, value) => {
    if (value === 0) {
      this.props.history.push("/mpatienttreatments");
    } else {
      this.props.history.push("/mtreatments");
    }
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div className={classes.tabHolder}>
          <CustomTabs
            onChange={this.handleChange}
            value={value}
            items={["Patient Treatment", "Treatments List"]}
          />
          {value === 0 && (
            <TabContainer>
              <PatientTreatmentTab />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <TreatmentListTab />
            </TabContainer>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(Products));
