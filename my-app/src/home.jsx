import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import About from "../src/About";
import Contact from "../src/Contact";

const ABOUT = "about";
const CONTACT = "contact";
const FAQ = "faq";
const MENTORS = "mentors";

const buttonStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f9f14e",
    lineHeight: 1.5,
    height: "42px",
    "&:hover": {
      backgroundColor: "#fff9c4",
    },
  },
}));

const RegisterButton = () => {
  const classes = buttonStyles();

  return (
    <Box p="60px">
      <Button
        variant="button"
        size="large"
        width="60%"
        fullWidth
        block
        gutterBottom
        className={classes.root}
        href="https://hopin.to/events/hacking-from-home"
        target="blank"
      >
        Register
      </Button>
    </Box>
  );
};

const faqStyles = makeStyles((theme) => ({
  frame: {
    justifyContent: "center",
  },
}));

const Faq = () => {
  const classes = faqStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          <strong>Who can join?</strong>
          <br />
          The hackathon is open for anyone to join, devs of all levels,
          designers are all welcome.
          <br />
          <br />
          <strong>How can I submit my project idea?</strong>
          <br />
          Once you register to HfH you are going to receive an invite to join
          our slack group. Through Slack, we are going to be able to share
          project ideas, get feedback, and start getting to know other
          participants and ideas.
          <br />
          <br />
          <strong>I don’t have a team/a project, can I join it anyway?</strong>
          <br />
          Yes! Part of the goal of HfH is to connect people. The first part of
          the hackathon will be dedicated to networking and forming teams.
          <br />
          <br />
          <strong>Is the event free?</strong>
          <br />
          Absolutely! We want to support the community, connect to new people,
          and develop cool stuff.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} ld={4}>
        <RegisterButton />
      </Grid>
    </Grid>
  );
};

const mentorCardStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    margin: theme.spacing(1),
  },
  content: {
    minHeight: 300,
  },
  media: {
    height: 400,
  },
}));

const MentorCard = ({ image, name, type, info }) => {
  const classes = mentorCardStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="mentor photo"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {type}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

const mentorStyles = makeStyles({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "stretch",
    height: "100%",
  },
});

const Mentors = () => {
  const classes = mentorStyles();

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Mentors
      </Typography>
      <Grid container spacing={3}></Grid>
    </>
  );
};
const useHeaderItemStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    alignContent: "center",
    paddingLeft: "9px",
  },
}));
const HeaderItem = ({ title, actionFn }) => {
  const classes = useHeaderItemStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        className={classes.title}
        style={title === "FAQ" ? { paddingLeft: "0" } : {}}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={actionFn}
      >
        {title}
      </Button>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    backgroundColor: "#eeeeee",
  },
  rightHeaderMenu: {
    marginTop: theme.spacing(2),
  },
  headerLine: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  headerLogo: {
    width: "100%",
    height: "fit - content",
    padding: "inherit",
    display: "flex",
    justifyContent: "center",
  },
  sponsorLogo: {
    width: "100px",
  },
  rightMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "100%",
    backgroundColor: "#f9f14e",
  },
  appBar: {
    backgroundColor: "#f9f14e",
  },
  divider: {
    marginBottom: "15px",
  },
  footer: {
    padding: theme.spacing(3),
    textAlign: "center",
  },
}));
const Home = () => {
  const classes = useStyles();
  const [display, setDisplay] = useState(ABOUT);
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}></Grid>
            <Grid item xs={12} sm={12} md={3}>
              <Box className={classes.rightHeaderMenu}>
                <HeaderItem title="About" actionFn={() => setDisplay(ABOUT)} />
                <HeaderItem title="FAQ" actionFn={() => setDisplay(FAQ)} />
                <HeaderItem
                  title="Contact"
                  actionFn={() => setDisplay(CONTACT)}
                />
                <HeaderItem
                  title="Mentors"
                  actionFn={() => setDisplay(MENTORS)}
                />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Box display={display === ABOUT ? "block" : "none"}>
          <About />
        </Box>
        <Box display={display === CONTACT ? "block" : "none"}>
          <Contact />
        </Box>
        <Box display={display === FAQ ? "block" : "none"}>
          <Faq />
        </Box>
        <Box display={display === MENTORS ? "block" : "none"}>
          <Mentors />
        </Box>
        <footer className={classes.footer}>
          <Divider className={classes.divider} />
          <Typography variant="h4" gutterBottom>
            Sponsor
          </Typography>
          <Box pt="10px"></Box>
        </footer>
      </div>
    </>
  );
};
export default Home;
