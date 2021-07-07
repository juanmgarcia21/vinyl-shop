import React, { useState } from "react";
import './ItemCount.css';
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";


const Counter = ({ initial, stock, onAdd }) => {

   const [items, setItems] = useState(1)

   const addItems = () => {
      items <= (stock - 1) &&
         setItems(items + 1)
   }

   const restItems = () => {
      items > initial &&
         setItems(items - 1)
   }

   return (
      <div className="todo">
         <div className="container">
            <i className="countButton" onClick={restItems}> <MdRemoveCircle /></i>
            <span className="countAmount">{items}</span>
            <i className="countButton" onClick={addItems}> <MdAddCircle /></i>
         </div>
         <button type="button" onClick={onAdd}>Agregar</button>
      </div>
   )
}




export default Counter