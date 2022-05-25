import { Grid, Typography, Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { styled } from '@mui/material/styles';


const Services = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div id="service" >

            <Typography variant="h4" sx={{ fontWeight: "bold", pt: 8, pb: 4, color: 'info.main', }}>
                <span style={{ color: "#2C90B9" }}>OUR</span> <span style={{ color: "#e3376e" }}>SERVICES</span>

            </Typography>

            {/* <Grid container spacing={1} sx={{ py: 5 }} >

                <Grid item xs={12} md={12} style={{ backgroundColor: "#F2F2F2", paddingRight: 0, }} className='aboutus animate__animated animate__backInLeft'>
                    <Typography variant="h5" sx={{ fontWeight: "bold", my: 2 }}>
                        WHY SHOULD YOU CHOOSE US
                    </Typography>
                    <Typography style={{ textAlign: "center", paddingLeft: "30px", margin: "10px 0" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet</Typography >

                    <Grid container spacing={1} item xs={12} md={6} sm={6} >
                        <Container>
                            <Grid className='animate__animated animate__backInRight' sx={{ boxShadow: 2, borderRadius: 2 }} >
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
                        </Container>

                        <Container>
                            <Grid style={{ paddingRight: 0 }} className='aboutus animate__animated animate__backInLeft' sx={{ boxShadow: 2, borderRadius: 2 }} >

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
                        </Container>
                        <Container>
                            <Grid className='animate__animated animate__backInRight' sx={{ boxShadow: 2, borderRadius: 2 }} >
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
                        </Container>
                        <Container>
                            <Grid style={{ paddingRight: 0 }} className='aboutus animate__animated animate__backInLeft' sx={{ boxShadow: 2, borderRadius: 2 }}>

                                <Box>
                                    <i class="fas fa-headset  fa-5x" style={{ color: "indigo" }}></i>
                                    <Box>
                                        <Typography variant="h6">
                                            24/7 SUPPORT
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", px: 10 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                    </Box>
                                </Box>
                            </Grid></Container>

                    </Grid>

                </Grid>

            </Grid> */}

            <div style={{ backgroundColor: "#F2F2F2", padding: "20px 0 50px 0" }}>
                <Container >
                    <Typography variant="h5" sx={{ fontWeight: "bold", my: 2, color: "#2C90B9" }}>
                        WHY SHOULD YOU CHOOSE US
                    </Typography>
                    <Typography style={{ textAlign: "center", paddingLeft: "30px", margin: "10px 0", color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet</Typography >
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <Box>
                                    <i class="fas fa-users  fa-5x" style={{ color: "indigo" }}></i>
                                    <Box>
                                        <Typography variant="h6">
                                            TRUSTED BY THOUSANDS
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", px: 10 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                    </Box>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <Box>
                                    <i class="far fa-map  fa-5x" style={{ color: "indigo" }}></i>
                                    <Box>
                                        <Typography variant="h6">
                                            BUYING GUIDE
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", px: 10 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                    </Box>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <Box>
                                    <i class="fas fa-cookie fa-5x" style={{ color: "indigo" }}></i>
                                    <Box>
                                        <Typography variant="h6">
                                            TGREAT SERVICE
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", px: 10 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                    </Box>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item>
                                <Box>
                                    <i class="fas fa-headset  fa-5x" style={{ color: "indigo" }}></i>
                                    <Box>
                                        <Typography variant="h6">
                                            24/7 SUPPORT
                                        </Typography>
                                        <Typography sx={{ textAlign: "justify", px: 10 }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
                                    </Box>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </div>


        </div >
    );
};

export default Services;