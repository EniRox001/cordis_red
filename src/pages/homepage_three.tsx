import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import HomeBgOne from "../assets/images/home_bg_one.png";
import NavigationBarThree from "../components/navigation_bar_three";

import Map from "../assets/images/map.png";
import HomeBgThree from "../assets/images/home_bg_three.png";

import LocationPin from "../assets/icons/location_pin.png";

import Logo from "../assets/icons/logo.png";
import FacebookIcon from "../assets/icons/facebook_icon.png";
import InstagramIcon from "../assets/icons/instagram_icon.png";
import XIcon from "../assets/icons/x_icon.png";

import Phone from "../assets/icons/phone.png";
import Gmail from "../assets/icons/gmail.png";

const HomePageThree = () => {
  return (
    <>
      <Box
        sx={{
          m: 0,
          p: 0,
          backgroundImage: `url(${HomeBgOne})`,
          width: "100vw",
          height: "100vh",
        }}
        component="div"
      >
        <NavigationBarThree />
        <Container
          sx={{
            height: "100%",
            color: "#ffffff",
            paddingTop: "8rem",
          }}
        >
          <Stack
            sx={{
              textAlign: "center",
              alignItems: "center",
            }}
            gap={3}
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
              Let's Work Together
            </Typography>
            <Typography>
              ileum for this luem foreum lorem mdkelire lorem kdkrelorem lorem
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff8c00",
                color: "#ffffff",
                borderRadius: "100px",
                textTransform: "none",
                height: "3rem",
                width: "14rem",
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
        sx={{
          backgroundImage: `url(${HomeBgThree})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          marginTop: { xs: "-13rem", sm: "-13rem", md: "-26rem" },
          paddingTop: { xs: "13rem", sm: "13rem", md: "26rem" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            marginX: { xs: "0rem", sm: "1rem", md: "10rem" },
          }}
        >
          <Stack
            sx={{}}
            direction={{ xs: "column", sm: "column", md: "row" }}
          >
            <Stack
              sx={{
                width: { md: "50%", lg: "50%" },
              }}
            >
              <Box src={Map} component={"img"} />
              <Stack padding={"2rem"} gap={1.2}>
                <Typography fontWeight={"bold"}>
                  Areas of Operation
                </Typography>
                <Stack
                  gap={2}
                  direction={"row"}
                  alignItems={"center"}
                  alignContent={"center"}
                >
                  <Box src={LocationPin} component={"img"} />
                  <Typography fontWeight={"light"}>
                    Trnava,Bratislava and nitra regions
                  </Typography>
                </Stack>
                <Typography fontWeight={"bold"}>
                  Our Contact Number
                </Typography>
                <Stack
                  gap={2}
                  direction={"row"}
                  alignItems={"center"}
                  alignContent={"center"}
                >
                  <Box src={Phone} component={"img"} />
                  <Typography fontWeight={"light"}>
                    +421 911 123 456
                  </Typography>
                </Stack>
                <Typography fontWeight={"bold"}>
                  Our gmail contact
                </Typography>
                <Stack
                  gap={2}
                  direction={"row"}
                  alignItems={"center"}
                  alignContent={"center"}
                >
                  <Box src={Gmail} component={"img"} />
                  <Typography fontWeight={"light"}>
                    robo.cordis@gmail.com
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{
                width: { md: "50%", lg: "50%" },
                padding: "2rem",
              }}
              gap={3}
            >
              <Typography alignSelf={"center"} fontWeight={"bold"}>
                Tell Us About Yourself
              </Typography>
              <Stack>
                <Typography>Name</Typography>
                <TextField multiline rows={3}></TextField>
              </Stack>
              <Stack>
                <Typography>Telephone</Typography>
                <TextField multiline rows={3}></TextField>
              </Stack>
              <Stack>
                <Typography>Email</Typography>
                <TextField multiline rows={3}></TextField>
              </Stack>
              <Stack>
                <Typography>Message</Typography>
                <TextField multiline rows={3}></TextField>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff8c00",
                  color: "#ffffff",
                  borderRadius: "100px",
                  textTransform: "none",
                  height: "3rem",
                  width: "8rem",
                }}
              >
                <Typography>
                  send
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            height: { xs: 0, md: "30vh" },
            backgroundColor: "#ec5e2a",
          }}
        />
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
                <Box
                  src={InstagramIcon}
                  component={"img"}
                  sx={{
                    height: "3rem",
                    width: "4rem",
                  }}
                />
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
      </Box>
    </>
  );
};

export default HomePageThree;
