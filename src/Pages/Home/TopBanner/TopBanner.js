import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import bg from '../../../images/bg.png'
import car from '../../../images/car3.png'
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,1)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundRepeat: "no-repeat",
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 550,
}

const TopBanner = () => {

    return (
        <>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid sx={{ mt: 0.1 }} container spacing={2}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={7}>
                        <Box sx={{ ml: 6 }}>
                            <Typography sx={{ color: 'wheat', fontWeight: "900" }} variant="h2">
                                Find Your Desired <br />
                                Cars Here
                            </Typography>

                            <Typography variant="h6" sx={{ my: 4, fontSize: 14, color: 'white', fontWeight: 300 }}>
                                Best Car Selling Shop At Your Area <br />
                                You Will Find the Latest Cars Here
                            </Typography>
                            <Link to="/allproducts" style={{ textDecoration: "none", color: "white" }}><Button variant="contained">Explore</Button></Link>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={5} style={verticalCenter}>
                        <img style={{ width: '100%' }} src={car} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default TopBanner;