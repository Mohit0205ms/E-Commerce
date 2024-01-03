
import './App.css';
import Landing from './Pages/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shoping/Shop';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Error from './Pages/Error/Error';
import CartList from './Pages/CartList/CartList';
import OrderList from './Pages/OrderedList/OrderedList';
import LoginPage from './Pages/LoginPage/LoginPage';
import Register from './Pages/RegisterPage/Register';
import Admin from './Pages/Admin/Admin';
import Add from './Pages/Add/Add';
import Delete from './Pages/Delete/Delete';
import { BrowserRouter ,Routes,Route,redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [user,setUser]=useState(null);
  useEffect(()=>{
    if(localStorage.getItem('user')){
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  },[])
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ user?<Landing/>:<LoginPage/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/productdetails' element={<ProductDetails/>} />
          <Route path='/error' element={<Error/>} />
          <Route path='/cart' element={<CartList/>}/>
          <Route path="/order" element={<OrderList/>} />
          {/* <Route path='/login' element={<LoginPage/>}/> */}
          {/* <Route path='/register' element={<Register/>}/> */}
          <Route path='/admin/add' element={<Add/>} />
          <Route path='/admin/delete' element={<Delete/>} />
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
