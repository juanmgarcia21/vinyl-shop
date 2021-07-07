import React from 'react';
import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import { FaRecordVinyl } from "react-icons/fa";


const Navbar = (props) => {

    return (

        <nav className="topnav">
            <h1 className="active"><FaRecordVinyl className="vinilo" color="#283d3b" size="1.5em" />Vinyl Store</h1>
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
