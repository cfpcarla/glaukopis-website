import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
  typography: {
    fontFamily: "Playfair Display",
  },
  shape: {
    borderRadius: 5,
  },
  overrides: {
    //override some of the classes material ui provide
  },
  props: {
    //change the propoty of the classes.
  },
});
