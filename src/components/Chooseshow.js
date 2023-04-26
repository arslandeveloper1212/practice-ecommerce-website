import React from 'react'

const Chooseshow = ({image, title, desc}) => {
  return (
    <div className='d-flex gap-15 align-items-center chooseshow_background'>
      <img src={image} alt='title' className='chose_img'/>
      <div className='choosenow_center'>
      <h4 className='mb-0'>{title}</h4>
      <p className='mb-0'>{desc}</p>
      </div>
    </div>
  )
}

export default Chooseshow
