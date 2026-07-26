import { createTheme } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: "#ffff",
    },
    secondary: {
      main: purple[500],
      light: purple[400],
      dark: purple[300],
      contrastText: "#ffff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffff",
    },
  },
});
