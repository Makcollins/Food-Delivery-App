import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

    const { getTotalAmount } = useContext(StoreContext)

    return (
        <form className='order container d-flex align-items-start'>
            <div className="order-left width-100">
                <h2 className="title fw-bold">Delivery Information</h2>
                <div className="multi-fields mb-3 d-flex">
                    <input type="text" className="form-control" placeholder="First name" name="name" />
                    <input type="text" className="form-control" placeholder="Last name" name="name" />
                </div>
                <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                <input type="text" className="form-control" name="" id="" placeholder='Streets' />
                <div className="multi-fields mb-3 d-flex">
                    <input type="text" className="form-control" placeholder="City" name="name" />
                    <input type="text" className="form-control" placeholder="States" name="name" />
                </div>
                <div className="multi-fields mb-3 d-flex">
                    <input type="text" className="form-control" placeholder="Zip code" name="name" />
                    <input type="text" className="form-control" placeholder="Country" name="name" />
                </div>
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
                    <button className='btn btn-danger mt-3'>PROCEED TO PAYMENT</button>
                </div>

            </div>
        </form>
    )
}

export default PlaceOrder