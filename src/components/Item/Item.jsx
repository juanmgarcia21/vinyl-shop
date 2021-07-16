import React from 'react'
import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ product }) => {

    return (
        <Link to={`/item/${product.id}`}>

            <div className="contenedor">
                <div className="card">
                    <img src={product.img}
                        alt={product.title} />

                    <div className="texto">
                        <strong>{product.title}</strong>
                        <p>Precio: {product.price}</p>
                        <button className="button">Ver mas</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default Item;
