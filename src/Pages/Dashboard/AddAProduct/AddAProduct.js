import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const AddAProduct = () => {
    const [product, setProduct] = useState({})
    const handleProductSubmit = (e) => {
        e.preventDefault();
        console.log("This is the New Products", product)
        fetch('https://boiling-journey-86737.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Product Inserted Successfully");
                    e.target.reset();
                }
            })


    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...product };
        newProductData[field] = value;
        setProduct(newProductData);

    }
    return (
        <Container>
            <Typography variant="h5" sx={{ fontWeight: 600, color: 'info.main', mb: 3 }}>
                ADD A PRODUCT
            </Typography>
            <form onSubmit={handleProductSubmit}>
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Image Url"
                    name="imgUrl"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Product Name"
                    name="ProductName"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <TextField
                    sx={{
                        width: '75%',
                        m: 1
                    }}
                    id="standard-basic"
                    label="Product Price"
                    name="Price"
                    onBlur={handleOnBlur}
                    variant="standard"
                /> <br /> <br />
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Description"
                    name="Description"
                    style={{ width: '75%' }}
                    onBlur={handleOnBlur}
                />
                <br />
                <Button sx={{
                    width: '75%',
                    m: 1
                }} variant="contained" type='submit'>Add Product</Button>



            </form>
        </Container>
    );
};

export default AddAProduct;