import { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { database } from '../../firebase/firebase';


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoria } = useParams();


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
    }, []);

    return (
        <>
            <div className="bienvenida">
                <h2 className="titulo">{categoria}</h2>
                <ItemList products={products} />

            </div>
        </>
    );
};

export default ItemListContainer




