import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { items } from './cart-items';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CartContainer cart={items} />
    </div>
  );
}

export default App;
