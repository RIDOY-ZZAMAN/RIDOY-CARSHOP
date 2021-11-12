import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const { imgUrl, _id, ProductName, Price, Description } = product;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/productDetails/${_id}`);

    }
    return (
        <Grid item xs={12} md={4} sm={6}>
            <Paper elevation={3} sx={{ py: 5, height: "300px" }} >
                <img src={imgUrl} height='50%' width="100%" alt="" />
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {_id}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {ProductName}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    ${Price}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {Description}
                </Typography>
                <Button onClick={handleClick} variant="contained">BUY NOW</Button>


            </Paper>

        </Grid>
    );
};

export default Product;