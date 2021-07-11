import React from 'react'
import './Item.css'

const Item = ({ product }) => {

    return (
        <div className="contenedor">
            <div className="card">
                <img src={product.img} alt={product.title} />
                <div className="texto">
                    <strong>{product.title}</strong>
                    <p>Precio: {product.price}</p>
                </div>
            </div>

        </div>
    );
};
export default Item
