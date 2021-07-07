import React from 'react'
import './ItemListContainer.css';
import Counter from '../ItemCount/ItemCount';

const onAdd = () => { }
const ItemListContainer = (props) => {
    return (
        <div className="bienvenida">
            <h2>{props.saludo}</h2>

            <Counter initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer




