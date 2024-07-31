import React, { useContext, useState } from 'react'
import './styles/FoodItem.css'
import { FaStar } from "react-icons/fa";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id, name, image,aggregate_rating, price, description }) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
    return (
        <div className='food-item shadow p-3 mb-5 bg-body rounded'>
            <div className="food-item-img-container p-3 h-60 rounded">
                <img className='food-item-img h-60 d-block' src={url+"/images/"+image} alt="" />
            </div>
            {
                    !cartItems[id]
                        ? <IoMdAddCircleOutline onClick={() =>addToCart(id)} /> :
                        <div className='food-item-counter d-flex align-items-center'>
                            <IoMdRemoveCircleOutline onClick={() => removeFromCart(id)} />
                            <p>{cartItems[id]}</p>
                            <IoMdAddCircleOutline onClick={() =>addToCart(id)} />
                        </div>
                }
            <div className="food-item-text">
                <div className="food-item-rating d-flex justify-content-between">
                    <p className='fw-bolder'>{name} </p>
                    <p className='badge bg-primary text-wrap'>{aggregate_rating}<FaStar /></p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className="food-item-desc">{description}</p>
                    <p className="food-price">${price}</p>
                </div>
            </div>

        </div>
    )
}

export default FoodItem