import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Navigation from '../Shared/Navigation/Navigation';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://boiling-journey-86737.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Typography variant="h4" sx={{ fontWeight: 600, color: 'info.main', mt: 10, mb: 3 }}>
                ALL PRODUCTS
            </Typography>
            <Container>
                <Grid container spacing={2}>
                    {
                        products.length === 0 ? <div style={{ margin: "0 auto" }}><CircularProgress /></div>
                            :
                            products.map(product => <Product
                                key={product._id}
                                product={product}

                            ></Product>)
                    }

                </Grid>

            </Container>
        </div>
    );
};

export default AllProducts;