import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router";
import { database } from '../../firebase/firebase';

const getItems = (id) => {
    const itemsCollection = database.collection("productos");
    const item = itemsCollection.doc(id);
    return item.get();
};

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getItems(id).then((res) => {
            if (res.exists) {
                setProducto(res.data());
            }
        });
        return;
    }, [id]);


    return (
        <div >
            <ItemDetail producto={{ id: id, ...producto }} />
        </div>
    );
};

export default ItemDetailContainer
