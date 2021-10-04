import { createTheme } from "@material-ui/core/styles";

export const lightTheme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial",
  },
  palette: {
    primary: {
      main: "#00D89B",
    },
    secondary: {
      main: "#FF5A5F",
    },
    error: {
      main: "#FF5A5F",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F3F3",
    },
    text: {
      primary: "#000000",
    },
  },
});
