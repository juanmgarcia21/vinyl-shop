import React, { createContext, useState } from "react";
import swal from "sweetalert";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isntInCart = (receivedItem) => cart.filter(product => product.id === receivedItem.id).length === 0;


    const agregarProducto = (receivedItem) => {
        if (isntInCart(receivedItem)) {
            setCart([...cart, receivedItem]);
        } else {
            swal({
                title: "Este producto ya está en el carrito! ",
                icon: "warning",
                button: "Aceptar",
                timer: "2000"
            });
        }
    }

    const eliminarProducto = (receivedItem) => {
        let allItemsExceptRemoved = cart.filter(product => product.id !== receivedItem.id);
        setCart(allItemsExceptRemoved);
    }


    const totalCart = () => {
        return cart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0)
    }

    const quantityCart = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
    }
    const clearCart = () => setCart([]);

    return <CartContext.Provider value={{ cart, isntInCart, agregarProducto, eliminarProducto, totalCart, clearCart, quantityCart }}>
        {children}
    </CartContext.Provider>;
};







