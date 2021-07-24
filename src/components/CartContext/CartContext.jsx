import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    //funciones
    const isntInCart = (receivedItem) => cart.filter(product => product.id === receivedItem.id).length === 0;


    const agregarProducto = (receivedItem) => {
        if (isntInCart(receivedItem)) {
            setCart([...cart, receivedItem]);
        } else {
            alert('Este producto ya esta en el carrito');
        }
    }

    const eliminarProducto = (receivedItem) => {
        let allItemsExceptRemoved = cart.filter(product => product.id !== receivedItem.id);
        setCart(allItemsExceptRemoved);
    }

        ;

    return <CartContext.Provider value={{ isntInCart, agregarProducto, eliminarProducto }}>
        {children}
    </CartContext.Provider>;
};







