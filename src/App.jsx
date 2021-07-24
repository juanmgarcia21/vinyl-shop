import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';



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
          </div>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
