import React from 'react'
import Subtotal from '../components/Subtotal'

const Checkout = () => {
  return (
    <div className='checkout flex p-[20px] bg-white max-h-max'> 

        <div className='checkout_left'>

            <img
            className='checkout_ad w-full mb-[10px]'
            src='./images/amazon-banner2.jpg'
            alt='amazon-banner'
            />

            <div>
                <h3></h3>
                <h2 className='checkout_title mr-[10px] p-[10px] border-b border-solid border-gray-400'> Your shopping Basket</h2>
            </div>

        </div>

        <div className='checkout_right'>
            <Subtotal/>
        </div>
      
    </div>
  )
}

export default Checkout
