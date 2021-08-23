import React from 'react';
import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import { FaRecordVinyl } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (

        <nav className="topnav">
            <Link exact to="/" >
                <h1><FaRecordVinyl className="vinilo" color="#283d3b" size="1.5em" />Vinyl Store</h1></Link>
            <ul>
                <Link to={`/categoria/1`} className="categoria-item">POP</Link>
                <Link to={`/categoria/2`} className="categoria-item">ROCK</Link>
                <Link to={`/categoria/3`} className="categoria-item">OFERTAS</Link>
                <Link to="/cart" className="carro">
                    <CartWidget />
                </Link>
            </ul>
        </nav >
    )
};

export default Navbar;
