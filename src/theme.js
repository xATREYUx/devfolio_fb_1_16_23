import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { 500: "#E85B25" },
  },
  typography: {
    h1: {
      fontFamily: "Bangers",
    },
    h3: {
      fontFamily: "Bangers",
      letterSpacing: 1.4,
    },
    subtitle1: {
      fontFamily: "Cuprum",
      fontSize: "1rem",
      // fontWeight: 500,
    },
    body: {
      fontFamily: "Cuprum",
      fontSize: "1.5rem",
      fontWeight: 400,
      background: "white",
    },
    blogPost: {
      overflowX: "auto",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word",
      fontFamily: "Cuprum",
      fontSize: "1.5rem",
      fontWeight: 400,
      background: "white",
    },
    // input: {
    //   backgroundColor: "white",
    // },
  },
});
