import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Zoom from "react-reveal/Zoom";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Product.css";
const Product = ({ product }) => {
  const { imgUrl, _id, ProductName, Price, Description } = product;
  const history = useHistory();
  const { user } = useAuth();
  const handleClick = () => {
    history.push(`/productDetails/${_id}`);
    console.log(user);
  };
  return (
    <Grid className="productGrid" item xs={12} md={4} sm={6}>
      <Zoom left>
        <Paper elevation={24} sx={{ borderRadius: 4 }}>
          <Card sx={{ borderRadius: 4 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={imgUrl}
                alt="car"
                sx={{ py: 3 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Brand: {ProductName}
                </Typography>
                <Typography variant="h5" color="text.primary">
                  Price: ${Price}
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {Description}
                </Typography>
                {user.email && (
                  <Button
                    sx={{ mt: 2 }}
                    className="btn-common"
                    onClick={handleClick}
                    variant="contained"
                  >
                    BUY NOW
                  </Button>
                )}
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Zoom>
    </Grid>
  );
};

export default Product;
