import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const contactUsBanner = {

    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',

}

const hanldeContactUs = (e) => {
    e.preventDefault();
}

const ContactUs = () => {
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: 600, color: 'info.main', my: 5 }}>
                CONTACT US
            </Typography>
            <Box style={contactUsBanner} sx={{ my: 5, textAlign: "center" }}>
                <Grid container spacing={2} sx={{ p: 5 }}>
                    <Grid item xs={12} md={5}>
                        <Paper variant="outlined" sx={{ backgroundColor: "#1CC7C1", display: "flex", padding: '20px', justifyContent: 'center', alignItems: 'center', height: "70px", mt: 4 }} >
                            <Box>
                                <i class="far fa-clock fa-3x" style={{ color: 'white' }}></i>
                            </Box>
                            <Box sx={{ color: 'white', textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Opening Hours
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>
                                    We are Open <br /> from 7:00AM-10:00PM  <br /> Except Friday
                                </Typography>

                            </Box>
                        </Paper>
                        <Paper variant="outlined" sx={{ backgroundColor: "#3A4256", display: "flex", padding: '20px', justifyContent: 'center', alignItems: 'center', height: "70px" }} >
                            <Box>
                                <i class="fas fa-map-marker-alt fa-3x" style={{ color: 'white' }}></i>
                            </Box>
                            <Box sx={{ color: 'white', textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Visit Our Shop
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>
                                    300,  Mohipal, SSK, Feni
                                </Typography>

                            </Box>
                        </Paper>
                        <Paper variant="outlined" sx={{ backgroundColor: "#1CC7C1", display: "flex", padding: '20px', justifyContent: 'center', alignItems: 'center', height: "70px" }} >
                            <Box>
                                <i class="fas fa-phone-alt fa-3x" style={{ color: 'white' }}></i>
                            </Box>
                            <Box sx={{ color: 'white', textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Contact Us Now
                                </Typography>
                                <Typography sx={{ fontSize: "15px" }}>
                                    +88018888888888
                                </Typography>

                            </Box>
                        </Paper>


                    </Grid>
                    <Grid item xs={12} md={7} >

                        <Typography variant="h4" sx={{ color: 'white', mb: 5 }}>
                            Always Connect With US
                        </Typography>
                        <form onSubmit={hanldeContactUs}>
                            <TextField
                                sx={{ width: '80%', backgroundColor: 'white', borderRadius: '5px' }}
                                id="outlined-size-small"
                                placeholder="Email Address*"

                                size="small"
                            /> <br />
                            <TextField
                                sx={{ width: '80%', backgroundColor: 'white', my: 3, borderRadius: '5px' }}
                                id="outlined-size-small"
                                placeholder="Subject*"

                                size="small"
                            /> <br />
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={9}
                                placeholder="Your Message*"
                                style={{ width: '80%', borderRadius: '5px', }}

                            />

                        </form>
                        <Button variant="contained" sx={{ my: 2 }}>Submit</Button>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default ContactUs;



