import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';



function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <div>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/categoria/:catId" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
          </div>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
