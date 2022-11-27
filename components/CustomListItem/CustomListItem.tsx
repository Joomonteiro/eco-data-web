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
  Link,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "0px 2px 9px gray",
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function CustomListItem(props: any) {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `static/Planilha_MODELO_DADOS_PELD - Metadados_add_John.xlsx`;
    link.href = "static/Planilha_MODELO_DADOS_PELD - Metadados_add_John.xlsx";
    link.click();
  };

  const router = useRouter();

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
    <Item style={{ display: "flex", justifyContent: "space-evenly" }}>
      <IconButton onClick={()=>{
        router.push("/view-sheet");
      }} sx={{ p: 0 }}>
        <RemoveRedEyeIcon />
      </IconButton>
      <IconButton onClick={()=>{
        router.push("/view-sheet");
      }} sx={{ p: 0 }}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={onDownload} sx={{ p: 0 }}>
        <SimCardDownloadIcon />
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center" }}>21/10/2022</Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>Matrix de peixes</Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>Peixes</Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>19/09/2022</Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>{props.userName}</Box>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src={props.avatarPath} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Item>
  );
}
