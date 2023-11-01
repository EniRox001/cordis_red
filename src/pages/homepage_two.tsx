import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import HomeBgTwo from "../assets/images/home_bg_two.png";
import PlayButtonIcon from "../assets/icons/play_button_icon.png";

import CleaningImportance from "../assets/images/cleaning_importance.png";
import CleaningProceeds from "../assets/images/cleaning_proceeds.png";

import CompletedWorksOne from "../assets/images/completed_work_one.png";
import CompletedWorksTwo from "../assets/images/completed_work_two.png";
import CompletedWorksThree from "../assets/images/completed_work_three.png";
import CompletedWorksFour from "../assets/images/completed_work_four.png";
import CompletedWorksFive from "../assets/images/completed_work_five.png";
import CompletedWorksSix from "../assets/images/completed_work_six.png";

import TestimonialOne from "../assets/images/testimonial.png";

import Logo from "../assets/icons/logo.png";

import FacebookIcon from "../assets/icons/facebook_icon.png";
import InstagramIcon from "../assets/icons/instagram_icon.png";
import XIcon from "../assets/icons/x_icon.png";
import NavigationBarTwo from "../components/navigation_bar_two";

const HomepageTwo = () => {
  return (
    <>
      <Box
        sx={{
          m: 0,
          p: 0,
          backgroundImage: `url(${HomeBgTwo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
        component={"div"}
      >
        <NavigationBarTwo />
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
              Heights Cleaning<br /> Services
            </Typography>
            <Typography>
              If you want Roffing Cleaning, Windows and other Height
              related<br />
              Cleaning Activities,{" "}
              <span style={{ color: "#ff8c00" }}>
                Call Cordis Ltd
              </span>
            </Typography>
            <Stack
              sx={{
                flexDirection: { sx: "column", sm: "column", md: "row" },
                gap: 3,
                alignItems: "center",
              }}
            >
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
                    backgroundcolor: "#transparent",
                    animationdelay: "3s",
                  },
                }}
              >
                <Typography>
                  Make an appointment
                </Typography>
              </Button>
              <Stack
                direction={"row"}
                sx={{
                  alignItems: "center",
                }}
              >
                <Button>
                  <Box src={PlayButtonIcon} component={"img"} />
                </Button>
                <Typography>Watch Video</Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{
                mt: { xs: 3, sm: 3, md: 13 },
                flexDirection: { sx: "column", sm: "column", md: "row" },
                gap: { sx: 3, sm: 3, md: 13 },
                alignItems: "center",
              }}
            >
              <Stack
                direction={"row"}
                sx={{
                  alignItems: "center",
                }}
                gap={1}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "2.5rem",
                    },
                  }}
                >
                  18K
                </Typography>
                <Typography>
                  projects done
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                sx={{
                  alignItems: "center",
                }}
                gap={1}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "2.5rem",
                    },
                  }}
                >
                  120
                </Typography>
                <Typography>
                  customers
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                sx={{
                  alignItems: "center",
                }}
                gap={1}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "2.5rem",
                    },
                  }}
                >
                  120
                </Typography>
                <Typography>
                  workers
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            pr: { xs: 3, sm: 3, md: 20 },
            pl: { xs: 3, sm: 3, md: 10 },
            py: { xs: 8, sm: 8, md: 13 },
          }}
        >
          <Box
            src={CleaningImportance}
            component={"img"}
            sx={{
              display: { xs: "block", md: "none" },
              height: { xs: "100%", md: "403px" },
              width: { xs: "100%", md: "403px" },
              pb: { xs: 3, sm: 3, md: 0 },
            }}
          />

          <Stack
            spacing={3}
            sx={{
              px: { xs: 0, sm: 3, md: 13 },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "3rem",
                },
              }}
            >
              Why is Roff Cleaning Important?
            </Typography>
            <Stack spacing={3}>
              <Typography>
                <span style={{ color: "#ff8c00" }}>
                  Extends the life of the roof:
                </span>{" "}
                Dirt can damage the material from which the roof is made, which
                can cause cracks, stains or other damage. This can lead to water
                leakage and subsequent damage to the entire roof. Regular
                cleaning can extend the life of your roof and ensure that your
                investment in it pays off.
              </Typography>
              <Typography>
                <span style={{ color: "#ff8c00" }}>
                  Improves the aesthetic appearance:
                </span>{" "}
                Cleaning the roof can significantly improve its aesthetic
                appearance. Regular cleaning can remove dirt and return the roof
                to its original color
              </Typography>
              <Typography>
                <span style={{ color: "#ff8c00" }}>
                  Improving Home Value:
                </span>{" "}
                Roof cleaning can increase the value of your home. When you're
                thinking of selling , an attractive and well-maintained roof can
                attract more buyers and allow you to command a higher price .
              </Typography>
            </Stack>
          </Stack>
          <Box
            src={CleaningImportance}
            component={"img"}
            sx={{
              display: { xs: "none", md: "block" },
              height: { xs: "100%", md: "403px" },
              width: { xs: "100%", md: "403px" },
            }}
          />
        </Stack>
      </Box>
      <Box>
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            pr: { xs: 3, sm: 3, md: 10 },
            pl: { xs: 3, sm: 3, md: 24 },
            py: { xs: 3, sm: 3, md: 13 },
          }}
        >
          <Box
            src={CleaningProceeds}
            component={"img"}
            sx={{
              height: { xs: "100%", md: "380px" },
              width: { xs: "100%", md: "403px" },
              pb: { xs: 3, sm: 3, md: 0 },
            }}
          />

          <Stack
            spacing={3}
            sx={{
              px: { xs: 0, sm: 3, md: 8 },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "3rem",
                },
              }}
            >
              How{" "}
              <span
                style={{
                  color: "#ff8c00",
                }}
              >
                Roff Cleaning
              </span>{" "}
              Proceeds
            </Typography>
            <Stack spacing={3}>
              <Typography>
                After contacting our company, we will arrange an inspection
                date, or send us photos (roof layout, anchoring options, water
                access
              </Typography>
              <Typography
                sx={{
                  pb: { xs: 3, sm: 3, md: 0 },
                }}
              >
                Based on this information, we will analyze your roof system and
                prepare a price offer. We will then contact you and agree on a
                date for implementation. On the agreed day of implementation, we
                will come to you and clean the roof. The whole process takes 1
                to 2 days, while the specific time will depend on the extent of
                pollution, type of roof, size and other factors.
              </Typography>
            </Stack>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff8c00",
                color: "#ffffff",
                borderRadius: "100px",
                textTransform: "none",
                height: "3rem",
                width: "14rem",
                textAlign: "center",
                alignSelf: { xs: "center", sm: "center", md: "flex-start" },
              }}
            >
              <Typography>
                I want a clean off
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          my: { xs: 3, sm: 3, md: 8 },
        }}
      >
        <Stack gap={3}>
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
              },
            }}
          >
            Our Completed Works
          </Typography>
          <Stack
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: "center",
            }}
            gap={5}
          >
            <Box
              src={CompletedWorksOne}
              component={"img"}
              sx={{
                height: "335px",
                width: { xs: "90%", sm: "280px", md: "280px" },
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
            />
            <Box
              src={CompletedWorksTwo}
              component={"img"}
              sx={{
                height: "335px",
                width: { xs: "90%", sm: "280px", md: "280px" },
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
            />
            <Box
              src={CompletedWorksThree}
              component={"img"}
              sx={{
                height: "335px",
                width: { xs: "90%", sm: "280px", md: "280px" },
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
            />
          </Stack>
          <Stack
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              justifyContent: "center",
            }}
            gap={5}
          >
            <Box
              src={CompletedWorksFour}
              component={"img"}
              sx={{
                height: "211px",
                width: { xs: "90%", sm: "250px", md: "280px" },
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
            />
            <Box
              src={CompletedWorksFive}
              component={"img"}
              sx={{
                height: "211px",
                width: { xs: "90%", sm: "250", md: "280px" },
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
            />
            <Box
              src={CompletedWorksSix}
              component={"img"}
              sx={{
                height: "211px",
                width: { xs: "90%", sm: "250px", md: "280px" },
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
            />
          </Stack>
        </Stack>
      </Box>
      <Box height={"80vh"}>
        <Stack gap={4}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
              },
              color: "#ff8c00",
              textAlign: "center",
              mt: { xs: 8, sm: 3, md: 13 },
            }}
          >
            TESTIMONIALS
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
              },
              textAlign: "center",
              mb: 5,
            }}
          >
            Our Happy Client Say <br /> About Us
          </Typography>
          <Stack
            sx={{
              flexDirection: { xs: "column", sm: "column", md: "row" },
              px: { sm: 3, md: 13 },
            }}
          >
            <Box
              src={TestimonialOne}
              component={"img"}
              sx={{
                height: "100%",
                width: "100%",
              }}
            />
            <Box
              src={TestimonialOne}
              component={"img"}
              sx={{
                height: "100%",
                width: "100%",

                mt: { xs: -10, md: 0 },
              }}
            />
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 16, sm: 3, md: 8 },
        }}
      >
        <iframe
          src="http://www.youtube.com/watch?v=ujpmfcQMxKA/?controls=1"
          style={{
            height: "50vh",
            width: "80%",
            marginBottom: "50px",
          }}
        >
        </iframe>
      </Box>
      <Box
        sx={{
          height: "80vh",
          alignItems: "center",
          justifyContent: "center",

          mt: { xs: 10, sm: 3, md: 8 },
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
          }}
          gap={2}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
              },
              textAlign: "center",
            }}
          >
            Some of the most frequently<br /> asked questions
          </Typography>
          <Accordion
            sx={{
              width: { xs: "80%", sm: "100%", md: "50%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Is roof cleaning important</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: { xs: "80%", sm: "100%", md: "50%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>is roff cleaning important</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: { xs: "80%", sm: "100%", md: "50%" },
              backgroundColor: "#ff8c00",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Will it damage my roof</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: { xs: "80%", sm: "100%", md: "50%" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>how often should be the toof cleaned</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: "#ACA1A1",
          color: "#ffffff",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            py: { xs: 4, sm: 4, md: 5 },
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
              FOR ANY QUERIES CALL US ON
            </Typography>{" "}
            <Typography
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
              }}
            >
              0940 355 485
            </Typography>
          </Stack>
          <Container
            sx={{
              width: { xs: "100%", md: "50%" },
              marginTop: { xs: 4, md: "-100px" },
              mx: { xs: 0, md: 4 },
              px: { xs: 4, md: 7 },
              py: 5,
              backgroundColor: "#CBCBCB",
              color: "#000000",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              textAlign: "start",
            }}
          >
            <form
              action="https://formsubmit.co/robo.cordis@gmail.com"
              method="POST"
              style={{
                gap: 30,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack gap={2}>
                <Typography>
                  Name <span style={{ color: "#ff8c00" }}>*</span>
                </Typography>
                <TextField
                  name="name"
                  multiline
                  rows={3}
                  sx={{
                    backgroundColor: "#ffffff",
                  }}
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
                  sx={{
                    backgroundColor: "#ffffff",
                  }}
                >
                </TextField>
              </Stack>
              <Stack gap={2}>
                <Typography>
                  Cleaning Location <span style={{ color: "#ff8c00" }}>*</span>
                </Typography>
                <TextField
                  name="cleaning location"
                  multiline
                  rows={3}
                  sx={{
                    backgroundColor: "#ffffff",
                  }}
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
                  sx={{
                    backgroundColor: "#ffffff",
                  }}
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
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "#9B9797",
          px: { xs: 4, sm: 4, md: 10 },
          py: { xs: 4, sm: 4, md: 10 },
          mt: -5,
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

export default HomepageTwo;
