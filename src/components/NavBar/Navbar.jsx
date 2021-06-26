import React from 'react';
import './style.css';


const Navbar = (props) => {

    return (

        <nav className="topnav">
            <h1>Vinyl Store</h1>
            <ul>
                <li>CONTACTO</li>
                <li>EQUIPOS</li>
                <li>VINILOS</li>
            </ul>
        </nav>
    );
};

export default Navbar;
