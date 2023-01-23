import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { styled } from "@mui/system";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const TopBar = styled(Toolbar)({
  display: "flex",
  flexDirection: "row",
  // paddingLeft: "10px",
  // paddingRight: "10px",
  backgroundColor: "#E85B25",
  // justifyContent: "space-between",
  // width: "100%",
  // display: "",
});

const LeftIcons = styled("div")({
  flex: 1,
  // alignSelf: "flex-start",
  // flexDirection: "row",
  // alignItems: "center",
  // backgroundColor: "green",
});

const RightIcons = styled("div")({
  flex: 1,
  display: "flex",
  // backgroundColor: "blue",
  justifyContent: "flex-end",
  // display: "flex",
  // flexDirection: "row",
  // alignItems: "center",
});

const NavBar = () => {
  const { logout, loggedIn, profile } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <HideOnScroll>
      <TopBar>
        {/* <div>asdgf</div> */}
        {/* <TopBar> */}
        <LeftIcons>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ color: "white" }}
            onClick={() => navigate("/")}
          >
            @MightyMattXP
          </IconButton>
        </LeftIcons>
        {profile && (
          <RightIcons>
            <IconButton size="small" onClick={() => navigate("/user")}>
              <FontAwesomeIcon icon={faUserAstronaut} color="white" />
            </IconButton>
            <IconButton size="small" onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} color="white" />
            </IconButton>
          </RightIcons>
        )}
        {/* </TopBar> */}
      </TopBar>
    </HideOnScroll>
  );
};

export default NavBar;
