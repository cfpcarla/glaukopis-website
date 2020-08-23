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

const About = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
          Glaukopis' wisdom is a portal where you can find all the content for
          free or with an accessible value related to job placement. We are a
          group of 4 people passionate about giving back, creating and
          developing ideas, and generating results, even more now in the days of
          COVID-19. Our idea came about because many people were fired due to
          covid-19 and we thought it would be a good opportunity to create this
          portal to help you. Hope you like it. Cheers!
          <br></br>
          Register Now!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} ld={4}></Grid>
    </Grid>
  );
};

export default About;
