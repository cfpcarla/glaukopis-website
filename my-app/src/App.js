import React, { useState } from "react";
import "./App.css";
import { theme } from "./styles/theme";
import { Box, makeStyles, ThemeProvider } from "@material-ui/core";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/home";

import {
  HOME,
  ABOUT,
  CONTACT,
  PERSONA,
  SERVICE,
} from "./controller/nav-controller";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const [display, setDisplay] = useState(HOME);
  return (
    <ThemeProvider theme={theme}>
      <Navigation setDisplay={setDisplay}></Navigation>
      <div className={classes.root}>
        <Box display={display === HOME ? "block" : "none"}>
          <Home/>
        </Box>
        <Box display={display === ABOUT ? "block" : "none"}>
          <About />
        </Box>
        <Box display={display === CONTACT ? "block" : "none"}>
          <Contact />
        </Box>
        <Box display={display === SERVICE ? "block" : "none"}></Box>
        <Box display={display === PERSONA ? "block" : "none"}></Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
