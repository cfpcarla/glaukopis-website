import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Contact = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact us!
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}></Grid>
    </Grid>
  );
};
export default Contact;
