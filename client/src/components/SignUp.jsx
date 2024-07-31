import React, { useContext, useState } from 'react'
import './styles/LoginPopup.css'
import { VscChromeClose, VscPass } from "react-icons/vsc";
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const SignUp = ({ setShowSignUp }) => {

  const { url,setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Sign Up")

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState==="Login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token)
      setShowSignUp(false)
    }
    else {
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="d-flex justify-content-between .align-items-center text-dark mb-3">
          <h3>{currentState}</h3>
          <VscChromeClose className='x' onClick={() => setShowSignUp(false)} />
        </div>

        {currentState === "Login" ? <></> :
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" placeholder="Enter name" onChange={changeHandler} value={data.name} name="name" required />
          </div>
        }

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange={changeHandler} value={data.email} name="email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" onChange={changeHandler} value={data.password} name="password" required />
        </div>
        <button type="submit" className="btn btn-primary">{currentState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="form-check mt-3">
          <input type="checkbox" value=""/>
          <label className="mx-1">
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

export default SignUp