import { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import Spinner from '../Spinner/Spinner';
import { database } from '../../firebase/firebase';


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { catId } = useParams();

    useEffect(() => {
        setLoading(true);
        const itemCollection = database.collection("productos");
        const filtrado = itemCollection



        const filtro = filtrado.get();
        filtro.then((snapshot) => {
            if (snapshot.size > 0) {
                setProducts(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    })
                );
            }
        });
    }, [catId]);

    //promesa para traer los items
    /* const myPromise = new Promise((resolve, reject) => {
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
     
    const obtenerProductos = () => {
    
        const vinilos = database
            .collection("productos")
        vinilos.get().then((query) =>
            setProducts(query.docs.map(doc => {
                return { ...query.doc.data(), id: doc.id };
            })
            )
        );
    };
    */




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




