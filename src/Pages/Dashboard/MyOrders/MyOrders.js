import { Button, CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://boiling-journey-86737.herokuapp.com/orders?email=${user.email}`

        fetch(url, {

        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user.email])

    const handleDeleteOrder = (id) => {
        const url = `https://boiling-journey-86737.herokuapp.com/orders/${id}`;
        const proceed = window.confirm("Are You Sure, You want to Cancel this Order?")
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                        alert("Order Canceled Successfully");
                    }
                })

        }

    }


    return (
        <div>
            <h2>Your Ordered {orders.length} Car</h2>
            <Container>
                <Grid container spacing={2}>

                    {
                        orders.length === 0 ? <div style={{ margin: "0 auto" }}><CircularProgress /></div>
                            :
                            orders.map(order => <Grid item xs={12} md={4} sm={6}>
                                <Paper elevation={3} sx={{ py: 5 }} >
                                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                        {order._id}
                                    </Typography>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Name:  {order.product}
                                    </Typography>
                                    <Typography variant="h6" display="block" gutterBottom>
                                        Status:   {order.status}
                                    </Typography>
                                    <Button onClick={() => handleDeleteOrder(order._id)} variant="contained">Cancel This Order</Button>
                                </Paper>
                            </Grid>)
                    }


                </Grid>

            </Container>
        </div>
    );
};

export default MyOrders;