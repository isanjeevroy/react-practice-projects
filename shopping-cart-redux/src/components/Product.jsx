import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add, remove} from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

function Product({post}) {

  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to Cart");
  }
  const removeFromCart = () =>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart!");
  }

  return (
    <div>

      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.desription}</p>
      </div>

      <div>
        <img src={post.image} alt="" />
      </div>

      <div>
        <p>{post.price}</p>
      </div>
      {
        cart.some((p)=>p.id==post.id) ? 
        (
          <button onClick={removeFromCart}>
            Remove Item
          </button>
        ):
        (
          <button onClick={addToCart}>
            Add to Cart
          </button>
        )
      }

    </div>
  )
}

export default Product