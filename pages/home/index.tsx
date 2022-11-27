import * as React from "react";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import BasicStack from "../../components/BasicStack/BasicStack";
import theme from "../../src/theme";

export default function SignInSide(props: any) {
  const { ...rest } = props;

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          verticalAlign: "center",
        }}
      >
        <ResponsiveAppBar />
        {/* <CircularProgress /> */}
        <BasicStack></BasicStack>
      </Grid>
    </ThemeProvider>
  );
}
