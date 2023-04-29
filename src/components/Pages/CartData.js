import React from 'react'
import { useSelector } from 'react-redux'
import MapProduct from './MapProduct';

const CartData = () => {
   const items = useSelector((state)=>state.cart.products)
   console.log(items);
  return (
    <div className='mt-5'>
      
      {
         items.map((item,index)=>{
          return(
            <div key={index}>
           
            <MapProduct
             key={index}
           
             category= {item.category}
             description={item.description}
             image = {item.image}
             price = {item.price}
             quantity= {item.quantity}
             title= {item.title}
             totalPrice= {item.totalPrice}
            />
            </div>
            
            
          
          )
        })
      }
      
    </div>
  )
}

export default CartData
