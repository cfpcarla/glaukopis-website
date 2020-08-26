import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import CardFeature from "./side-components/card-features";
import OnlineLearningIllustration from "../assets/photo/online-learning-illustration.png";
import Forum from "../assets/photo/forum.png";
import Workshop from "../assets/photo/workshop.png";
import JobSearch from "../assets/photo/job-opportunities.png";
import Collecting from "../assets/photo/undraw_collecting_fjjl.png";
import Review from "../assets/photo/review.png";
import Compare from "../assets/photo/compare.png";
import Filter from "../assets/photo/filter.png";
import { ReactComponent as Abstract } from "../assets/svg/undraw_abstract_x68e.svg";
import { ReactComponent as Bookworm } from "../assets/svg/undraw_book_lover_mkck.svg";
import { ReactComponent as OnlineReading } from "../assets/svg/undraw_online_reading_np7n.svg";
import { ReactComponent as CareerProgression } from "../assets/svg/undraw_career_progress_ivdb.svg";
import { ReactComponent as Connection } from "../assets/svg/undraw_connection_b38q.svg";

const serviceStyle = makeStyles((theme) => ({
  serviceHeader: {
    paddingTop: "5vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  serviceHeaderImg: {
    width: "30vw",
    height: "50vh",
    [theme.breakpoints.down("md")]: {
      width: "40vw",
      height: "50vh",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
      height: "max-content",
    },
  },
  btnPrimary: {
    padding: "1.5rem",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  btnSecondary: {
    padding: "1.5rem",
    margin: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  generalFeatureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
  Container: {
    display: "flex",
    paddingBottom: "5vh",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "10px 10px 0 0",
  },
  contentFeatureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  Content: {
    marginTop: "5vh",
  },
  btnShow: {
    margin: "5vh 0 0 0",
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const Service = () => {
  const classes = serviceStyle();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className={classes.serviceHeader}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Abstract className={classes.serviceHeaderImg} />
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              align="center"
              variant="h3"
              style={{ margin: "2vh 0 2vh 0" }}
            >
              One platform for a library of jobs and educations
            </Typography>
            <Typography align="center" variant="h4">
              All feature has their purpose in helping you pursuit your next
              career
            </Typography>
          </Grid>
        </Box>

        <Grid>
          <Button
            className={classes.btnPrimary}
            color="primary"
            variant="contained"
          >
            Start now
          </Button>
          <Button
            className={classes.btnSecondary}
            color="secondary"
            variant="contained"
          >
            See all features
          </Button>
        </Grid>

        <Grid item xs={12} style={{ marginBottom: "2vh" }}>
          <Typography variant="h4" align="center" style={{ marginTop: "2rem" }}>
            Glaukopis provided features
          </Typography>
          <Grid item xs={12} className={classes.generalFeatureList}>
            <CardFeature
              title="Education Search "
              desc="Reduce your time spend search for resources and comparing them, let us handle that"
              img={OnlineLearningIllustration}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Job Search "
              desc="Reduce your time spend search for resources and comparing them, let us handle that"
              img={Forum}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Community Hub"
              desc="Reduce your time spend search for resources and comparing them, let us handle that"
              img={Workshop}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Professional Workshop"
              desc="Reduce your time spend search for resources and comparing them, let us handle that"
              img={JobSearch}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
          </Grid>
        </Grid>

        {/* EDUCATION SECTION */}
        <Grid
          container
          className={classes.Container}
          style={{ backgroundColor: "#b47775" }}
        >
          <Bookworm
            xs={12}
            md={6}
            lg={4}
            style={{ marginTop: "10vh" }}
            className="img"
          />
          <Grid item xs={10} md={4} lg={4} className={classes.Content}>
            <Typography style={{ marginBottom: "0.5rem" }} variant="h2">
              Education Search Enginee
            </Typography>

            <Typography variant="h4">
              Use our search enginee Glaukopis to search for your perfect
              resources - from any education platform or any format, - so you
              can study and upskill for your next career or promotion.
            </Typography>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Search Enginee Features
              </Typography>
              <Grid container className={classes.contentFeatureList}>
                <Carousel autoPlay={false}>
                  <CardFeature
                    title="Multi sources "
                    desc="Our library collect
                    information related to educational courses
                    or program from around the internet, 
                    and slot them here for you to view. Either that is from Youtube
                    University program, Online courses, or online bootcamp - here 
                    you can find all of them customize for your preference. "
                    img={Collecting}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Filter to your taste "
                    desc="Change what platform you want us to search in - either it's Online courses, University lecture, or Youtube videos "
                    img={Filter}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Save and Compare"
                    desc="Still don't know which one to choose - save and compare theme both side by side "
                    img={Compare}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="General Review"
                    desc="We gather review from the resources website so you can validate it base on how satisfy everyone was when learning"
                    img={Review}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                </Carousel>
              </Grid>
            </Grid>
            <Button
              className={classes.btnShow}
              color="primary"
              variant="contained"
            >
              Start your education search now
            </Button>
          </Grid>
        </Grid>

        {/* JOB SEARCH SECTION */}
        <Grid container className={classes.Container}>
          <Grid item xs={10} md={4} lg={4} className={classes.Content}>
            <Typography style={{ marginBottom: "0.5rem" }} variant="h2">
              Job Search Enginee
            </Typography>

            <Typography variant="h4">
              Similar to how to can search for education resources - you can too
              search for your next jobs -{" "}
              <b>but boarder, wider, and more result</b>.
            </Typography>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Search Enginee Features
              </Typography>
              <Grid container className={classes.contentFeatureList}>
                <Carousel autoPlay={false}>
                  <CardFeature
                    title="Filter Platform "
                    desc="Change what platform you want us to search in - either it's Online courses, University lecture, or Youtube videos "
                    img={Collecting}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Save point"
                    desc="Still don't know which one to choose - save and compare theme both side by side "
                    img={Forum}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="General Review"
                    desc="We gather review from the resources website so you can validate it base on how satisfy everyone was when learning"
                    img={Workshop}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                </Carousel>
              </Grid>
            </Grid>
            <Button
              className={classes.btnShow}
              color="primary"
              variant="contained"
            >
              Start your education search now
            </Button>
          </Grid>
          <OnlineReading
            xs={12}
            md={6}
            lg={4}
            style={{ marginTop: "10vh" }}
            className="img"
          />
        </Grid>

        {/* Community hub section */}
        <Grid
          container
          className={classes.Container}
          style={{ backgroundColor: "#b47775" }}
        >
          <Connection
            xs={12}
            md={6}
            lg={4}
            style={{ marginTop: "10vh" }}
            className="img"
          />
          <Grid item xs={10} md={4} lg={4} className={classes.Content}>
            <Typography style={{ marginBottom: "0.5rem" }} variant="h2">
              Community Hub
            </Typography>

            <Typography variant="h4">
              A place to share knowledge - something something bla bla bla
              tomorrow I will think of it.
            </Typography>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Search Enginee Features
              </Typography>
              <Grid container className={classes.contentFeatureList}>
                <Carousel autoPlay={false}>
                  <CardFeature
                    title="Filter Platform "
                    desc="Change what platform you want us to search in - either it's Online courses, University lecture, or Youtube videos "
                    img={Collecting}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Save point"
                    desc="Still don't know which one to choose - save and compare theme both side by side "
                    img={Forum}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="General Review"
                    desc="We gather review from the resources website so you can validate it base on how satisfy everyone was when learning"
                    img={Workshop}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                </Carousel>
              </Grid>
            </Grid>
            <Button
              className={classes.btnShow}
              color="primary"
              variant="contained"
            >
              Start your education search now
            </Button>
          </Grid>
        </Grid>

        {/* Professional Workshop Section */}
        <Grid container className={classes.Container}>
          <Grid item xs={10} md={4} lg={4} className={classes.Content}>
            <Typography style={{ marginBottom: "0.5rem" }} variant="h2">
              Professional Workshop
            </Typography>

            <Typography variant="h4">
              Similar to how to can search for education resources - you can too
              search for your next jobs -{" "}
              <b>but boarder, wider, and more result</b>.
            </Typography>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ marginTop: "2rem" }}>
                Search Enginee Features
              </Typography>
              <Grid container className={classes.contentFeatureList}>
                <Carousel autoPlay={false}>
                  <CardFeature
                    title="Filter Platform "
                    desc="Change what platform you want us to search in - either it's Online courses, University lecture, or Youtube videos "
                    img={Collecting}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="Save point"
                    desc="Still don't know which one to choose - save and compare theme both side by side "
                    img={Forum}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                  <CardFeature
                    title="General Review"
                    desc="We gather review from the resources website so you can validate it base on how satisfy everyone was when learning"
                    img={Workshop}
                    btn={false}
                    maxWidth={500}
                    margin="0 2vw 0 0"
                  />
                </Carousel>
              </Grid>
            </Grid>
            <Button
              className={classes.btnShow}
              color="primary"
              variant="contained"
            >
              Start your education search now
            </Button>
          </Grid>
          <CareerProgression
            xs={12}
            md={6}
            lg={4}
            style={{ marginTop: "10vh" }}
            className="img"
          />
        </Grid>
      </Box>
    </>
  );
};

export default Service;
