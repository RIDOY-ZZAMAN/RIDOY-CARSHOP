import { Button, Container, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const { user } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const productRef = useRef();
    const statusRef = useRef()
    const addressRef = useRef();
    const phoneRef = useRef();
    useEffect(() => {
        fetch('https://boiling-journey-86737.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProductDetails(data)
            })


    }, [])

    useEffect(() => {
        const foundProduct = productDetails.find((product) => product._id === productId);
        setSingleProduct(foundProduct)
    }, [productDetails, productId]);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const product = productRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const status = statusRef.current.value;
        const ordering = { name, email, product, status, address, phone };
        console.log(ordering);
        fetch('https://boiling-journey-86737.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ordering)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Product Ordered Successfully. Go Dashboard and then --> (MY ORDERS) to See your Orders. Thanks!!!");
                    e.target.reset();
                }
            })



    }



    return (
        <>
            <Navigation></Navigation>
            <Container>
                <h1 > Purchase Our <span >{singleProduct?.ProductName}</span> Car </h1>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={singleProduct?.imgUrl}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {singleProduct?._id}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Name:  {singleProduct?.ProductName}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Price:  ${singleProduct?.Price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Descripton: {singleProduct?.Description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <form onSubmit={handlePlaceOrder} className="productorder" style={{ marginTop: "-30px" }}>
                            <Typography sx={{ mt: 3 }}>Product Name</Typography>
                            <input style={{ width: "80%", height: '30px', marginBottom: "15px" }} type="text" ref={productRef} value={singleProduct?.ProductName} name="" id="" />
                            <Typography >Your Name</Typography>
                            <input style={{ width: "80%", height: '30px', marginBottom: "15px" }} type="text" ref={nameRef} value={user?.displayName} name="" id="" />
                            <Typography>Your Email</Typography>
                            <input style={{ width: "80%", height: '30px', marginBottom: "15px" }} type="text" ref={emailRef} value={user?.email} name="" id="" />
                            <Typography>Your Address</Typography>
                            <input style={{ width: "80%", height: '30px', marginBottom: "15px" }} type="text" ref={addressRef} name="" id="" />
                            <Typography>Your Phone</Typography>
                            <input style={{ width: "80%", height: '30px', marginBottom: "15px" }} type="text" ref={phoneRef} name="" id="" />
                            <Typography>Status</Typography>
                            <input style={{ width: "80%", height: '30px', marginBottom: "10px" }} type="text" ref={statusRef} value="Pending" /> <br /> <br />
                            <Button sx={{ mb: 4 }} type="submit" variant="contained">Place Order</Button>
                        </form>

                    </Grid>

                </Grid>

            </Container>
        </>
    );
};

export default ProductDetails;