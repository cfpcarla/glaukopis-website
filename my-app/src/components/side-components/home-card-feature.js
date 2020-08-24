import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OnlineLearningIllustration from "../../assets/photo/online-learning-illustration.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: " 0 auto 2rem auto",
  },
  media: {
    width: "5rem",
    height: "5rem",
    objectFit: "cover",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    fontSize: 16,
  },
});

const CardFeature = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.img}
        title="Online learning"
      />
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.title}
        </Typography>

        <Typography className={classes.desc} variant="body2" component="p">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant="contained" color='primary' size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default CardFeature;
