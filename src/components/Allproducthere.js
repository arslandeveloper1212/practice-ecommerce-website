import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addcart } from './Redux/slices/cartslices';
import RatingStar from './RatingStar';


const Allproducthere = () => {
     const dispatch = useDispatch();
    const data = useSelector(state=>state.allcart.products);
   
    

    const add = (item)=>{
        dispatch(addcart(item))
    }

  
       
    return (
        <div>
            <div>
           
                <div className='card_controls_allproduct d-flex flex-wrap justify-content-between' >

                    {
               data &&  data.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div class="card mb-4" style={{ width: "20rem", cursor:"pointer" }}>
                                        <img class="card-img-top" src={item.image} alt="Card image cap" className='bestdeal_hit' style={{height: "15rem",width: "100%", padding: "20px"}} />
                                        <div class="card-body">
                                            <div className='card_controls_content d-flex justify-content-between'>
                                                <h4 class="card-title">{item.title}</h4>
                                                $ <strong><h3>{item.price}</h3></strong>
                                            </div>
                                            <p class="card-text mb-0">{item.text}</p>
                                            <RatingStar />
                                            <div className='p-addtocart mt-2 mb-2'>
                                                <button className='addtocart' onClick={()=>add(item)}>Add to Cart</button>
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
