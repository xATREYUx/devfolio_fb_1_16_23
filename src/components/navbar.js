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

const TopBar = styled(AppBar)`
  maxHeight: "3rem",
  justifyContent: "center",
`;

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = () => {
  const { logout, loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <HideOnScroll>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <TopBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            sx={{ flexGrow: 1 }}
            // className={classes.appTitle}
            onClick={() => navigate("/home")}
          >
            @noBrainer
          </Typography> */}
          <div>
            {loggedIn && (
              <Box>
                <IconButton size="small" onClick={() => navigate("/user")}>
                  <div className="nav-icon">
                    <FontAwesomeIcon icon={faUserAstronaut} color="white" />
                  </div>
                </IconButton>
                <IconButton size="small" onClick={logout}>
                  <div className="nav-icon">
                    <FontAwesomeIcon icon={faSignOutAlt} color="white" />
                  </div>
                </IconButton>
              </Box>
            )}
            {!loggedIn && (
              <>
                <div className="nav-icon" onClick={() => navigate("/")}>
                  {/* Sign In */}
                  @MightyMattXP
                </div>
              </>
            )}
          </div>
        </Toolbar>
      </TopBar>
      {/* </Box> */}
    </HideOnScroll>
  );
};

export default NavBar;
