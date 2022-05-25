import { Button } from '@mui/material';
import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <footer>
                <p>&copy;  2021 Ridoy CarShop, All Rights Reserved. Design By AKTARUZZAMAN RIDOY</p>
                <i className="fab fa-facebook"></i>
                <i style={{ margin: "0 20px" }} className="fab fa-twitter"></i>
                <i className="fab fa-dribbble"></i>
                <i style={{ margin: "0 20px" }} className="fab fa-linkedin-in"></i> <br />
                <NavHashLink
                    smooth to="/home#home"
                    style={{ textDecoration: "none" }}
                > <Button>    <i style={{ color: "white" }} class="far fa-arrow-alt-circle-up fa-4x"></i></Button></NavHashLink>
            </footer>
        </div>
    );
};

export default Footer;