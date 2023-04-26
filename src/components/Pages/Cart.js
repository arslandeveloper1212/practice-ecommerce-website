import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const item = useSelector(state => state.cart)
  console.log(item);
  return (
    <div>
      <h2 className='mt-5'>{item}</h2>
    </div>
  )
}

export default Cart
