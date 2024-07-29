import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content d-flex">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App