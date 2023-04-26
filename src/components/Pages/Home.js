import React from 'react'
import CarosuelSlider from '../CarosuelSlider'
import ShopOur from '../ShopOur'
import BestDeal from '../BestDeal'
import Choosebybrand from '../Choosebybrand'
import GetUpTo from '../GetUpTo'
import Allproducthere from '../Allproducthere'



const Home = () => {
  return (
    <div>
      <CarosuelSlider />
      <section className='shop_our_top_categories'>
        <div className='container'>
          <div className='row'>
            <div className='head'>
              <h1>Shop Our Top Categories</h1>
            </div>
            <ShopOur />
          </div>
        </div>
      </section>
      <section className='Today_best_Deals_for_you'>
        <div className='container'>
          <div className='row'>
            <div className='head'>
              <h1>Todays Best Deals For You!</h1>
            </div>
            <BestDeal />
          </div>
        </div>
      </section>
      <section className='Choose_by_brand'>
        <div className='container'>
          <div className='row'>
            <div className='head'>
              <h1>Choose by Brand</h1>
            </div>

            <Choosebybrand />


          </div>
        </div>
      </section>
      <section className='Get_up_to'>
        <div className='container'>
          <div className='row'>
            <div className='head'>
              <h1>Get Up To 70% off</h1>
            </div>

            <GetUpTo />


          </div>
        </div>
      </section>
      <section className='banner_inner_here position-relative'>
        <div className='bannerinner_background'>
          <img src='/img/banner.png' alt='title' />
        </div>
        <div className='green_bannerinner_background position-absolute'>
          <h1>Get 5% Cash Back <br></br> On $200</h1>
          <p>Shopping is a bit of a relaxing hobby for me, <br></br> which is sometimes troubling for the bank balance.</p>
          <button className='btn_class'>Learn More</button>
        </div>
      </section>

      
        <section className='Product_detail_here'>
          <div className='container'>
            <div className='row'>
              <div className='head'>
                <h1>Today Best Deals For You!</h1>
              </div>
              <Allproducthere />


            </div>
          </div>

        </section>
  
    </div>
  )
}

export default Home
