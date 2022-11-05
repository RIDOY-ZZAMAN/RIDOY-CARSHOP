import { Button, CardActionArea, Container, Grid, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Shared/Navigation/Navigation";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const { user } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const productRef = useRef();
  const statusRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  useEffect(() => {
    fetch("https://boiling-journey-86737.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductDetails(data);
      });
  }, []);

  useEffect(() => {
    const foundProduct = productDetails.find(
      (product) => product._id === productId
    );
    setSingleProduct(foundProduct);
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
    fetch("https://boiling-journey-86737.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ordering),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Your Order Done",
            text: "Product Ordered Successfully. Go Dashboard and then ----> (MY ORDERS) to See your Orders. Thanks!!!",
            imageUrl:
              "https://thumbs.gfycat.com/CrazyThisFrillneckedlizard-max-1mb.gif",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
          e.target.reset();
        }
      });
  };

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <h1>
          {" "}
          Purchase Our <span>{singleProduct?.ProductName}</span> Car{" "}
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 445 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image={singleProduct?.imgUrl}
                  alt="car image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {singleProduct?._id}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Name: {singleProduct?.ProductName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Price: ${singleProduct?.Price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Descripton: {singleProduct?.Description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <form
              onSubmit={handlePlaceOrder}
              className="productorder"
              style={{ marginTop: "-30px" }}
            >
              <Paper elevation={3}>
                <Typography sx={{ mt: 3 }}>
                  {" "}
                  <b>Product Name</b>
                </Typography>
                <input
                  style={{
                    width: "80%",
                    height: "30px",
                    marginBottom: "11px",
                    marginTop: "10px",
                  }}
                  type="text"
                  ref={productRef}
                  value={singleProduct?.ProductName}
                  name=""
                  id=""
                />
                <Typography>
                  <b>Your Name</b>
                </Typography>
                <input
                  style={{ width: "80%", height: "30px", marginBottom: "11px" }}
                  type="text"
                  ref={nameRef}
                  value={user?.displayName}
                  name=""
                  id=""
                />
                <Typography>
                  <b>Your Email</b>
                </Typography>
                <input
                  style={{ width: "80%", height: "30px", marginBottom: "11px" }}
                  type="text"
                  ref={emailRef}
                  value={user?.email}
                  name=""
                  id=""
                />
                <Typography>
                  <b>Your Address</b>
                </Typography>
                <input
                  style={{ width: "80%", height: "30px", marginBottom: "11px" }}
                  type="text"
                  ref={addressRef}
                  name=""
                  id=""
                />
                <Typography>
                  <b>Your Phone</b>
                </Typography>
                <input
                  style={{ width: "80%", height: "30px", marginBottom: "11px" }}
                  type="text"
                  ref={phoneRef}
                  name=""
                  id=""
                />
                <Typography>
                  <b>Status</b>
                </Typography>
                <input
                  style={{ width: "80%", height: "30px", marginBottom: "10px" }}
                  type="text"
                  ref={statusRef}
                  value="Pending"
                />{" "}
                <br /> <br />
                <Button sx={{ mb: 2 }} type="submit" variant="contained">
                  Place Order
                </Button>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetails;
