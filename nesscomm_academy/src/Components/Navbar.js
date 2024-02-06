import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = (text) => {
    console.log("Clicked:", text);
    setOpenMenu(false); // Close the menu after a menu item is clicked
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Value",
      icon: <InfoIcon />,
    },
    {
      text: "Benefit",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Program",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Testimoni",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: "Galeri",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: "Bantuan",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item, index) => (
          <a href="#" key={index} onClick={() => handleMenuClick(item.text)}>
            {item.text}
          </a>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column", // Display items vertically
            justifyContent: "flex-start", // Align items to the top
            alignItems: "stretch", // Stretch items to fill the width
          }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleMenuClick(item.text)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
