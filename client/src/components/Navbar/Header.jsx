import React, { useContext } from 'react'
import { Button, Container, Navbar, } from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Header = ({ setShowLogin }) => {

  const { getTotalAmount } = useContext(StoreContext)
  
  return (
    <>
      <Container className='nav-bar'>
        <Navbar expand="lg" className="bg-body-transparent">
          <Container className="d-flex justify-content-between">
            <Link to='/'>Home</Link>
            <div className='d-flex justify-content-end'>
              <Link className='d-flex' to='/cart'>Cart <span className={getTotalAmount() === 0 ? "" : "dot"}></span></Link>
              <a href="#" className='mx-4' onClick={() => setShowLogin(true)}>Login</a>
              <Button variant="outline-secondary">Create Account</Button>
            </div>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default Header