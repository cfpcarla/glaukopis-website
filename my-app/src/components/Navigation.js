import React from "react";
import { ReactComponent as Owl } from "../assets/svg/owl.svg";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";

import {
  HOME,
  ABOUT,
  CONTACT,
  PERSONA,
  SERVICE,
} from "../controller/nav-controller";

//navigation button
const HeaderItem = ({ title, actionFn }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={actionFn}>
      <Typography variant="h6">{title}</Typography>
    </Button>
  );
};

const navStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
    padding: "2vh 0 2vh 0.5vw",
  },
  logo: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  rightHeaderMenu: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(3),
    justifyContent: "space-between",
  },
}));

const Navigation = (props) => {
  const classes = navStyles();

  const setParentDisplay = (value) => {
    props.setDisplay(value);
  };
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Grid container justify="space-between">
              <Grid className={`${classes.logo} logo-container`} item xs={12} sm={12} md={3}>
                <Owl className="logo" />
                <Typography variant="h4" style={{ color: "black" }}>
                  Glaukopis Wisdome
                </Typography>
              </Grid>
              <Grid item xs={9} sm={12} md={6}>
                <Box className={classes.rightHeaderMenu}>
                  <HeaderItem
                    title="Home"
                    actionFn={() => setParentDisplay(HOME)}
                  />
                  <HeaderItem
                    title="About"
                    actionFn={() => setParentDisplay(ABOUT)}
                  />
                  <HeaderItem
                    title="Service"
                    actionFn={() => setParentDisplay(SERVICE)}
                  />
                  <HeaderItem
                    title="Contact"
                    actionFn={() => setParentDisplay(CONTACT)}
                  />
                  <HeaderItem
                    title="Persona"
                    actionFn={() => setParentDisplay(PERSONA)}
                  />
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
