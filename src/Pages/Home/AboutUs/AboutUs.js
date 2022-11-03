import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Bounce from "react-reveal/Bounce";
import carImg from "../../../images/carImg.JPG";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about">
      <Container sx={{ my: "40px" }}>
        <Paper elevation={6} sx={{ borderRadius: 2 }}>
          <Grid container spacing={2} p={"20px"}>
            <Grid
              item
              xs={12}
              md={7}
              className="aboutus animate__animated animate__backInLeft"
            >
              <Bounce left>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  <span style={{ color: "#2C90B9" }}>ABOUT</span>{" "}
                  <span style={{ color: "#e3376e" }}>US</span>
                </Typography>
                <p style={{ textAlign: "justify", paddingLeft: "3px" }}>
                  At Car Shop, our commitment to innovation and iconic customer
                  experiences have made us the nation’s largest retailer of used
                  cars. <br /> <br />
                  As the original disruptor of the automotive industry, our
                  “no-haggle” prices transformed car buying and selling from a
                  stressful, dreaded event into the honest, straightforward
                  experience all people deserve. <br /> <br /> We’ve been
                  raising the bar on customer  experiences ever since.Today, our
                  customers have the ability to buy completely on their terms,
                  whether that’s online, in the store, or using a seamless
                  combination of both.
                </p>
              </Bounce>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              className="animate__animated animate__backInRight"
            >
              <Bounce right>
                <img src={carImg} height="80%" width="100%" alt="" />
              </Bounce>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default AboutUs;
