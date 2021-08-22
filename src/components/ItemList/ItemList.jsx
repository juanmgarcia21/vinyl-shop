import React from 'react'
import Item from '../Item/Item';
import "./ItemList.css";
import Spinner from '../Spinner/Spinner';


const ItemList = ({ products }) => {
    return (
        <div className="list">
            {products.length ? (
                products.map((product) => (
                    <Item key={product.id} product={product} />
                ))
            ) : (
                <Spinner />
            )}
        </div>


    );
};

export default ItemList;

