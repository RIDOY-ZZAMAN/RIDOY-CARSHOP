import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const { imgUrl, _id, ProductName, Price, Description } = product;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/productDetails/${_id}`);

    }
    return (
        <Grid item xs={12} md={4} sm={6} >
            <Card sx={{ maxWidth: 345, border: 2, borderColor: 'grey.500', boxShadow: 3 }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="140"
                        image={imgUrl}
                        alt="car"
                        sx={{ py: 2 }}


                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Brand: {ProductName}
                        </Typography>
                        <Typography variant="h5" color="text.primary">
                            Price: ${Price}
                        </Typography>
                        <Typography sx={{ textAlign: "center" }} variant="body2" color="text.secondary">
                            {Description}
                        </Typography>
                        <Button sx={{ mt: 2 }} onClick={handleClick} variant="contained">BUY NOW</Button>
                    </CardContent>
                </CardActionArea>
            </Card>

        </Grid >
    );
};

export default Product;


