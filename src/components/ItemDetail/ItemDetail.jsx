import React from 'react'
import Counter from '../ItemCount/ItemCount';


const onAdd = () => { }

const ItemDetail = ({ producto }) => {
    return (


        <div className="container">
            <img src={'/' + producto.img} className="imga" />
            <div className="card">
                <h5>{producto.title}</h5>
                <p>${producto.price}</p>
                <Counter initial={1} stock={producto.stock} />
                <button>Comprar</button>
            </div>
        </div>

    );
};

export default ItemDetail;
