import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import carImg from '../../../images/carImg.JPG';
import './AboutUs.css'



const AboutUs = () => {
    return (
        <div id="about">
            <Container>
                <Grid container spacing={2} sx={{ py: 5 }}>
                    <Grid item xs={12} md={7} className='aboutus animate__animated animate__backInLeft'>
                        <Typography variant="h4" sx={{ fontWeight: "bold", color: 'info.main', }}>
                            ABOUT US
                        </Typography>
                        <p style={{ textAlign: "justify", paddingLeft: "3px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, <br /> <br />consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet, consectetur adipiscing elit,  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </Grid>
                    <Grid item xs={12} md={5} className='animate__animated animate__backInRight' >
                        <img src={carImg} height="80%" width="100%" alt="" />
                    </Grid>

                </Grid>
            </Container>

        </div>
    );
};

export default AboutUs;