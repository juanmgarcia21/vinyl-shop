import React from 'react';
import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import { FaRecordVinyl } from "react-icons/fa";
import { Link } from 'react-router-dom';
import categoria from '../Productos/categorias';
import Item from '../Item/Item';

const Navbar = (props) => {

    return (

        <nav className="topnav">
            <Link to="/" ><h1><FaRecordVinyl className="vinilo" color="#283d3b" size="1.5em" />Vinyl Store</h1></Link>
            <ul className="categorias">
                {categoria.map((cat) => (
                    <Link to={`/categoria/${cat.id}`}
                        key={cat.id}
                        className="categoria-item">
                        {cat.title}

                    </Link>
                ))}
                <CartWidget />

            </ul>

        </nav>

    )
};

export default Navbar;
