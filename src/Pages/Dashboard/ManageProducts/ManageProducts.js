import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // setLoading(true);
    fetch("https://boiling-journey-86737.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDeleteProduct = (id) => {
    const url = `https://boiling-journey-86737.herokuapp.com/products/${id}`;
    Swal.fire({
      title: "Are You Sure, You want to Delete this Product?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingOrders = products.filter(
                (product) => product._id !== id
              );
              setProducts(remainingOrders);
              Swal.fire("Product Deleted Successfully");
            }
          });
      } else {
        Swal.fire("Product Was Not Deleted Successfully");
      }
    });
  };
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: "info.main", mb: 3 }}
      >
        MANAGE ALL PRODUCTS
      </Typography>
      <Grid container spacing={2}>
        {products.length === 0 ? (
          <div style={{ margin: "0 auto" }}>
            <CircularProgress />
          </div>
        ) : (
          products.map((product) => (
            <Grid item xs={12} md={4} sm={6}>
              <Paper elevation={3} sx={{ py: 5 }}>
                <Typography
                  sx={{ color: "info.main", fontWeight: 600 }}
                  variant="h5"
                  gutterBottom
                  component="div"
                >
                  {product._id}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  Name: {product.ProductName}
                </Typography>

                <Button
                  onClick={() => handleDeleteProduct(product._id)}
                  variant="contained"
                >
                  Delete This Product
                </Button>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default ManageProducts;
