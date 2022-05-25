import { Container, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import carImg from '../../../images/carImg.JPG';
import './AboutUs.css';
import Bounce from 'react-reveal/Bounce';



const AboutUs = () => {
    return (
        <div id="about">
            <Container sx={{ my: "40px" }}>
                <Paper elevation={6} sx={{ borderRadius: 2 }}>
                    <Grid container spacing={2} p={"20px"}>
                        <Grid item xs={12} md={7} className='aboutus animate__animated animate__backInLeft'>
                            <Bounce left>
                                <Typography variant="h4" sx={{ fontWeight: "bold", color: 'info.main', }}>
                                    ABOUT US
                                </Typography>
                                <p style={{ textAlign: "justify", paddingLeft: "3px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, <br /> <br />consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </Bounce>

                        </Grid>
                        <Grid item xs={12} md={5} className='animate__animated animate__backInRight' >
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