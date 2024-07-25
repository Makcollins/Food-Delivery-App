import React from 'react'
import { Button, Container, Navbar, } from 'react-bootstrap'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Header = ({ setShowLogin }) => {
  return (
    <>
      <Container className='nav-bar'>
        <Navbar expand="lg" className="bg-body-transparent">
          <Container className="d-flex justify-content-between">
            <Link to='/'>Home</Link>
            <div d-flex justify-content-end>
              <Link to='/cart'>Cart</Link>
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