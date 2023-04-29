import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseAmount } from '../Redux/slices/cartslices';
const MapProduct = ({image,price,quantity,title}) => {
        const dispatch = useDispatch();
   
        const add = (id)=>{
            dispatch(increaseAmount(id))
        }
        
      

    return (
        <div>
        <div className='container'>
        <div className='row'>
                    <div className='mapproduct_controls fw-bold d-flex justify-content-between align-items-center '>
                        <img src={image} alt='name' style={{ height: "100px" }} />
                        <div className='d-flex flex-column  align-items-center'>
                            <div className='name_mapproduct'>{title}</div>
                            <div className='name_mapproduct '>{price}</div>
                            <button className='btn text-danger' >Remove</button>
                        </div>
                        <div className='d-flex flex-column text-center'>
                            <p>Quantity</p>
                            <div className='d-flex flex-row align-items-center justify-content-center'>
                                <button className='btn' >-</button>
                                <div className='name_mapproduct'>{quantity} </div>
                                <button className='btn ' onClick={()=>add()} > + </button>
                            </div>

                        </div>
                    </div>
                </div>
                </div>
        </div>
         
    )
}

export default MapProduct
