import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  Link,
} from "@material-ui/core";

import { ReactComponent as Owl } from "../assets/svg/owl.svg";
import Chalkboard from "../assets/photo/chalkboard.jpg";

const footerStyle = makeStyles((theme) => ({
  root: {},

  footer: {

    paddingTop:'1rem',
    display: "flex",
    flexWrap: "wrap",
    marginTop: "2vh",
    marginLeft: "0",
    color:'white'
  },
  footerHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: 'black'
  },
  footerContentContainer: {
    background:
      "linear-gradient(248.24deg, rgba(0, 0, 0, 0.473434) 0.31%, rgba(0, 0, 0, 0.441699) 20.56%, rgba(0, 0, 0, 0.437494) 77.15%, rgba(0, 0, 0, 0.447353) 99.8%, rgba(10, 10, 10, 0) 99.96%, rgba(126, 126, 126, 0) 99.97%, rgba(0, 0, 0, 0.5) 99.98%), url(" +
      Chalkboard +
      ")",

    backgroundRepeat: "repeat",
    display: "flex",
    width: "100vw",
    height: "30vh",
    justifyContent: "space-around",
    marginTop: "2vh",
    paddingTop: "2vh",
  },
  footerContent: {
    width: "25vw",
    height: "20vh",
  },
}));
const Footer = () => {
  const classes = footerStyle();

  return (
    <>
      <Box className={classes.footer}>
        <Grid item xs={12} className={classes.footerHeader}>
          <Grid className={classes.logo} item xs={12} sm={12} md={3}>
            <Owl className="logo" />
          </Grid>
          <Typography variant="h4"> Glaukopis Wisdom</Typography>
          <Typography variant="h5"> value proposition insert here</Typography>
        </Grid>
        <Box xs={12} className={classes.footerContentContainer}>
          <Grid className={classes.footerContent}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              {" "}
              Explore
            </Typography>
            <Typography variant="h5"> Home</Typography>
            <Typography variant="h5"> About</Typography>
            <Typography variant="h5"> Services</Typography>
            <Typography variant="h5"> Contact</Typography>
            <Typography variant="h5"> Persona</Typography>
          </Grid>
          <Grid className={classes.footerContent}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              {" "}
              Headquarter
            </Typography>
            <Typography variant="h5">
              {" "}
              169 Somewhere Street, Toronto, ON - CA
            </Typography>
            <Typography
              style={{ marginTop: "5vh", fontWeight: "bold" }}
              variant="h4"
            >
              {" "}
              Email
            </Typography>
            <Typography variant="h5" >
              {" "}
              quantrithanh1999@gmail.com
            </Typography>
          </Grid>
          <Grid className={classes.footerContent}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              {" "}
              Follow us
            </Typography>
            <Typography variant="h5">
              {" "}
              <Link> Twitter </Link>
            </Typography>
            <Typography variant="h5">
              {" "}
              <Link> LinkedIn </Link>
            </Typography>
            <Typography variant="h5">
              {" "}
              <Link> Github </Link>
            </Typography>
            <Typography variant="h5">
              {" "}
              <Link> Instagram </Link>
            </Typography>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
