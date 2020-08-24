import React, { useState } from "react";
import Online_Learning from "../assets/photo/online-learning.jpg";
import CardFeature from "./side-components/home-card-feature";
import {
  makeStyles,
  Button,
  Grid,
  Typography,
  Box,
  Paper,
  Link,
} from "@material-ui/core";

import OnlineLearningIllustration from "../assets/photo/online-learning-illustration.png";
import SubwayLine from "../assets/photo/subway-lines.png";

import CommunityHub from "../assets/photo/united-nations-covid-19-response.jpg";
import Forum from "../assets/photo/forum.png";
import RetroFurnish from "../assets/photo/retro-furnish.png";

import Workshop from "../assets/photo/workshop.png";
import JobSearch from "../assets/photo/job-opportunities.png";
import TextBook from "../assets/photo/textbook.png";
import Youtube from "../assets/photo/youtube-icon-logo-png-transparent.png";
import Harvard from "../assets/photo/harvard-logo-transparent.png";
import GoogleScholar from "../assets/photo/google-scholar.png";
import Coursera from "../assets/photo/coursera-logo-black-transparent.png";
import Indeed from "../assets/photo/indeed-logo.png";
import Glassdoor from "../assets/photo/glassdoor-logo.png";
import LinkedIn from "../assets/photo/linkedin.png";
import Footer from "./footer";

