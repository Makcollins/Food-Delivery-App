import React from 'react'
import {Button, Container, Navbar,} from 'react-bootstrap'
import './Navbar.css'

const Header = () => {
  return (
   <>
    <Container className='nav-bar'>
      <Navbar expand="lg" className="bg-body-transparent">
        <Container className="d-flex justify-content-end">
          <a href="#" className='mx-4'>Login</a>
        <Button variant="outline-secondary">Create Account</Button>
        </Container>
      </Navbar>
    </Container>   
   </>
  )
}

export default Header