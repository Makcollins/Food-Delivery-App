import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "https://mameals-backend.onrender.com"

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content d-flex">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url}/>} />
          <Route path='/list' element={<List url={url}/>} />
          <Route path='orders' element={<Orders url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
