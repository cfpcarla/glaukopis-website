import React from "react";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import {
  HOME,
  ABOUT,
  CONTACT,
  PERSONA,
  SERVICE,
} from "../controller/nav-controller";

//navigation button style
const useHeaderItemStyles = makeStyles((theme) => ({
  title: {
    fontSize: 18,
    alignContent: "center",
    paddingLeft: "9px",
  },
}));

//navigation button
const HeaderItem = ({ title, actionFn }) => {
  const classes = useHeaderItemStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        className={classes.title}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={actionFn}
      >
        {title}
      </Button>
    </div>
  );
};

const Navigation = (props) => {
  const setParentDisplay = (value) => {
    props.setDisplay(value);
  };
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={12}>
            <Grid item xs={12} sm={12} md={3}>
              <Box>
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
    </React.Fragment>
  );
};

export default Navigation;
