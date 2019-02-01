import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";
import AddIcon from "@material-ui/icons/AddCircle";
import RemoveIcon from "@material-ui/icons/RemoveCircle";
import Grid from "@material-ui/core/Grid";

import history from "../assets/images/chat.png";
import vision from "../assets/images/lightbulb.png";
import technology from "../assets/images/smartphone.png";


const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "3rem"
  },
  header: {
    textAlign: "center",
    paddingTop: 40,
    fontSize: 40
  },
  card: {
    maxWidth: 400,
    margin: "5rem 2rem",
    backgroundColor: "#f3f3f3"
  },
  media: {
    height: 0,
    /* paddingTop: "56.25%", // 16:9, */
    padding: 100
  },
  imgAvatar: {
    margin: 10,
    padding: 20,
    width: 100,
    height: 100,
    display: "block",
    backgroundColor: "#fff"
  },
  cardHeader: {
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: green[500]
  },
  contentParagraph: {
    fontSize: 15,
    textAlign: "justify",
    padding: 10
  }
});

class RecipeReviewCard extends React.Component {
  state = {
    expandedHistory: false,
    expandedVison: false,
    expandedTech: false
  };

  handleExpandClick = () => {
    this.setState(state => ({ expandedHistory: !state.expandedHistory }));
  };
  handleExpandVison = () => {
    this.setState(state => ({ expandedVison: !state.expandedVison }));
  };
  handleExpandTech = () => {
    this.setState(state => ({ expandedTech: !state.expandedTech }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} id="company">
        <h2 className={classes.header}>
          The Few Nickels Agricultural Smart Services Co.
        </h2>
        <Grid container spacing={0}>
          <Grid item xs>
            <Card className={classes.card}>
              <Grid container justify="center" alignItems="center">
                <Avatar
                  alt="Our History"
                  src={history}
                  className={classes.imgAvatar}
                />
                {/* <Avatar className={classes.avatar}>
              <ChatIcon />
            </Avatar> */}
                <CardHeader
                  title="Our History"
                  classes={{
                    title: classes.cardHeader
                  }}
                  /* subheader="Toggle to read more" */
                />
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expandedHistory
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expandedHistory}
                    aria-label="Show more"
                  >
                    {this.state.expandedHistory ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </CardActions>
              </Grid>
              <Collapse
                in={this.state.expandedHistory}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Typography paragraph classes={{paragraph: classes.contentParagraph}}>
                    The beginning of the start-up come from the low access of
                    farmers to financial services in South America, especially
                    in Brazil.
                  </Typography>
                  <Typography paragraph classes={{paragraph: classes.contentParagraph}}>
                    Our company is developing a complete gateway to farmers
                    access financial products such investment and costing loams
                    or hedge contracts, and for investors and buyers we will
                    provide multiple opportunities of investment in different
                    farmers contracts. ​
                  </Typography>
                  <Typography paragraph classes={{paragraph: classes.contentParagraph}}>
                    A decentralized financial system to provide freedom and
                    opportunities for everyone, everywhere, anytime is our
                    mission.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={classes.card}>
              <Grid container justify="center" alignItems="center">
                <Avatar
                  alt="Our Vision"
                  src={vision}
                  className={classes.imgAvatar}
                />
                {/* <Avatar className={classes.avatar}>
              <ChatIcon />
            </Avatar> */}
                <CardHeader
                  classes={{
                    title: classes.cardHeader // class name, e.g. `classes-nesting-root-x`
                  }}
                  title="Our Vision"
                  /* subheader="Toggle to read more" */
                />
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expandedVison
                    })}
                    onClick={this.handleExpandVison}
                    aria-expanded={this.state.expandedVison}
                    aria-label="Show more"
                  >
                    {this.state.expandedVison ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </CardActions>
              </Grid>
              <Collapse
                in={this.state.expandedVison}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Typography paragraph classes={{paragraph: classes.contentParagraph}}>
                    Our vision is a fully decentralized, digital and secure
                    system of financial products to reduce costs and friction
                    for farmers and investors to generate wealth for chain
                    participants.
                  </Typography>
                  <Typography paragraph classes={{paragraph: classes.contentParagraph}}>
                    In future of decentralized internet we are the peer-to-peer
                    system where farmers can finance their production, sell the
                    products in transparent price settlement and get futures or
                    hedge contracts over a trustful blockchain infrastructure.
                  </Typography>
                  <Typography paragraph classes={{paragraph: classes.contentParagraph}}>
                    In the same vision any citizen of the globe can funding with
                    any amount of money any farmer contract, having opportunity
                    of investment and impact generation in real lives. Any
                    buyers can directly finance the production and buy in
                    advance the products grown in responsible environmental and
                    social conditions.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs>
            <Card className={classes.card}>
              <Grid container justify="center" alignItems="center">
                <Avatar
                  alt="Our Technology"
                  src={technology}
                  className={classes.imgAvatar}
                />
                {/* <Avatar className={classes.avatar}>
              <ChatIcon />
            </Avatar> */}
                <CardHeader
                  classes={{
                    title: classes.cardHeader // class name, e.g. `classes-nesting-root-x`
                  }}
                  title="Our Technology"
                  /* subheader="Toggle to read more" */
                />
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expandedTech
                    })}
                    onClick={this.handleExpandTech}
                    aria-expanded={this.state.expandedTech}
                    aria-label="Show more"
                  >
                    {this.state.expandedTech ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </CardActions>
              </Grid>
              <Collapse
                in={this.state.expandedTech}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Typography paragraph classes={{paragraph: classes.contentParagraph}}>
                    We are over blockchain technology + Smart Contracts +
                    Cryptocurrency and mobile and web applications for empower
                    farmers, investors and buyers in a new era of financial and
                    contracts services. ​
                  </Typography>
                  <Typography paragraph classes={{paragraph: classes.contentParagraph}}>
                    We provide a technology to any farmer generate their bid for
                    financial support or sell products using a simple and
                    directly platform.
                  </Typography>
                  <Typography paragraph classes={{paragraph: classes.contentParagraph}}>
                    We offer to all investors and buyers registered in the
                    platform a opportunity of investment in any of the financial
                    products of farmers or buying their production, in a full
                    compliant system of transactions in environmental and social
                    high patterns. ​
                    <br />
                    Our technology is fair, fast and secure at level of the user
                    and at level of the system.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
