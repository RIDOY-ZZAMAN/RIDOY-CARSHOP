import { Button, Grid, TextField, Typography } from '@mui/material';
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
            <Box style={contactUsBanner} sx={{ mb: 5, textAlign: "center" }}>
                <Grid container spacing={2} sx={{ p: 5 }}>
                    <Grid item xs={12} md={6} sx={{ borderRadius: 2, boxShadow: 2 }}>
                        <Typography variant="h4" sx={{ color: 'dark', mb: 5 }}>
                            Always Connect With US
                        </Typography>
                        <form onSubmit={hanldeContactUs}>
                            <TextField
                                sx={{ width: '80%', border: "1px solid #808080", backgroundColor: 'white', borderRadius: '5px' }}

                                id="outlined-size-small"
                                placeholder="Email Address*"

                                size="small"
                            /> <br />
                            <TextField
                                sx={{ width: '80%', border: "1px solid #808080", backgroundColor: 'white', my: 3, borderRadius: '5px' }}
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
                    <Grid item xs={12} md={6}>
                        <img width="75%" src={img} alt="" />
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default ContactUs;



