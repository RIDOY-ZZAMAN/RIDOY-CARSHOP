import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [unsuccess, setUnsuccess] = useState(false);

  const { token } = useAuth();

  const handleAdminSumit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://boiling-journey-86737.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          setSuccess(true);
        } else {
          setUnsuccess(data.message);
        }
      });
  };

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, color: "info.main", mb: 3 }}
      >
        MAKE ADMIN
      </Typography>
      <form onSubmit={handleAdminSumit}>
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>

        {success && <Alert severity="success">Made Admin Successfully</Alert>}
        {unsuccess && <Alert severity="success">{unsuccess}</Alert>}
      </form>
    </div>
  );
};

export default MakeAdmin;
