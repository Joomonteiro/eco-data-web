import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  Avatar,
  IconButton,
  ListItem,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import CustomListItem from "../CustomListItem/CustomListItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "0px 2px 9px gray",
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function BasicStack() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ width: "95%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginBottom: "20px"
        }}
      >
        <div
          style={{ display: "flex", width: "305px", justifyContent: "center" }}
        >
          Ações
        </div>
        <div style={{ marginLeft: '-86px'}}>Última edição</div>
        <div style={{ marginLeft: '-78px'}}>Nome da Matriz</div>
        <div style={{ marginLeft: '-65px'}}>Tipo</div>
        <div style={{ marginLeft: '-89px'}}>Data de criação</div>
        <div style={{ marginLeft: '64px'}}>Pesquisador</div>
      </Box>
      <Stack spacing={2}>
        <CustomListItem
          avatarPath="/static/images/avatar/person-1.jpeg"
          userName="Gustavo Oliveira"
        />
        <CustomListItem
          avatarPath="/static/images/avatar/person-2.jpeg"
          userName="Rayane Soares"
        />
        <CustomListItem
          avatarPath="/static/images/avatar/person-3.jpeg"
          userName="Bárbara Farias"
        />
        <CustomListItem
          avatarPath="/static/images/avatar/person-4.jpeg"
          userName="Ana Karollinyn"
        />
        <CustomListItem
          avatarPath="/static/images/avatar/person-5.jpg"
          userName="Nielly Vicente"
        />
        <CustomListItem
          avatarPath="/static/images/avatar/person-2.jpeg"
          userName="Rayane Soares"
        />
        <CustomListItem
          avatarPath="/static/images/avatar/person-1.jpeg"
          userName="Gustavo Oliveira"
        />
        <CustomListItem
          avatarPath="/static/images/avatar/person-3.jpeg"
          userName="Bárbara Farias"
        />
        <CustomListItem
          avatarPath="/static/images/avatar/person-4.jpeg"
          userName="Ana Karollinyn"
        />
      </Stack>
    </Box>
  );
}
