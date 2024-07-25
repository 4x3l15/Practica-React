import React from "react";
import './Footer.css';

const Footer = ({category}) => {
    return (
        <footer className="footer">
            <p>Mostrando productos de categoía:{category}</p>
        </footer>
    );
};

export default Footer;