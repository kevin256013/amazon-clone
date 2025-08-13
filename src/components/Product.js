import React from 'react'
import { useStateValue } from '../context/StateProvider'

const Product = ({ id, title, image, price, rating }) => {

    const [{ basket }, dispatch] = useStateValue();

    console.log("This is the basket >>>", basket)

    const addToBasket = () => {
        // Dispatch the item into the Data Layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
    <div className='product flex flex-col items-center justify-end m-2 p-5 w-full max-h-[400px] min-w-[100px] bg-white z-1'>
        {/* Product Info */}
        <div className='product_info h-[100px] mb-4'>
            {/* Product title, price, etc. */}
            <p>{title}</p>
            {/* Price */}
            <p className='product_price mt-1'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            {/* Rating */}
            <div className='product_rating flex'>
                {
                    Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))
                }
                
            </div>
        </div>
        
        {/* Image */}
        <img className='max-h-[200px] w-full object-contain mb-4'
        src={image} 
        alt='product-image'/>
        {/* Image */}
        <button onClick={addToBasket} className='bg-[#f0c14b] border border-[#a88734] border-t-[#9c7e31] border-b-[#846a29] mt-2 text-[#111] px-3 py-1'>
            Add To Basket
        </button>
    </div>
  )
}

export default Product
