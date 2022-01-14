import logo from '../logo.svg';
import '../App.css';
import Banner from './Banner.js'
import Cart from './Cart'
import shoppingList from "./ShoppingList";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
function App() {
  return (
    <div >
        <Banner/>
        <Cart/>
        <ShoppingList/>
        <Footer/>
    </div>
  );
}

export default App;
