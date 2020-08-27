import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Paper } from "@material-ui/core";
import { SERVICE } from "../controller/nav-controller";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "58px",
    marginLeft: "50px",
  },
  media: {
    height: 0,
    paddingTop: "103.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  secondGrid: {
    maxWidth: 345,
    marginTop: "58px",
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "80%",
  },
  image: {
    height: 256,
  },
}));

const Persona = (props) => {
  const classes = useStyles();

  const displayService = () => {
    props.setDisplay(SERVICE);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <img
              className={classes.image}
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            ></img>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body2" color="textSecondary" component="p">
              This is Emmily, she loves to study, read books and go out with her
              friends. She has a degree in business and worked in a company in
              Toronto, but due to the economic crisis of many companies because
              of COVID 19, Anna lost her job, and now she is looking for a
              replacement in the job market.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid item xs={3} sm={3}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This is Jack he loves to play video games with friends and play
              tennis. He has just graduated in computer science at Geoge Brown
              in Toronto and is looking for a first job opportunity, but due to
              Covid19 he was having a hard time finding a job and also needs to
              continue studying so as not to forget what he learned at college.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3} sm={3}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This is Anna, she is married and has 2 children, she loves
              spending time with her family. She has worked for many years in a
              company and has now decided to change jobs and careers. But for
              that she needs to find out about how the market is doing and if
              she has opportunities for what she is looking for she also needs
              to update her resume and cover letter.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={3} sm={3} className={classes.secondGrid}>
        <Typography paragraph>
          Are you like Emmily, Jack or Anna also lost your job and or can't get
          a job during the covid? Do you feel that your experience is not enough
          to attract the attention of recruiters?
        </Typography>
        <CardContent>
          <Typography paragraph>
            Glaukopis Wisdome can help you with that. Our platform has a
            personalized service for those looking for a job. Click in the
            button to find out more about our services.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => displayService()}
          >
            Click here
          </Button>
        </CardContent>
      </Grid>
    </>
  );
};

export default Persona;
