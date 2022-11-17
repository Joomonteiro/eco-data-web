import * as React from "react";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const theme = createTheme();

export default function SignInSide() {
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", width: "100vw", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          verticalAlign: "center",
        }}
      >
        <CircularProgress />
      </Box>
    </Grid>
  );
}
