import { useState, useEffect } from 'react'
import './ItemListContainer.css';
import productList from "../Productos/productList";
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(productList), 3000);
    });



    useEffect(() => {
        myPromise.then((resolve) =>
            setProducts(resolve));
    }, [])


    return (
        <div className="bienvenida">
            <h2>{props.saludo}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer




