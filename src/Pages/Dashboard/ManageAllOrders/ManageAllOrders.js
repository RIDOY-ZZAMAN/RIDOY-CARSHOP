import { Button, CircularProgress, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://boiling-journey-86737.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [])

    //UPDATE ORER STATUS
    const handleUpdate = (id) => {
        const url = `https://boiling-journey-86737.herokuapp.com/allorders/${id}`
        const newStatus = orders.find(order => order._id === id);
        newStatus.status = "shipped";
        const approved = window.confirm("Are You want Shipped this Product? ");
        if (approved) {
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': "application/json",
                },
                body: JSON.stringify(newStatus),

            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        window.location.reload(true);
                        alert("Service Shipped Successfully");
                        // setUser({});
                    }
                })
        }

    }


    //DELETE AN ORDER
    const handleDeleteOrder = (id) => {
        const url = `https://boiling-journey-86737.herokuapp.com/allorders/${id}`;
        const proceed = window.confirm("Are You Sure, You want to Delete this Order?")
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                        alert(" Order Deleted Successfully");
                    }
                })

        }
    }





    return (
        <div>
            <h2>Mange All Orders</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="Appoinments table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Product</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.length === 0 ? <div style={{ margin: "0 auto" }}><CircularProgress /></div>
                                    :
                                    orders.map((order) => (
                                        <TableRow
                                            key={order._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {order.name}
                                            </TableCell>
                                            <TableCell align="right">{order.product}</TableCell>
                                            <TableCell align="right">{order.status}</TableCell>
                                            <TableCell align="right">
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'flex-end',
                                                        flexDirection: 'column',

                                                        bgcolor: 'background.paper',
                                                    }}
                                                >
                                                    <Button onClick={() => handleUpdate(order._id)} sx={{ my: 2 }} variant="contained">Confirm</Button>
                                                    <Button onClick={() => handleDeleteOrder(order._id)} variant="contained">Delete</Button>
                                                </Box>

                                            </TableCell>


                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>


        </div>
    );
};

export default ManageAllOrders;



