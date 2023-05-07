import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../Redux/slices/cartslices';



const CartDataPage = () => {

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcart)
  const dispatch = useDispatch();


  const removehere = (id) => {
    dispatch(removeItem(id))
  }



  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart])


  // console.log(getitem);
  return (
    <div>
      <h2 className='mt-5 text-center'>Shopping Cart </h2>
      <div className='container'>
        <div className='row'>
          <div className='d-flex flex-wrap justify-content-around'>
            {
              cart.map((item) => {
                return (
                  <div>
                    <img src={item.image} alt='title' />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <button className='btn btn-danger mb-4' onClick={() => removehere(item.id)}>Remove</button>
                    <div className='quantity d-flex'>
                      <button className='btn' onClick={() => dispatch(increaseItemQuantity(item.id))}> + </button>
                      <h1>{item.quantity}</h1>
                      <button className='btn' onClick={() => dispatch(decreaseItemQuantity(item.id))}> - </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <div className='d-flex justify-content-around'>
                  <p>Total Quantity</p>
                  <p>{totalQuantity}</p>
                </div>
                <div className='d-flex justify-content-around'>
                  <p>Total Price</p>
                  <p>$: {totalPrice}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDataPage
