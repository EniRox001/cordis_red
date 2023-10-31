import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import { useState } from "react";

import Logo from "../assets/icons/logo_white.png";
import PhoneOrange from "../assets/icons/phone_orange.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function NavigationBarTwo() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: {
                xs: "space-between",
                sm: "space-between",
                md: "space-around",
              },
              flexDirection: "row",
            }}
          >
            <Stack
              direction={"row"}
              gap={3}
              sx={{
                alignItems: "center",
              }}
            >
              <Box
                src={Logo}
                component="img"
                sx={{
                  height: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                }}
              />
              <Link
                to="/"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    webkitTransition: "all 0.5s ease",
                    mozTransition: "all 0.5s ease",
                    msTransition: "all 0.5s ease",
                    oTransition: "all 0.5s ease",
                    transition: "all 0.5s ease",
                    "&:hover": {
                      color: "#ff8c00",
                      animationDelay: "3s",
                    },
                  }}
                >
                  CORDIS
                </Typography>
              </Link>
            </Stack>
            <Stack
              direction={"row"}
              gap={8}
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                textdecoration: "none",
                color: "#ffffff",
              }}
            >
              <Link
                to="/homepage_two"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    color: "white",
                    borderBottom: "2px solid transparent",
                    fontWeight: "bold",
                    webkitTransition: "all 0.5s ease",
                    mozTransition: "all 0.5s ease",
                    msTransition: "all 0.5s ease",
                    oTransition: "all 0.5s ease",
                    transition: "all 0.5s ease",
                    "&:hover": {
                      color: "white",
                      borderBottom: "2px solid white",
                      animationDelay: "3s",
                    },
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Link to="/homepage_three" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "white",
                    borderBottom: "2px solid transparent",
                    fontWeight: "bold",
                    webkitTransition: "all 0.5s ease",
                    mozTransition: "all 0.5s ease",
                    msTransition: "all 0.5s ease",
                    oTransition: "all 0.5s ease",
                    transition: "all 0.5s ease",
                    "&:hover": {
                      color: "white",
                      borderBottom: "2px solid white",
                      animationDelay: "3s",
                    },
                  }}
                >
                  Services
                </Typography>
              </Link>
              <Link to="/homepage_four" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "white",
                    borderBottom: "2px solid transparent",
                    fontWeight: "bold",
                    webkitTransition: "all 0.5s ease",
                    mozTransition: "all 0.5s ease",
                    msTransition: "all 0.5s ease",
                    oTransition: "all 0.5s ease",
                    transition: "all 0.5s ease",
                    "&:hover": {
                      color: "white",
                      borderBottom: "2px solid white",
                      animationDelay: "3s",
                    },
                  }}
                >
                  Contacts
                </Typography>
              </Link>
            </Stack>
            <>
              <IconButton
                onClick={handleClick}
                sx={{
                  display: { xs: "flex", sm: "flex", md: "none" },
                }}
              >
                {open
                  ? (
                    <CloseIcon
                      sx={{
                        color: "white",
                        backgroundColor: " #ff8c00",
                        padding: "0.5rem",
                      }}
                    />
                  )
                  : (
                    <MenuIcon
                      sx={{
                        color: "white",
                        backgroundColor: " #ff8c00",
                        padding: "0.5rem",
                      }}
                    />
                  )}
                {" "}
              </IconButton>
            </>
            <Stack
              direction="row"
              gap={2}
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Box src={PhoneOrange} component="img" />
              <Typography sx={{ color: "orange" }}>
                +421 940 355 485
              </Typography>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          height: { xs: open ? "32vh" : 0, sm: open ? "100vh" : 0, md: "0" },
          backgroundColor: "#ffffff",
          display: {
            xs: open ? "flex" : "none",
            sm: open ? "flex" : "none",
            md: "none",
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack>
          <Link to="/homepage_two" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
                webkitTransition: "all 0.5s ease",
                mozTransition: "all 0.5s ease",
                msTransition: "all 0.5s ease",
                oTransition: "all 0.5s ease",
                transition: "all 0.5s ease",
                "&:hover": {
                  color: "#ff8c00",
                  animationDelay: "3s",
                },
              }}
            >
              Home
            </Typography>
          </Link>
          <Link to="/homepage_three" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "black",
                alignItems: "center",
                textAlign: "center",
                alignSelf: "center",
                pt: 3,
                fontWeight: "bold",
                webkitTransition: "all 0.5s ease",
                mozTransition: "all 0.5s ease",
                msTransition: "all 0.5s ease",
                oTransition: "all 0.5s ease",
                transition: "all 0.5s ease",
                "&:hover": {
                  color: "#ff8c00",
                  animationDelay: "3s",
                },
              }}
            >
              Services
            </Typography>
          </Link>

          <Link to="/homepage_four" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "black",
                textAlign: "center",
                alignItems: "center",
                alignSelf: "center",
                pt: 3,
                fontWeight: "bold",
                webkitTransition: "all 0.5s ease",
                mozTransition: "all 0.5s ease",
                msTransition: "all 0.5s ease",
                oTransition: "all 0.5s ease",
                transition: "all 0.5s ease",
                "&:hover": {
                  color: "#ff8c00",
                  animationDelay: "3s",
                },
              }}
            >
              Contacts
            </Typography>
          </Link>
          <Link to="/homepage_four" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "black",
                textAlign: "center",
                alignItems: "center",
                alignSelf: "center",
                pt: 3,
                fontWeight: "bold",
                webkitTransition: "all 0.5s ease",
                mozTransition: "all 0.5s ease",
                msTransition: "all 0.5s ease",
                oTransition: "all 0.5s ease",
                transition: "all 0.5s ease",
                "&:hover": {
                  color: "#ff8c00",
                  animationDelay: "3s",
                },
              }}
            >
              +421 940 355 485
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
