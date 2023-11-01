import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NavigationBar from "../components/navigation_bar";

import Logo from "../assets/icons/logo.png";

import HomeBgOne from "../assets/images/home_bg_one.png";
import PhoneOrange from "../assets/icons/phone_orange.png";

import OurServicesOne from "../assets/images/our_services_one.png";
import OurServicesTwo from "../assets/images/our_services_two.png";
import OurServicesThree from "../assets/images/our_services_three.png";

import AttractionServiceIcon from "../assets/icons/attraction_service_icon.png";
import CleaningServiceIcon from "../assets/icons/cleaning_service_icon.png";
import InstallationServiceIcon from "../assets/icons/installation_service_icon.png";

import YellowStar from "../assets/icons/yellow_star.png";
import OrangeStar from "../assets/icons/orange_star.png";
import BlueStar from "../assets/icons/blue_star.png";

import PartnerOne from "../assets/images/partner_one.png";
import PartnerTwo from "../assets/images/partner_two.png";
import PartnerThree from "../assets/images/partner_three.png";

import CTAHalfBg from "../assets/images/cta-half.png";

import FacebookIcon from "../assets/icons/facebook_icon.png";
import InstagramIcon from "../assets/icons/instagram_icon.png";
import XIcon from "../assets/icons/x_icon.png";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          m: 0,
          p: 0,
          backgroundImage: `url(${HomeBgOne})`,
          height: "100vh",
          width: "100vw",
        }}
        component="div"
      >
        <NavigationBar />
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
              Welcome to Cordis
            </Typography>
            <Typography>
              Entrust your height requirements to professionals. We offer
              quality at reasonable prices.<br />{" "}
              cleaning activities,call Cordis Ltd
            </Typography>
            <Button
              sx={{
                backgroundColor: "#ff8c00",
                color: "#ffffff",
                borderRadius: "100px",
                textTransform: "none",
                height: "3rem",
                width: "14rem",
                "&:hover": {
                  color: "#ff8c00",
                  border: "1px solid #ff8c00",
                  backgroundcolor: "#ffffff",
                  animationdelay: "3s",
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
        sx={{
          backgroundColor: "#f5f4f4",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            py: { xs: 8, sm: 8, md: 5 },
          }}
        >
          <Stack
            gap={3}
            sx={{
              width: { md: "50%" },
              px: { xs: 4, md: 10 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
              }}
            >
              Watch Our Intro Video
            </Typography>
            <Stack gap={6}>
              <Typography fontWeight={"bold"}>
                Professionalism, pleasant demeeanor and the ability to solve
                your every request with a dose of elegance
              </Typography>
              <Typography>
                Our team is trained in accordance with Act no. 124/2006 Coll.,
                NV No. 392/2006 Coll. and decrees of the Ministry of Internal
                Affairs and Communications of the Slovak Republic 147/2013 Coll.
                with a permit for work at heights using mountaineering and
                speleological techniques. We will reach where others consider it
                impossible. We work on ropes high above and below the ground. We
                don't know the sentence: "This is impossible!"
              </Typography>
              <Typography sx={{ pb: 4 }}>
                We always try to find a solution to your desires, even if they
                seem incredible at first glance .
              </Typography>
            </Stack>
            <Divider />
            <Typography>
              call the heights
            </Typography>
            <Stack
              direction="row"
              gap={2}
              sx={{
                alignItems: "center",
              }}
            >
              <Box src={PhoneOrange} component="img" />
              <Typography sx={{ color: "#ff8c00" }}>
                +421 940 355 485
              </Typography>
            </Stack>
          </Stack>
          <Container
            sx={{
              width: { xs: "100%", md: "50%" },
              marginTop: { xs: 4, md: "-100px" },
              mx: { xs: 0, md: 4 },
              px: { xs: 4, md: 7 },
              py: 5,
              backgroundColor: "#ffffff",
            }}
          >
            <form
              action="https://formsubmit.co/robo.cordis@gmail.com"
              style={{
                gap: 30,
                display: "flex",
                flexDirection: "column",
              }}
              method="POST"
            >
              <Stack gap={2}>
                <Typography>
                  Name <span style={{ color: "#ff8c00" }}>*</span>
                </Typography>
                <TextField
                  name="name"
                  multiline
                  rows={3}
                >
                </TextField>
              </Stack>
              <Stack gap={2}>
                <Typography>
                  Telephone
                </Typography>
                <TextField
                  name="telephone"
                  multiline
                  rows={3}
                >
                </TextField>
              </Stack>
              <Stack gap={2}>
                <Typography>
                  Cleaning Location <span style={{ color: "#ff8c00" }}>*</span>
                </Typography>
                <TextField
                  name="cleaningLocation"
                  multiline
                  rows={3}
                >
                </TextField>
              </Stack>
              <Stack gap={2}>
                <Typography>
                  Message <span style={{ color: "#ff8c00" }}>*</span>
                </Typography>
                <TextField
                  name="message"
                  multiline
                  rows={3}
                >
                </TextField>
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
                  "&:hover": {
                    color: "#ff8c00",
                    border: "1px solid #ff8c00",
                    backgroundColor: "transparent",
                    animationDelay: "3s",
                  },
                }}
                type="submit"
              >
                <Typography>
                  send
                </Typography>
              </Button>
            </form>
          </Container>
        </Stack>
      </Box>
      <Box>
        <Stack>
          <Typography
            sx={{
              backgroundColor: "#f5f4f4",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
              pb: { xs: 4, sm: 4, md: 10 },
            }}
          >
            Our Services
          </Typography>
        </Stack>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundImage: `url(${OurServicesOne})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                component: "div",
                height: "50vh",
                backgroundColor: "#000000",
                webkitTransition: "all 0.5s ease",
                mozTransition: "all 0.5s ease",
                msTransition: "all 0.5s ease",
                oTransition: "all 0.5s ease",
                transition: "all 0.5s ease",
                "&:hover": {
                  filter: "brightness(0.5)",
                  backgroundColor: "#000000",
                  opacity: "2",
                  animationDelay: "3s",
                },
              }}
            >
              <Stack
                gap={3}
                sx={{
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${CleaningServiceIcon})`,
                    backgroundRepeat: "no-repeat",
                    height: "70px",
                    width: "70px",
                    alignSelf: "center",
                  }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  Cleaning
                </Typography>
                <Stack
                  sx={{
                    px: { xs: 10, sm: 12, md: 15 },
                  }}
                  gap={2}
                >
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={OrangeStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Banner Advertisement
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={OrangeStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Manipulation work
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={OrangeStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Demolition Work
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={OrangeStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Prunning and Saw of Trees
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={OrangeStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Others
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${OurServicesTwo})`,
                component: "div",
                height: "50vh",
                backgroundColor: "#000000",
                webkitTransition: "all 0.5s ease",
                mozTransition: "all 0.5s ease",
                msTransition: "all 0.5s ease",
                oTransition: "all 0.5s ease",
                transition: "all 0.5s ease",
                "&:hover": {
                  filter: "brightness(0.5)",
                  backgroundColor: "#000000",
                  opacity: "2",
                  animationDelay: "3s",
                },
              }}
            >
              <Stack
                gap={3}
                sx={{
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${InstallationServiceIcon})`,
                    backgroundRepeat: "no-repeat",
                    height: "70px",
                    width: "70px",
                    alignSelf: "center",
                  }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  Installation & Services
                </Typography>
                <Stack
                  sx={{
                    px: { xs: 10, sm: 12, md: 15 },
                  }}
                  gap={2}
                >
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={BlueStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Banner Advertisement
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={BlueStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Manipulation work
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={BlueStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Demolition Work
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={BlueStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Prunning and Saw of Trees
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={BlueStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Others
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundImage: `url(${OurServicesThree})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

                component: "div",
                height: "50vh",
                backgroundColor: "#000000",
                webkitTransition: "all 0.5s ease",
                mozTransition: "all 0.5s ease",
                msTransition: "all 0.5s ease",
                oTransition: "all 0.5s ease",
                transition: "all 0.5s ease",
                "&:hover": {
                  filter: "brightness(0.5)",
                  backgroundColor: "#000000",
                  opacity: "2",
                  animationDelay: "3s",
                },
              }}
            >
              <Stack
                gap={3}
                sx={{
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${AttractionServiceIcon})`,
                    backgroundRepeat: "no-repeat",
                    height: "70px",
                    width: "70px",
                    alignSelf: "center",
                  }}
                />
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  Attraction and Courses
                </Typography>
                <Stack
                  sx={{
                    px: { xs: 10, sm: 12, md: 15 },
                  }}
                  gap={2}
                >
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={YellowStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Roof
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={YellowStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Sucking Technicians
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={YellowStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Facade
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={YellowStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Windows
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1.5}>
                    <Box src={YellowStar} component={"img"} />
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "1rem",
                      }}
                    >
                      Others
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#f5f4f4",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          itemAlign: "center",
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
              textAlign: "center",
              fontWeight: "bold",
              pb: 10,
            }}
          >
            Our Partners
          </Typography>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: { xs: 4, sm: 4, md: 20 },
            }}
          >
            <Box src={PartnerOne} component={"img"} />
            <Box src={PartnerTwo} component={"img"} />
            <Box src={PartnerThree} component={"img"} />
          </Stack>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction={"row"}
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#121137",
              color: "#ffffff",
              width: { md: "60%" },
              height: "80vh",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              px: { xs: 4, sm: 4, md: 10 },
            }}
          >
            <Stack gap={3}>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                }}
              >
                DO YOU NEED OUR ADVICES
              </Typography>
              <Typography>
                Feel free to contact us with any crazy request. We love
                challenges!
              </Typography>
              <Stack direction={"row"} gap={3}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ff8c00",
                    color: "#ffffff",
                    borderRadius: "100px",
                    textTransform: "none",
                    height: "3rem",
                    width: "8rem",
                    "&:hover": {
                      color: "#ff8c00",
                      border: "1px solid #ff8c00",
                      backgroundColor: "#ffffff",
                      animationDelay: "3s",
                    },
                  }}
                >
                  <Typography>
                    contact form
                  </Typography>
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    borderRadius: "100px",
                    textTransform: "none",
                    height: "3rem",
                    width: "8rem",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#ff8c00",
                      animationDelay: "3s",
                    },
                  }}
                >
                  <Typography>
                    contact form
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box
            src={CTAHalfBg}
            component={"img"}
            sx={{
              width: { xs: "100%", sm: "100%", md: "40%" },
              height: { xs: "50vh", sm: "50vh", md: "80vh" },
            }}
          />
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

export default HomePage;
