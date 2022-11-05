import CloseIcon from "@mui/icons-material/Close";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Product.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const Product = ({ product }) => {
  const { imgUrl, _id, ProductName, Price, Description } = product;
  const history = useHistory();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const handleClickOpen = (productID) => {
    setOpen(true);
    console.log(productID);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
                height="180"
                image={imgUrl}
                alt="car"
                sx={{ py: 3 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Brand: {ProductName}
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
                {!user.email && (
                  <div>
                    <Button
                      variant="contained"
                      sx={{ my: 2 }}
                      className="btn-common"
                      onClick={() => handleClickOpen(_id)}
                    >
                      See Details
                    </Button>
                    <BootstrapDialog
                      onClose={handleClose}
                      aria-labelledby="customized-dialog-title"
                      open={open}
                    >
                      <BootstrapDialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                      >
                        Car Details
                      </BootstrapDialogTitle>
                      <DialogContent dividers>
                        <CardMedia
                          component="img"
                          height="185"
                          image={imgUrl}
                          alt="car"
                          sx={{ py: 3 }}
                        />
                        <Typography variant="h5" color="text.primary">
                          Brand:{ProductName}
                        </Typography>
                        <Typography variant="h5" color="text.primary">
                          Price: ${Price}
                        </Typography>
                        <Typography
                          sx={{ textAlign: "center" }}
                          variant="body2"
                          color="text.primary"
                        >
                          {Description}
                        </Typography>
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                          Ok
                        </Button>
                      </DialogActions>
                    </BootstrapDialog>
                  </div>
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
