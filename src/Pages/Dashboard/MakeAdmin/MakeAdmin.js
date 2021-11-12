import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleAdminSumit = (e) => {
        e.preventDefault();
        const user = { email };
        fetch('https://boiling-journey-86737.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true)
                }

            })

    }

    const handleOnBlur = (e) => {

        setEmail(e.target.value)



    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSumit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <Button type="submit" variant="contained">Make Admin</Button>

                {
                    success && <Alert severity="success">Made Admin Successfully</Alert>
                }
            </form>

        </div>
    );
};

export default MakeAdmin;