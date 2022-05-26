import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <footer>
                <p>&copy;  2022 Ridoy Car Shop, All Rights Reserved. Design By AKTARUZZAMAN RIDOY</p>
                <i className="fab fa-facebook"></i>
                <i style={{ margin: "0 20px" }} className="fab fa-twitter"></i>
                <i className="fab fa-dribbble"></i>
                <i style={{ margin: "0 20px" }} className="fab fa-linkedin-in"></i> <br />
            </footer>
        </div>
    );
};

export default Footer;