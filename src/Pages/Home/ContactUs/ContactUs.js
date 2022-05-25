import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import img from '../../../images/contact.svg'


const contactUsBanner = {

    background: '#F2F2F2'

}

const hanldeContactUs = (e) => {
    e.preventDefault();
}

const ContactUs = () => {
    return (
        <div id="contactus" >
            <Typography variant="h4" sx={{ fontWeight: 600, color: 'info.main', my: 5 }}>
                CONTACT US
            </Typography>
            <Box style={contactUsBanner} sx={{ my: 5, textAlign: "center" }}>
                <Grid container spacing={2} sx={{ p: 5 }}>
                    <Grid item xs={12} md={6}>


                        {/* </Grid>
                    <Grid item xs={12} md={7} > */}

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



