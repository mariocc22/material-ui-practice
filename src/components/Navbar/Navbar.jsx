// material ui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// consts
import { mainNavbarItems } from "./consts/navbarItems";

// styles
import { navbarStyles } from "./styles.js";

// react router
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.7)" }} />
      <List>
        {mainNavbarItems.map((text, index) => (
          <ListItem
            key={text.id}
            disablePadding
            onClick={() => navigate(text.route)}
          >
            <ListItemButton>
              <ListItemIcon sx={navbarStyles.icons}>{text.icon}</ListItemIcon>
              <ListItemText sx={navbarStyles.text} primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.7)" }} />
    </Drawer>
  );
};

export default Navbar;
