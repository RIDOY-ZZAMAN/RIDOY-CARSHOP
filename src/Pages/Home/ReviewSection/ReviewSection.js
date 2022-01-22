import { CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './ReviewSection.css'
import reviewer from '../../../images/user-1.png'

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://boiling-journey-86737.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])



    return (
        <div id="reviews">
            <Typography variant="h4" sx={{ fontWeight: 600, color: 'info.main', mb: 5 }}>
                OUR HAPPY CLIENT SAYS
            </Typography>
            <Container>
                <Grid container spacing={2}>

                    {
                        reviews.length === 0 ? <div style={{ margin: "0 auto" }}><CircularProgress /></div>
                            :
                            reviews.map(review => <Grid item xs={12} md={4} sm={6}>
                                <Paper elevation={3} sx={{ py: 5 }} >
                                    <img src={reviewer} alt="" />
                                    <Typography variant="h6" gutterBottom component="div">
                                        {review.name}
                                    </Typography>
                                    <Typography variant="h6" display="block" gutterBottom>
                                        {review.cutomerReview}
                                    </Typography>
                                    <Rating
                                        initialRating={review.rating}
                                        emptySymbol="far fa-star icon-color"
                                        fullSymbol="fas fa-star icon-color"

                                    >

                                    </Rating>


                                </Paper>
                            </Grid>)
                    }


                </Grid>

            </Container>


        </div>
    );
};

export default ReviewSection;