import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import Logo from "../assets/icons/logo.png";

import FacebookIcon from "../assets/icons/facebook_icon.png";
import InstagramIcon from "../assets/icons/instagram_icon.png";
import XIcon from "../assets/icons/x_icon.png";

import HomeBgFour from "../assets/images/home_bg_four.png";
import NavigationBarFour from "../components/navigation_bar_four";

import RoofCleaning from "../assets/images/roof_cleaning.png";
import CleaningFades from "../assets/images/cleaning_fades.png";
import CleaningWindows from "../assets/images/cleaning_windows.png";

const HomePageFour = () => {
  return (
    <>
      <Box
        sx={{
          m: 0,
          p: 0,
          backgroundImage: `url(${HomeBgFour})`,
          noRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
        component="div"
      >
        <NavigationBarFour />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "#ffffff",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              textAlign: { xs: "center", sm: "center", md: "left" },
            }}
            gap={6}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "4rem",
                },
              }}
            >
              Smart People Solving<br />Many Problems
            </Typography>
            <Typography>
              Entrust your height requirements to professionals. We offer
              quality at reasonable prices.<br />{" "}
              cleaning activities,call Cordis Ltd
            </Typography>
            <Button
              variant="contained"
              sx={{
                color: "#ff8c00",
                backgroundColor: "#ffffff",
                borderRadius: "100px",
                textTransform: "none",
                height: "3rem",
                width: "14rem",
                webkitTransition: "all 0.5s ease",
                mozTransition: "all 0.5s ease",
                msTransition: "all 0.5s ease",
                oTransition: "all 0.5s ease",
                transition: "all 0.5s ease",
                "&:hover": {
                  color: "#ffffff",
                  border: "1px solid #ff8c00",
                  backgroundColor: "transparent",
                  animationDelay: "3s",
                },
              }}
            >
              <Typography>
                Make an appointment
              </Typography>
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box
        paddingTop={10}
        justifyContent={"center"}
        alignItems={"center"}
        paddingBottom={20}
      >
        <Stack gap={12}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "2rem",
                sm: "3rem",
              },
            }}
          >
            We are Experts when it comes to<br />Cleaning Services
          </Typography>

          <Stack
            sx={{
              alignItems: "center",
              alignSlef: "center",
              justifyContent: "center",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
              },
              color: "#ffffff",
            }}
            gap={3}
          >
            <Box
              sx={{
                height: "255px",
                width: "382px",
                display: "flex",
                backgroundImage: `url(${RoofCleaning})`,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Typography alignSelf={"center"}>
                Roff Cleaning
              </Typography>
            </Box>

            <Box
              sx={{
                height: "255px",
                width: "382px",
                display: "flex",
                backgroundImage: `url(${CleaningFades})`,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Typography alignSelf={"center"}>
                Cleaning of Fades
              </Typography>
            </Box>
            <Box
              sx={{
                height: "255px",
                width: "382px",
                display: "flex",
                backgroundImage: `url(${CleaningWindows})`,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Typography alignSelf={"center"}>
                Cleaning of Windows
              </Typography>
            </Box>
          </Stack>
          <Typography
            sx={{
              textAlign: "center",
              mt: { xs: 0, sm: 0, md: 16 },
              fontSize: {
                xs: "2rem",
                sm: "3rem",
              },
              px: 5,
            }}
          >
            How Does It Work For Us
          </Typography>
          <Stack
            sx={{
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
              },
              paddingX: { xs: 5, sm: 0, md: 18 },
            }}
            gap={7}
          >
            <Stack>
              <Stack direction={"row"}>
                <Typography color={"#ff8c00"}>01</Typography>
                <Divider
                  sx={{
                    alignSelf: "center",
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#ff8c00",
                  }}
                />
              </Stack>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.5rem",
                  },
                }}
              >
                Consultation
              </Typography>
              <Typography>
                It is important that we know about you, you can call, send an
                email or fill out a form. Then comes the analysis of your
                request and the proposal of a solution
              </Typography>
            </Stack>
            <Stack>
              <Stack direction={"row"}>
                <Typography color={"#ff8c00"}>02</Typography>
                <Divider
                  sx={{
                    alignSelf: "center",
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#ff8c00",
                  }}
                />
              </Stack>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.5rem",
                  },
                }}
              >
                Price Calculation
              </Typography>
              <Typography>
                It is important that we know about you, you can call, send an
                email or fill out a form. Then comes the analysis of your
                request and the proposal of a solution
              </Typography>
            </Stack>
            <Stack>
              <Stack direction={"row"}>
                <Typography color={"#ff8c00"}>03</Typography>
                <Divider
                  sx={{
                    alignSelf: "center",
                    height: "1px",
                    width: "100%",
                    backgroundColor: "#ff8c00",
                  }}
                />
              </Stack>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.5rem",
                  },
                }}
              >
                Implementation
              </Typography>
              <Typography>
                It is important that we know about you, you can call, send an
                email or fill out a form. Then comes the analysis of your
                request and the proposal of a solution
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "#9B9797",
          px: { xs: 4, sm: 4, md: 10 },
          py: { xs: 4, sm: 4, md: 10 },
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <Stack gap={6}>
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
              <Typography
                sx={{
                  color: "#ffffff",
                }}
              >
                CORDIS
              </Typography>
            </Stack>
            <Typography>
              We go to places that make others dizzy
            </Typography>
            <Stack
              direction={"row"}
              sx={{
                mt: -4,
                ml: -1.5,
              }}
            >
              <Box
                src={FacebookIcon}
                component={"img"}
                sx={{
                  height: "3rem",
                  width: "4rem",
                }}
              />
              <a href="https://instagram.com/cordis_vyskove_prace?igshid=MzMyNGUyNmU2YQ==">
                <Box
                  src={InstagramIcon}
                  component={"img"}
                  sx={{
                    height: "3rem",
                    width: "4rem",
                  }}
                />
              </a>
              <Box
                src={XIcon}
                component={"img"}
                sx={{
                  height: "3rem",
                  width: "4rem",
                }}
              />
            </Stack>
          </Stack>
          <Stack gap={.7}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: "1.2rem",
              }}
            >
              Contact info
            </Typography>
            <Typography>
              +421 940 355 485
            </Typography>
            <Typography>
              robo.cordis@gmail.com
            </Typography>
            <Typography>
              personal data protection
            </Typography>
          </Stack>
          <Stack gap={.7}>
            <Typography>
              Billing information
            </Typography>
            <Typography>
              Robert Tho’th
            </Typography>

            <Typography>
              ID:54-638-241
            </Typography>
            <Typography>
              Tomasikova 12573/50E,831 04
            </Typography>
            <Typography>
              Bratislava-nove Mesto
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default HomePageFour;
