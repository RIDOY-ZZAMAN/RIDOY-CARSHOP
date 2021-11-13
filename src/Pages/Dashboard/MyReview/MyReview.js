import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import './MyRating.css'

const MyReview = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState();
    const { user } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const reviewRef = useRef();

    const handleRatingSumbit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const cutomerReview = reviewRef.current.value;
        const review = { name, email, cutomerReview, rating: rating }
        console.log(review);
        fetch('https://boiling-journey-86737.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Reviewed Successfully");
                    e.target.reset();
                }
            })



    }



    return (
        <Container className="myreview">
            <Typography variant="h5" sx={{ fontWeight: 600, color: 'info.main' }}>
                REVIEW
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <form onSubmit={handleRatingSumbit}>
                        <h5>Your Name</h5>
                        <input style={{ width: "70%", height: '30px' }} type="text" ref={nameRef} value={user?.displayName} name="" id="" />
                        <h5>Your Email</h5>
                        <input style={{ width: "70%", height: '30px' }} type="text" ref={emailRef} value={user?.email} name="" id="" />
                        <h5>Your Ratings</h5>
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return (
                                <label>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                    />

                                    <FaStar
                                        className="star"
                                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                        size={50}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)}
                                    />

                                </label>
                            )
                        })} <br />

                        <textarea ref={reviewRef} name="" id="" style={{ width: "70%", height: '150px' }} placeholder="Please Write your Review Here"></textarea> <br />

                        <Button variant="contained" type="submit">Submit</Button>

                    </form>

                </Grid>
            </Grid>

        </Container>
    );
};

export default MyReview;


