import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import Logo from "../assets/icons/logo_white.png";
import PhoneOrange from "../assets/icons/phone_orange.png";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function NavigationBarTwo() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
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
            <Typography>
              CORDIS
            </Typography>
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
            <Link to="/">
              <Typography sx={{ color: "white" }}>
                Home
              </Typography>
            </Link>
            <Link to="/homepage_two">
              <Typography color={"orange"}>
                Services
              </Typography>
            </Link>
            <Link to="/homepage_three">
              <Typography sx={{ color: "white" }}>
                Contacts
              </Typography>
            </Link>
          </Stack>
          <>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                display: { xs: "flex", sm: "flex", md: "none" },
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                }}
              >
                Menu
              </Typography>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/">
                  <Typography sx={{ color: "orange" }}>
                    Home
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/homepage_two">
                  <Typography color={"black"}>
                    Services
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/homepage_three">
                  <Typography color={"black"}>
                    Contacts
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
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
  );
}
