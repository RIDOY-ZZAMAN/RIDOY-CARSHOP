import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import serviceImg from '../../../images/serviceImg.JPG';

const Services = () => {
    return (
        <div id="service" >

            <Typography variant="h4" sx={{ fontWeight: "bold", pt: 5, color: 'info.main', }}>
                SERVICE
            </Typography>

            <Grid container spacing={1} sx={{ py: 5 }} >


                <Grid item xs={12} md={12} style={{ backgroundColor: "#F2F2F2", paddingRight: 0 }} className='aboutus animate__animated animate__backInLeft'>
                    <Typography variant="h5" sx={{ fontWeight: "bold", my: 2 }}>
                        WHY SHOULD YOU CHOOSE US
                    </Typography>
                    <Typography style={{ textAlign: "center", paddingLeft: "30px", margin: "10px 0" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet</Typography >

                    <Grid container spacing={1} >
                        <Grid item xs={12} md={6} className='animate__animated animate__backInRight' >
                            <Box>
                                <i class="fas fa-users  fa-5x" style={{ color: "indigo" }}></i>
                                <Box>
                                    <Typography variant="h6">
                                        TRUSTED BY THOUSANDS
                                    </Typography>
                                    <Typography sx={{ textAlign: "justify", px: 10 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6} style={{ paddingRight: 0 }} className='aboutus animate__animated animate__backInLeft'>

                            <Box>
                                <i class="far fa-map  fa-5x" style={{ color: "indigo" }}></i>
                                <Box>
                                    <Typography variant="h6">
                                        BUYING GUIDE
                                    </Typography>
                                    <Typography sx={{ textAlign: "justify", px: 10 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} className='animate__animated animate__backInRight' >
                            <Box>
                                <i class="fas fa-cookie fa-5x" style={{ color: "indigo" }}></i>
                                <Box>
                                    <Typography variant="h6">
                                        TGREAT SERVICE
                                    </Typography>
                                    <Typography sx={{ textAlign: "justify", px: 10 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6} style={{ paddingRight: 0 }} className='aboutus animate__animated animate__backInLeft'>

                            <Box>
                                <i class="fas fa-headset  fa-5x" style={{ color: "indigo" }}></i>
                                <Box>
                                    <Typography variant="h6">
                                        24/7 SUPPORT
                                    </Typography>
                                    <Typography sx={{ textAlign: "justify", px: 10 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>


        </div >
    );
};

export default Services;