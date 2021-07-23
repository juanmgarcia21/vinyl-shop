import React, { createContext, useState } from "react";

export const Context = createContext();
export const DataProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isntInCart = (receivedItem) => cart.filter(producto => producto.id === receivedItem.id).lenght === 0;

    const agregarProducto = (receivedItem) => {
        if (isntInCart(receivedItem)) {
            setCart([...cart, receivedItem]);
        } else {
            alert("ya esta en el carro");
        }

    }

    const eliminarProducto = (receivedItem) => {

        let allItemsExceptRemoved = cart.filter(producto => producto.id !== receivedItem.id);
        setCart(allItemsExceptRemoved);
    }

    const clearCart = () => setCart([]);




    return <Context.Provider value={{ agregarProducto, eliminarProducto, clearCart, isntInCart }}>
        {children}
    </Context.Provider>;
};



export default DataProvider;




