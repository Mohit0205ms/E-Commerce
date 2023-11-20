
import './App.css';
import Landing from './Pages/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shoping/Shop';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Error from './Pages/Error/Error';
import CartList from './Pages/CartList/CartList';
import OrderList from './Pages/OrderedList/OrderedList';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/productdetails' element={<ProductDetails/>} />
          <Route path='/error' element={<Error/>} />
          <Route path='/cart' element={<CartList/>}/>
          <Route path="/order" element={<OrderList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
