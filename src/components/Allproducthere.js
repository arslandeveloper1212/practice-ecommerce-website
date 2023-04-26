import React, { useEffect, useState } from 'react'
// import allproduct from './allproduct'
import {addcart} from './Redux/slices/cartslices'
import {useDispatch,useSelector} from 'react-redux';
import RatingStar from './RatingStar';
import { fetchproduct } from './Redux/slices/productslice';
import Link from 'antd/es/typography/Link';
const Allproducthere = () => {
       const dispatch = useDispatch();
    const data = useSelector(state=>state.product.data);
    console.log(data);

    

    const fetchResult = (catItem) =>{
        const result = fetchproduct.filter((curData)=>{
            return curData.category===catItem;
            
        })
        // setData(result);
    }

    const Addtocart = (item)=>{
        dispatch(addcart(item));
    }

        useEffect(()=>{
            dispatch(fetchproduct())
        },[])

    return (
        <div>
            <div>
           
                <div className='card_controls_allproduct d-flex flex-wrap justify-content-between' >

                    {
                     data &&   data.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div class="card mb-4" style={{ width: "18rem", cursor:"pointer" }}>
                                        <img class="card-img-top" src={item.image} alt="Card image cap" className='bestdeal_hit' style={{height: "20rem"}} />
                                        <div class="card-body">
                                            <div className='card_controls_content d-flex justify-content-between'>
                                                <h4 class="card-title">{item.title}</h4>
                                                $ <strong><h3>{item.price}</h3></strong>
                                            </div>
                                            <p class="card-text mb-0">{item.text}</p>
                                            <RatingStar />
                                            <div className='p-addtocart mt-2 mb-2'>
                                                <button className='addtocart' onClick={()=>Addtocart(item)}>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                
            </div>
        </div>

    )
}

export default Allproducthere
