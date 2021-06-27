import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo="Bienvenidos a Vinyl Store" />
    </div>
  );
}

export default App;
