import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart/Cart';
import LoginPopup from './components/LoginPopup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import SignUp from './components/SignUp';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    {showSignUp?<SignUp setShowSignUp={setShowSignUp}/>:<></>}
      <div>
        <Header setShowLogin={setShowLogin} setShowSignUp={setShowSignUp}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </div>
    </>

  )
}

export default App