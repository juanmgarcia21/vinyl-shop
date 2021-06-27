import React from 'react';
import './style.css';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = (props) => {

    return (

        <nav className="topnav">
            <h1>Vinyl Store</h1>
            <ul>

                <li>VINILOS</li>
                <li>EQUIPOS</li>
                <li>CONTACTO</li>
                <CartWidget />

            </ul>



        </nav>

    )
};

export default Navbar;
