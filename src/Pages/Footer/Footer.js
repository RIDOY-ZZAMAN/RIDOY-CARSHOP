import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy;  2021 Ridoy Travel, All Rights Reserved. Design By AKTARUZZAMAN RIDOY</p>
            <i className="fab fa-facebook"></i>
            <i style={{ margin: "0 20px" }} className="fab fa-twitter"></i>
            <i className="fab fa-dribbble"></i>
            <i style={{ margin: "0 20px" }} className="fab fa-linkedin-in"></i>
        </div>
    );
};

export default Footer;