import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const PlaceOrder = () => {

    const { getTotalAmount,token, food_list, cartItems,url } = useContext(StoreContext);

    const [data,setData] =useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:""

    })

    const handleChange = (event) =>{
        const name= event.target.name;
        const value =event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const placeOrder = async(event) =>{
        event.preventDefault();
        let orderItems = [];
        food_list.map((item)=>{
            if (cartItems[item._id]>0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo)
            }
        })
        let orderData = {
            address:data,
            items:orderItems,
            amount:getTotalAmount()+2,
        }
        let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}});
        if (response.data.success) {
            const {session_url} = response.data;
            window.location.replace(session_url);
        } else {
            alert("Error");
        }  
    }


    return (
        <form onSubmit={placeOrder} className='order container d-flex align-items-start'>
            <div className="order-left width-100">
                <h2 className="title fw-bold">Delivery Information</h2>
                <div className="multi-fields mb-3 d-flex">
                    <input required onChange={handleChange} value={data.firstName} type="text" className="form-control" placeholder="First name" name="firstName" />
                    <input required onChange={handleChange} value={data.lastName} type="text" className="form-control" placeholder="Last name" name="lastName" />
                </div>
                <input required onChange={handleChange} value={data.email} type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                <input required onChange={handleChange} value={data.street} type="text" className="form-control" name="street" id="street" placeholder='Street' />
                <div className="multi-fields mb-3 d-flex">
                    <input required onChange={handleChange} value={data.city} type="text" className="form-control" placeholder="City" name="city" />
                    <input required onChange={handleChange} value={data.state} type="text" className="form-control" placeholder="State" name="state" />
                </div>
                <div className="multi-fields mb-3 d-flex">
                    <input required onChange={handleChange} value={data.zipcode} type="text" className="form-control" placeholder="Zip code" name="zipcode" />
                    <input required onChange={handleChange} value={data.country} type="text" className="form-control" placeholder="Country" name="country" />
                </div>
                <input required onChange={handleChange} value={data.phone} type="text" className="form-control" name="phone" placeholder='Phone Number' />
            </div>
            <div className="order-right">
                <div className="cart-total d-flex flex-column">
                    <h2 className='fw-bold'>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details d-flex justify-content-between">
                            <p>Delivery Fee</p>
                            <p>${getTotalAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details d-flex justify-content-between">
                            <b>Total</b>
                            <b>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</b>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-danger mt-3'>PROCEED TO PAYMENT</button>
                </div>

            </div>
        </form>
    )
}

export default PlaceOrder