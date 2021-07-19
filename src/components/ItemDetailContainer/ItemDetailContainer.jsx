import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router";
import productList from '../Productos/productList';

const ItemDetailContainer = () => {


    const [allProducts, setAllProducts] = useState(productList);
    const { id } = useParams();
    const [producto, setProducto] = useState([]);

    const traerProducto = (id) => {
        const buscarProducto = allProducts.find((item) => item.id === parseInt(id));
        setProducto(buscarProducto);
    };

    useEffect(
        () => {
            traerProducto(id);
        }, []);


    return (
        <div >
            <ItemDetail producto={producto} />
        </div>
    );
};

export default ItemDetailContainer