const homeStyles = makeStyles((theme) => ({
  root: {},
  proposition: {
    height: "70vh",
    background:
      "linear-gradient(248.24deg, rgba(0, 0, 0, 0.473434) 0.31%, rgba(0, 0, 0, 0.441699) 20.56%, rgba(0, 0, 0, 0.437494) 77.15%, rgba(0, 0, 0, 0.447353) 99.8%, rgba(10, 10, 10, 0) 99.96%, rgba(126, 126, 126, 0) 99.97%, rgba(0, 0, 0, 0.5) 99.98%), url(" +
      Online_Learning +
      ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "40% 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  startButton: {
    backgroundColor: "#455954",
  },
  featureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
  imgBrand: {
    width: "3.5rem",
    height: "3.5rem",
    objectFit: "contain",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "1.5rem",
      height: "1.5rem",
    },
  },
  resourcesListContainer: {
    background:
      "linear-gradient(248.24deg, rgba(0, 0, 0, 0.473434) 0.31%, rgba(0, 0, 0, 0.441699) 20.56%, rgba(0, 0, 0, 0.437494) 77.15%, rgba(0, 0, 0, 0.447353) 99.8%, rgba(10, 10, 10, 0) 99.96%, rgba(126, 126, 126, 0) 99.97%, rgba(0, 0, 0, 0.5) 99.98%), url(" +
      SubwayLine +
      ")",
    width: "100vw",
    height: "75vh",
    backgroundRepeat: "repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto auto auto",
  },
  resourcesList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "2rem auto 0 auto",
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  resourcesPaper: {
    width: "70vw",
    backgroundColor: "#ffffffc4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
  },
  CommunityHub: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "2rem",
  },
  communityImg: {
    width: '45vw',
    height: "60vh",
    objectFit: "cover",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "20vh",
      objectFit: "cover",

    },
  },
  nextStep: {
    // retro-furnish.png
    background:
      "linear-gradient(248.24deg, rgba(0, 0, 0, 0.473434) 0.31%, rgba(0, 0, 0, 0.441699) 20.56%, rgba(0, 0, 0, 0.437494) 77.15%, rgba(0, 0, 0, 0.447353) 99.8%, rgba(10, 10, 10, 0) 99.96%, rgba(126, 126, 126, 0) 99.97%, rgba(0, 0, 0, 0.5) 99.98%), url(" +
      RetroFurnish +
      ")",

    backgroundRepeat: "repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    padding: '3rem'
  },
  nexStepContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: '5vh',
    display: 'flex',
  },
  footer: {
    height: '50vh',
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-around',
    marginTop: '5rem'
  },
  logo: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    margin:'auto'
  },
}));
const Home = () => {
  const classes = homeStyles();

  return (
    <>
      <div>
        {/* VALUE PROPOSITION */}
        <Grid xs={12} className={classes.proposition}>
          <Grid
            xs={12}
            sm={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h1" align="center">
              Prepare for your next job faster and smarter
            </Typography>
            <Typography
              variant="h4"
              align="center"
              style={{ marginTop: "2rem", color: "#d4d4d4" }}
            >
              A search platform with a dedicated community hub for you to search
              all the learning materials, job posts and tips around the
              internet.
            </Typography>
            <Button
              style={{ marginTop: "2rem", fontSize: "1.5rem" }}
              variant="contained"
            >
              Start now
            </Button>
          </Grid>
        </Grid>

        {/* LIST FEATURE PROVIDED */}
        <Grid xs={12}>
          <Typography variant="h4" align="center" style={{ marginTop: "2rem" }}>
            Provided Features
          </Typography>
          <Grid xs={12} className={classes.featureList}>
            <CardFeature
              title="Education Search Engingee"
              desc="Reduce your time spend search for resources and comparing them, let us handle that"
              img={OnlineLearningIllustration}
            />
            <CardFeature
              title="Job Search Enginee"
              desc="Reduce your time spend search for resources and comparing them, let us handle that"
              img={Forum}
            />
            <CardFeature
              title="Community Hub"
              desc="Reduce your time spend search for resources and comparing them, let us handle that"
              img={Workshop}
            />
            <CardFeature
              title="Professional Workshop"
              desc="Reduce your time spend search for resources and comparing them, let us handle that"
              img={JobSearch}
            />
          </Grid>
        </Grid>

        {/* FLEX ON THE SEARCH ENGINEE */}
        <Grid xs={12} md={12} className={classes.resourcesListContainer}>
          <Paper className={classes.resourcesPaper}>
            <Typography variant="h3" align="center">
              We crawl through the internet to find resources from
            </Typography>
            <Box xs={12} className={classes.resourcesList}>
              <img
                className={classes.imgBrand}
                alt="education source"
                src={TextBook}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Youtube}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Coursera}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Harvard}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={GoogleScholar}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Indeed}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={Glassdoor}
              />
              <img
                className={classes.imgBrand}
                alt="education source"
                src={LinkedIn}
              />
            </Box>
            <Typography variant="h6">
              + dozen more resources to come
            </Typography>
            <Typography
              align="center"
              variant="h4"
              style={{ fontWeight: "bold" }}
            >
              so that you don't
            </Typography>

            <Typography style={{ textAlign: "center", fontSize: 24 }}>
              <Link href="#">Search now</Link>
            </Typography>
          </Paper>
        </Grid>

        {/* Community Hub explain */}
        <Box xs={12} display="flex" flexWrap="wrap">
          <Grid
            xs={12}
            lg={6}
            md={6}
            style={{ margin: "2rem auto 2rem auto", paddingLeft: "1rem" }}
          >
            <Typography variant="h3">
              A fully integrated suite of learning material and job resources
              from multiple platform combind
            </Typography>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
              We bring together everything that’s require to land your next
              jobs. From edcational resources to improve your skills, to job
              search enginee, or a professional workshop where you can
              improve upon your interview and resume skill.
            </Typography>
            <Typography variant="h4" style={{ margin: "2rem 0 2rem 0" }}>
              We also provide a <Link>community hub</Link> for users to join and
              share their ideals, struggle, and suggestion to one of another.{" "}
            </Typography>
            <Button variant="contained" color="primary">
              Explore now
            </Button>
          </Grid>
          <Grid xs={12} lg={5} md={5}>
            <img
              className={classes.communityImg}
              src={CommunityHub}
              alt="united covid 19 unsplash"
            ></img>
          </Grid>
        </Box>


        <Box xs={12} className={classes.nextStep}>
          <Grid xs={9} className={classes.nexStepContent}>
            <Typography variant="h3"> Ready to get started ?</Typography>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it
            </Typography>
            <Grid xs={12} className={classes.buttonContainer}>
              <Button style={{ width: '8rem', height: '4rem', marginRight: '3vw' }} variant="contained" color="secondary">
                Start now
            </Button>
              <Button style={{ width: '8rem', height: '4rem' }} variant="contained" color="primary">
                Explore services
            </Button>
            </Grid>
          </Grid>
        </Box>

            <Footer/>
       
      </div>
    </>
  );
};
export default Home;
