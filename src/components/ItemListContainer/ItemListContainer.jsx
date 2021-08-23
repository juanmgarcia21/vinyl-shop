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
        if (categoria) {
            const parsear = parseInt(categoria)
            itemCollection.where("categoriaId", "==", parsear).get().then((snapshot) => {
                if (snapshot.size > 0) {
                    setProducts(
                        snapshot.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() };
                        })
                    );
                }
            });
        } else {
            itemCollection.get().then((snapshot) => {
                if (snapshot.size > 0) {
                    setProducts(
                        snapshot.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() };
                        })
                    );
                }
            });
        }

    }, [categoria]);

    return (

        <>

            <div className="bienvenida">
                <p className="titulo"></p>
                <ItemList products={products} />

            </div>
        </>
    );
};

export default ItemListContainer




