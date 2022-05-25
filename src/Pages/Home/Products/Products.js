import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // setLoading(true);
        fetch('https://boiling-journey-86737.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))


    }, [])
    return (
        <div id="featuredcar">
            <Typography variant="h4" sx={{ fontWeight: 600, color: 'info.main', mb: 5 }}>
                <span style={{ color: "#2C90B9" }}>  FEATURED</span> <span style={{ color: "#e3376e" }}> CARS</span>
            </Typography>
            <Container>

                <Grid container spacing={4}>
                    {
                        products.length === 0 ? <div style={{ margin: "0 auto" }}><CircularProgress /></div>
                            :
                            products.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>

                            )
                    }

                </Grid>



            </Container>




        </div>
    );
};

export default Products;