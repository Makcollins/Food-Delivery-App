import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './Cart.css'
import { VscChromeClose } from 'react-icons/vsc';

const Cart = () => {

  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className='cart container'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'><VscChromeClose /></p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom mt-4 d-flex justify-content-between">
        {/* DELIVERY */}
        <div className="cart-total d-flex flex-column">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details d-flex justify-content-between">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr/>
            <div className="cart-total-details d-flex justify-content-between">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details d-flex justify-content-between">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button className='btn btn-danger'>CHECKOUT</button>
        </div>

        {/* PROMO CODE */}
        <div className="cart-promocode">
          <div>
            <p>if you have promo code, Enter it here</p>
            <div className="cart-promocode-input d-flex justify-content-between align-items-center">
              <input type="text" placeholder='promo code' />
              <button className='btn btn-success'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart