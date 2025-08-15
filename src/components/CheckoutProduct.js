import React from 'react'
import { useStateValue } from '../context/StateProvider'

const CheckoutProduct = ({id, image, title, price, rating, hideButton}) => {

    const [ { basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
  return (
    <div className='checkoutProduct flex mt-[20px] mb-[20px]'>

        <img className='checkoutProduct_image object-contain w-[180px] h-[180px]' src={image} />

        <div className='checkoutProduct_info pl-[20px]'>

            <p className='checkoutProduct_title text-[17px] font-extrabold'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating flex'>
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>

            {
                !hideButton && (
                    <button className='bg-[#f0c14b] border border-solid mt-[10px] border-[#a88734] border-t-[#9c7e31] border-b-[#846a29] text-[#111]' onClick={removeFromBasket}>
                        Remove from Basket
                    </button>
                )
            }


        </div>
        
      
    </div>
  )
}

export default CheckoutProduct
