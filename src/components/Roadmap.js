import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#2A9D72" },
    secondary: { main: "#2A9D72" }
  },
  typography: {
    fontFamily: '"Viga", sans-serif'
  }
});

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: "#ffffff"
  },
  header: {
    fontSize: "50px",
    color: "#726658",
    textAlign: "center",
    paddingTop: "2rem"
  },
  phases: {
    padding: "2rem"
  },
  phase: {
    textAlign: "center",
    color: "#726658",
    fontWeight: "bold"
  },
  phaseCard: {
    padding: 20
  },
  phaseHeader: {
    color: "#2A9D72"
  },
  stepper: {
    margin: "0 25rem",
    paddingBottom: "2rem"
  },
  stepLabel: {
    fontSize: 20
  },

  icon: {
    color: "#2A9D72"
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    margin: "2rem 25rem",
    padding: theme.spacing.unit * 3
  }
});

function getSteps() {
  return [
    "2Q-2018",
    "3Q-2018",
    "4Q-2018",
    "1Q-2019",
    "2Q-2019",
    "3Q-2019",
    "1Q-2020",
    "4Q-2020",
    "3Q-2021",
    "1Q-2022"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ["Business idea development"];
    case 1:
      return ["Design of Platform", "Whitepaper", "ICO Preparations"];
    case 2:
      return ["Join the Team", "Start Marketing"];
    case 3:
      return ["MVP Platform", "ICO Crowdsale Start"];
    case 4:
      return ["MVP Complete", "End of ICO"];
    case 5:
      return ["Start of Operations in Brazil"];
    case 6:
      return ["Expansion over Brazil"];
    case 7:
      return ["Full Operations in Brazil"];
    case 8:
      return ["Full South America Operations"];
    case 9:
      return ["Start Africa Operations"];
    default:
      return "Unknown step";
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 3
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 3
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root} id="roadmap">
          <h1 className={classes.header}>Our Roadmap</h1>
          <Grid container spacing={32} className={classes.phases}>
            <Grid item xs className={classes.phase}>
              <Card className={classes.phaseCard}>
                <h3 className={classes.phaseHeader}>Phase 1</h3>
                <p>
                  Investment Platform - Rating System - Sell Contracts - Crops
                  Monitor
                </p>
                {/* <p>Rating System</p>
              <p>Sell Contracts</p>
              <p>Crops Monitor</p> */}
              </Card>
            </Grid>
            <Grid item xs className={classes.phase}>
              <Card className={classes.phaseCard}>
                <h3 className={classes.phaseHeader}>Phase 2</h3>
                <p>
                  Buy and sell products - Hedge Contracts - Dynamics Insurance
                </p>
                {/* <p>Hedge Contracts</p>
              <p>Dynamics Insurance</p> */}
              </Card>
            </Grid>
            <Grid item xs className={classes.phase}>
              <Card className={classes.phaseCard}>
                <h3 className={classes.phaseHeader}>Phase 3</h3>
                <p>Crops ETF's</p>
                <br />
              </Card>
            </Grid>
          </Grid>
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            className={classes.stepper}
          >
            {steps.map((label, index) => (
              <Step key={label} className={classes.step}>
                <StepLabel
                  completed={
                    label === "1Q-2019" ||
                    label === "2Q-2018" ||
                    label === "3Q-2018" ||
                    label === "4Q-2018"
                  }
                  classes={{
                    label: classes.stepLabel
                  }}
                  /* StepIconProps={{ classes: { root: classes.icon } }} */
                >
                  {label}
                </StepLabel>
                <StepContent>
                  <ul>
                    <li>{getStepContent(index)[0]}</li>
                    {getStepContent(index)[1] ? (
                      <li>{getStepContent(index)[1]}</li>
                    ) : null}
                    {getStepContent(index)[2] ? (
                      <li>{getStepContent(index)[2]}</li>
                    ) : null}
                  </ul>

                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>All steps completed</Typography>
              <Button
                onClick={this.handleReset}
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Reset
              </Button>
            </Paper>
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
