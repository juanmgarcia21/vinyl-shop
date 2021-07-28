import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import './Cart.css';

const Cart = () => {

    const { cart, eliminarProducto, totalCart, clearCart } = useContext(CartContext)


    return (
        <div className="contenedor-total">
            {
                !cart.length ?
                    <h4 className="cart">No hay Items en el carrito <Link to='/'><button className="volver"> Volver</button> </Link> </h4>
                    : (<>
                        {cart.map(cartItem => (
                            <div className="card1" key={cartItem.id} >
                                <img className="foto" src={cartItem.img}
                                    alt={cartItem.title} />
                                <div> Titulo:  {cartItem.title}  </div>
                                <div> Cantidad: {cartItem.quantity}</div>
                                <div> Total: ${cartItem.price * cartItem.quantity}</div>
                                <button onClick={() => { eliminarProducto(cartItem) }}>Borrar</button>
                            </div>)
                        )}
                        <div className="borrarTodo">Total:${totalCart()}
                            <button onClick={clearCart}>Borrar todo</button></div>
                    </>
                    )
            }

        </div>
    )
}

export default Cart;