import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

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
}));

const Persona = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={6}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This is Anna, she loves to study, read books and go out with her
              friends. She has a degree in business and worked in a company in
              Toronto, but due to the economic crisis of many companies because
              of COVID 19, Anna lost her job, and now she is looking for a
              replacement in the job market.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={6} sm={6} className={classes.secondGrid}>
        <Typography paragraph>
          Are you like Anna also lost your job and or can't get a job during the
          covid? Do you feel that your experience is not enough to attract the
          attention of recruiters?
        </Typography>

        <CardContent>
          <Typography paragraph>
            Glaukopis Wisdome can help you with that. Our platform has a
            personalized service for those looking for a job.
          </Typography>
          <Typography paragraph></Typography>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default Persona;