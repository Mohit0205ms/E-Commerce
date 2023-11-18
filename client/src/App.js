
import './App.css';
import Landing from './Pages/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shoping/Shop';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Error from './Pages/Error/Error';
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
        </Routes>
      </BrowserRouter>
      {/* <Error/> */}
    </div>
  );
}

export default App;
