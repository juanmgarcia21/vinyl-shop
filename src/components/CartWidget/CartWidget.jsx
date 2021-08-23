import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";



const CartWidget = () => {
    const { cart, quantityCart } = useContext(CartContext);

    return (
        <>
            {(cart.length === 0) ? (
                <Link to='/cart'><FaShoppingCart fontSize="large" color="black" size="30px" /></Link>
            ) : (
                <>
                    <Badge badgeContent={quantityCart()} color="primary">
                        <Link to='/cart'><FaShoppingCart fontSize="large" color="black" size="30px" /></Link>
                    </Badge>
                </>
            )}
        </>
    )
};

export default CartWidget
