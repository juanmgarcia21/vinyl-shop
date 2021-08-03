import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";



const CartWidget = () => {
    const { cart, quantityCart } = useContext(CartContext);

    return (
        <>
            {(cart.length === 0) ? (
                <Link to='/cart'><FaShoppingCart fontSize="large" color="black" /></Link>
            ) : (
                <>
                    <Link to='/cart'><FaShoppingCart fontSize="large" color="black" /></Link>
                    {quantityCart()}
                </>
            )}
        </>
    )
};

export default CartWidget
