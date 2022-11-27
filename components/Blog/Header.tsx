import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import theme from "../../src/theme";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const router = useRouter();
  const { sections, title } = props;
  return (
    <React.Fragment>
      {/* <Toolbar sx={{ borderBottom: 1, borderColor: 'divider'}}> */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src="static/logo.png "
          alt="Minha Figura"
          style={{ maxWidth: "63vw" }}
        ></img>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Button color="primary" variant="contained" size="large">
            Solicite acesso
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </Button>
        </ThemeProvider>
        {/* <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography> */}
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
      </Box>
      {/* </Toolbar> */}
      {/* <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      > */}
      {/* {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))} */}
      {/* </Toolbar> */}
    </React.Fragment>
  );
}
