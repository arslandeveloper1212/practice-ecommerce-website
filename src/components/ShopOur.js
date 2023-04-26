import React, { useState } from 'react'
import data from './data'
const ShopOur = () => {
    const [item, Setitem] = useState(data);

    console.log(item);
    return (
        <div>
            <div className='col-2 col-12'>
                <div className='d-flex flex-wrap justify-content-between align-items-center gap-15'>
                    {
                        item.map((e, i) => {
                            return (
                                <div>
                                    <div className="card position-relative" style={{ width: "12rem" }}>
                                        <img src={e.image} className="card-img-top" alt="..." />
                                        <div className="card-body position-absolute">
                                            <h5 className="card-title text-center m-auto">{e.title}</h5>

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

export default ShopOur
