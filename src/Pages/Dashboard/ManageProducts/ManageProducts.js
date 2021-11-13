import { Button, CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // setLoading(true);
        fetch('https://boiling-journey-86737.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))


    }, [])
    const handleDeleteProduct = (id) => {
        const url = `https://boiling-journey-86737.herokuapp.com/products/${id}`;
        const proceed = window.confirm("Are You Sure, You want to Delete this Product?")
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = products.filter(product => product._id !== id);
                        setProducts(remainingOrders);
                        alert("Product Deleted Successfully");
                    }
                })

        }

    }
    return (

        <Container>
            <Typography variant="h5" sx={{ fontWeight: 600, color: 'info.main', mb: 3 }}>
                MANAGE ALL PRODUCTS
            </Typography>
            <Grid container spacing={2}>

                {products.length === 0 ? <div style={{ margin: "0 auto" }}><CircularProgress /></div>
                    :
                    products.map(product => <Grid item xs={12} md={4} sm={6}>
                        <Paper elevation={3} sx={{ py: 5 }} >
                            <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                {product._id}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                Name:  {product.ProductName}
                            </Typography>

                            <Button onClick={() => handleDeleteProduct(product._id)} variant="contained">Delete This Product</Button>
                        </Paper>
                    </Grid>)
                }


            </Grid>

        </Container>


    );
};

export default ManageProducts;