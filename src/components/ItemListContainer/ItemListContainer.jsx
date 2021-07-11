import React, { useState } from 'react'
import './ItemListContainer.css';
import Counter from '../ItemCount/ItemCount';
import productList from '../Productos/productlist';
import ItemList from '../ItemList/ItemList';

const onAdd = () => { }

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(productList), 3000);
    });

    myPromise.then((resolve) => setProducts(resolve));

    return (
        <div className="bienvenida">
            <h2>{props.saludo}</h2>
            <Counter initial={1} stock={10} onAdd={onAdd} />
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer




