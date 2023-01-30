import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Toolbar from "@mui/material/Toolbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { theme } from "../theme";

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
  backgroundColor: "#FF6600",
  // borderBottomRightRadius: 20,
  // borderBottomLeftRadius: 20,
  height: 0,
});

const LeftIcons = styled("div")({
  flex: 1,
});

const RightIcons = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
});

const NavBar = () => {
  const { logout, profile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/home");
    logout();
  };
  return (
    <HideOnScroll>
      <TopBar>
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
            <Typography
              variant="h3"
              // gutterBottom
              align="center"
              // className={classes.cardTitle}
              style={{
                ...theme.typography.subtitle1,
                color: "white",
                // position: "absolute",
                fontSize: "1.5rem",

                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              @mattattheworld_
            </Typography>
          </IconButton>
        </LeftIcons>
        {profile && (
          <RightIcons>
            <IconButton size="small" onClick={() => navigate("/user")}>
              <FontAwesomeIcon icon={faUserAstronaut} color="white" />
            </IconButton>
            <IconButton size="small" onClick={onLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} color="white" />
            </IconButton>
          </RightIcons>
        )}
      </TopBar>
    </HideOnScroll>
  );
};

export default NavBar;
