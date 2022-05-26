import { Button, Grid, TextField, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import img from '../../../images/contact.svg';
import './ContactUs.css';


const contactUsBanner = {

    // background: '#F2F2F2'

}

const hanldeContactUs = (e) => {
    e.preventDefault();
}





const ContactUs = () => {

    return (
        <div id="contactus" >
            <Typography variant="h4" sx={{ fontWeight: 600, color: 'info.main', mt: 2 }}>
                <span style={{ color: "#2C90B9" }}>CONTACT</span> <span style={{ color: "#e3376e" }}>US</span>

            </Typography>
            <Container>
                <Box style={contactUsBanner} sx={{ mb: 5, textAlign: "center" }}>
                    <Grid container spacing={2} sx={{ p: 5 }}>
                        <Grid item xs={12} md={6} sx={{ borderRadius: 2, boxShadow: 2 }}>
                            <Typography variant="h4" sx={{ color: 'dark', mb: 5 }}>
                                Always Connect With US
                            </Typography>
                            <form onSubmit={hanldeContactUs}>
                                <TextField
                                    sx={{ width: '80%', backgroundColor: '#EEF3F8', borderRadius: '5px', outline: 'none' }}
                                    placeholder="Email Address*"
                                    disableUnderline={true}
                                    size="small"
                                /> <br />
                                <TextField
                                    sx={{ width: '80%', backgroundColor: '#EEF3F8', my: 3, borderRadius: '5px' }}
                                    placeholder="Subject*"
                                    size="small"
                                /> <br />
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={9}
                                    placeholder="Your Message*"
                                    style={{ width: '80%', borderRadius: '5px', backgroundColor: '#EEF3F8', border: 'none' }}

                                />

                            </form>
                            <Button variant="contained" sx={{ my: 2 }}>Submit</Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img width="75%" src={img} alt="" />
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default ContactUs;



