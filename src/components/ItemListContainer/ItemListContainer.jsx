import { useState, useEffect } from 'react'
import './ItemListContainer.css';
import productList from "../Productos/productList";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/Spinner';

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    //uso useParmas para traer los parametros de la url y
    //obtengo la categoria por params
    const { catId } = useParams();

    //promesa para traer los items
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (catId) {
                let filtro = productList.filter(
                    (product) => product.categoria.includes(catId)
                );
                resolve(filtro);
            } else {
                resolve(productList);
            }
        }, 2000);

    });

    useEffect(() => {
        myPromise.then((resolve) =>
            setProducts(resolve));
    }, [catId, productList]);


    return (
        <>
            <div className="bienvenida">
                <h2>{props.saludo}</h2>
                <ItemList products={products} />

            </div>
            <Spinner />
        </>
    );
};

export default ItemListContainer




