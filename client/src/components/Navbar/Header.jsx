import React, { useContext } from 'react'
import { Button, Container, Navbar, } from 'react-bootstrap'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { FiLogOut } from "react-icons/fi";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaCartArrowDown, FaUser, FaUserCheck } from "react-icons/fa";

const Header = ({ setShowLogin, setShowSignUp }) => {

  const { getTotalAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/"); //send user to homepage
  }

  return (
    <>
      <Container className='nav-bar'>
        <Navbar expand="lg" className="bg-body-transparent">
          <Container className="d-flex justify-content-between">
            <Link to='/' className='btn btn-outline-dark px-3'>Home</Link>
            <div className='d-flex justify-content-end'>
              {!token ? <>
                <Button className='me-3'variant='outline-dark' onClick={() => setShowLogin(true)}><FaUser className='fs-6'/>Login</Button>
                <button className='btn btn-outline-dark sign-up' onClick={() => setShowSignUp(true)}>SignUp</button>
                </>
                : <><Link className='me-3 cart-icon' to='/cart'><FaCartArrowDown className='fs-4 me-1'/>Cart<span className={getTotalAmount() === 0 ? "" : "dot"}></span></Link>
                <div className='nav-profile'>
                  <FaUserCheck className='fs-3 user-icon'/>
                  <ul className="nav-profile-dropdown">
                    <li className='d-flex align-items-center'><IoBagHandleSharp className='fs-5'/>Order</li>
                    <hr />
                    <li onClick={logout} className='d-flex align-items-center'><FiLogOut className='fs-5'/>Logout</li>
                  </ul>
                </div>
                </>}
            </div>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default Header