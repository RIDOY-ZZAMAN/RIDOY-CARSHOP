import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import car from '../../../images/car3.png'
import { Link } from 'react-router-dom';

const bannerBg = {
    background: 'rgba(45,58,74,1)',
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
            <Box style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid sx={{ mt: 0.1 }} container spacing={2}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={7}>
                        <Box sx={{ ml: 12 }}>
                            <Typography sx={{ color: 'wheat', fontWeight: "900" }} variant="h3">
                                Find Your Desired <br />
                                Cars Here
                            </Typography>

                            <Typography variant="h6" sx={{ my: 4, fontSize: 14, color: 'white', fontWeight: 600 }}>
                                Best Car Selling Shop At Your Area <br />
                                You Will Find the Latest Cars Here
                            </Typography>
                            <Link to="/allproducts" style={{ textDecoration: "none", color: "white" }}><Button variant="contained" sx={{ px: 8 }}>Explore</Button></Link>

                        </Box>

                    </Grid>
                    <Grid item xs={12} md={5} style={verticalCenter}>
                        <img style={{ width: '100%' }} src={car} alt="" />
                    </Grid>
                </Grid>

            </Box>
            <Container>
                <Grid container spacing={2} sx={{ marginTop: "-80px" }} >
                    <Grid item xs={12} md={4} >
                        <Paper variant="outlined" sx={{ backgroundColor: "indigo", display: "flex", padding: '20px', justifyContent: 'center', alignItems: 'center', height: "70px" }} >
                            <Box>
                                <i class="far fa-clock fa-3x" style={{ color: 'white' }}></i>
                            </Box>
                            <Box sx={{ color: 'white', textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Opening Hours
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>
                                    Lorem ipsum dolor sit amet  <br /> adipisicing elit. Iure, dolorem.
                                </Typography>

                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper variant="outlined" sx={{ backgroundColor: "coral", display: "flex", padding: '20px', justifyContent: 'center', alignItems: 'center', height: "70px" }} >
                            <Box>
                                <i class="fas fa-map-marker-alt fa-3x" style={{ color: 'white' }}></i>
                            </Box>
                            <Box sx={{ color: 'white', textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Visit Our Location
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>
                                    Brooklyn, NY 10036,  USA
                                </Typography>

                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper variant="outlined" sx={{ backgroundColor: "#1CC7C1", display: "flex", padding: '20px', justifyContent: 'center', alignItems: 'center', height: "70px" }} >
                            <Box>
                                <i class="fas fa-phone-alt fa-3x" style={{ color: 'white' }}></i>
                            </Box>
                            <Box sx={{ color: 'white', textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Contact Us Now
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>
                                    +98888888888888
                                </Typography>

                            </Box>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default TopBanner;