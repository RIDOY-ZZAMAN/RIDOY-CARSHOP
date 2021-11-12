import { Button, Container, Grid, TextField, Typography } from '@mui/material';
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
                    <Grid item xs={12} >

                        <Typography variant="h4" sx={{ color: 'white', mb: 5 }}>
                            Always Connect With US
                        </Typography>
                        <form onSubmit={hanldeContactUs}>
                            <TextField
                                sx={{ width: '70%', backgroundColor: 'white', borderRadius: '5px' }}
                                id="outlined-size-small"
                                placeholder="Email Address*"

                                size="small"
                            /> <br />
                            <TextField
                                sx={{ width: '70%', backgroundColor: 'white', my: 3, borderRadius: '5px' }}
                                id="outlined-size-small"
                                placeholder="Subject*"

                                size="small"
                            /> <br />
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={9}
                                placeholder="Your Message*"
                                style={{ width: '70%', borderRadius: '5px', }}

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