import React, { useState, useContext } from 'react'
import Counter from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from "react-router-dom";
import { Context } from "../CartContext/CartContext";


const ItemDetail = ({ producto }) => {

    const { agregarProducto, eliminarProducto, isntInCart } = useContext(Context);
    const [items, setItems] = useState(1)
    const [finished, setFinished] = useState(false);

    const handleState = () => setFinished(!finished);

    const handleSend = () => {
        agregarProducto({ ...producto, quantity: items });
    };
    const checkInCart = () => {
        if (isntInCart(producto)) {
            handleState();
        }
    }
    const handleRemove = () =>
        eliminarProducto(producto);


    return (

        <div className="container">
            <img src={producto.img} alt="fotos" />
            <div className="card">
                <h5>{producto.title}</h5>
                <p>${producto.price}</p>
                {!finished ? (
                    <>
                        <Counter initial={1} items={items} setItems={setItems} stock={producto.stock} />
                        <button onClick={() => {
                            checkInCart();
                            handleState();
                            handleSend();
                        }}>Comprar</button>
                    </>

                ) : (
                    <>
                        <Link to="/cart" onClick={handleState}>
                            <button onClick={handleState}>Terminar compra</button>
                        </Link>
                        <button onClick={() => {
                            handleState();
                            handleRemove();
                        }}>Modificar</button>
                    </>
                )}
            </div>
        </div >

    );
};



export default ItemDetail;
