import React, { useState } from 'react'
import './styles/LoginPopup.css'
import { VscChromeClose } from "react-icons/vsc";

const LoginPopup = ({ setShowLogin }) => {

  const [currentState, setCurrentState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="d-flex justify-content-between .align-items-center text-dark mb-3">
          <h3>{currentState}</h3>
          <VscChromeClose className='x' onClick={() => setShowLogin(false)} />
        </div>

        {currentState === "Login" ? <></> :
          <div className="mb-3">
            <label for="username" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" required />
          </div>
        }

        <div className="mb-3">
          <label for="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
        </div>

        <div className="mb-3">
          <label for="pwd" className="form-label">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
        </div>
        <button type="submit" className="btn btn-primary">{currentState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="form-check mt-3">
          <input type="checkbox" value="" id="terms" />
          <label className="mx-1" for="terms">
            Accept Terms & condition?
          </label>
        </div>
        {currentState === "Login" ?
          <p>Dont Have an account? <span className='text-primary' onClick={() => setCurrentState("Sign Up")}>Create account</span></p> :
          <p>Already have an account? <span className='text-primary' onClick={() => setCurrentState("Login")}>login here</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup