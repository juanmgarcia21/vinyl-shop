import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import './Cart.css';
import { FaTrashAlt } from "react-icons/fa";
import firebase from "firebase/app";
import { database } from '../../firebase/firebase';
import swal from "sweetalert";

const Cart = () => {

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const { cart, eliminarProducto, totalCart, clearCart } = useContext(CartContext)

    const totalFinal = cart.reduce((prev, cur) => {
        return prev + (cur.quantity * cur.price)
    }, 0)

    const handleUser = (e) => {
        setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
    };

    const finalizarCompra = () => {
        let newOrder = {
            buyer: { data: user },
            items: [...cart],
            total: totalFinal,
            date: new Date().toString(),
        }

        const orders = database.collection("orders");
        let orderId
        orders.add(newOrder)
            .then((response) => {
                orderId = response.id;
            })


        cart.forEach((element) => {
            database.collection("productos")
                .doc(element.orderId)
                .update({ stock: element.stock - element.quantity });
        });

        const itemsToCheck = database.collection("productos").where(
            firebase.firestore.FieldPath.documentId(),
            "in",
            cart.map((item) => item.id)
        );

        itemsToCheck.get().then((query) => {
            const batch = database.batch();
            const outOfStockItems = [];
            query.docs.forEach((doc, index) => {
                if (doc.data().stock >= newOrder.items[index].quantity) {
                    batch.update(doc.ref, {
                        stock: doc.data().stock - newOrder.items[index].quantity,
                    });
                } else {
                    outOfStockItems.push({ ...doc.data(), id: doc.id });
                }
            });
            if (outOfStockItems.length === 0) {
                batch.commit().then(() => {
                    swal({
                        title: "Compra realizada con éxito! ",
                        icon: "success",
                        button: "Aceptar",
                        text: "Este es tu numero de orden: " + orderId,
                    });

                    clearCart();
                });

            } else {
                swal({
                    title: "ERROR Hay items que sin stock.",
                    icon: "error",
                    timer: "2000"
                });
            }
        });
    }


    return (
        <div className="contenedor-total">
            {
                !cart.length ?
                    <h4 className="cart">No hay Items en el carrito <Link to='/'>
                        <button className="volver"> Volver</button> </Link> </h4>
                    : (<>
                        <h3>Resumen de la compra</h3>
                        {cart.map(cartItem => (
                            <div className="card1" key={cartItem.id} >
                                <img className="foto" src={cartItem.img}
                                    alt={cartItem.title} />
                                <div> Titulo:  {cartItem.title}  </div>
                                <div> Cantidad: {cartItem.quantity}</div>
                                <div> Total: ${cartItem.price * cartItem.quantity}</div>

                                <button className="button1" onClick={() => { eliminarProducto(cartItem) }}><FaTrashAlt color="#197278" /></button>
                            </div>)

                        )}
                        <button className="button2" onClick={clearCart}>Vaciar Carrito</button>
                        <div className="total">Total:${totalCart()}</div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <h2>Finalizar compra</h2>
                                <label>Nombre:</label>
                                <input
                                    placeholder="Ingrese su nombre"
                                    type="text"
                                    value={user.name}
                                    required
                                    name="name"
                                    onChange={handleUser}
                                />
                                <label>Telefono:</label>
                                <input
                                    placeholder="Ingrese su telefono"
                                    type="text"
                                    value={user.phone}
                                    required
                                    name="phone"
                                    onChange={handleUser}
                                />
                                <label>Email:</label>
                                <input
                                    type="email"
                                    placeholder="Ingrese su mail"
                                    value={user.email}
                                    required
                                    name="email"
                                    onChange={handleUser}
                                />
                            </form>

                        </div>
                        <div className="borrarTodo">

                            <button className="button2" onClick={() => { finalizarCompra() }}>Generar orden</button>
                        </div>
                    </>
                    )
            }

        </div >
    )
}

export default Cart;