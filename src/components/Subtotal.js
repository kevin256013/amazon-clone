import React from 'react';
import { NumericFormat } from 'react-number-format';
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../context/reducer';

const Subtotal = () => {

    const [ { basket }, dispatch] = useStateValue(); // access global state(basket) and dispatch 
    
  return (
    <div className='subtotal flex flex-col justify-between w-[300px] h-[100px] p-[20px] bg-[#f3f3f3] border border-solid border-[#dddd] rounded-sm'>
        <NumericFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift flex items-center'>
                        <input 
                        type='Checkbox' 
                        className='mr-[5px]'
                        /> 
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType='text'
            thousandSeparator={true}
            prefix='$'
        />

        <button className='bg-[#f0c14b] rounded-xs w-full h-[30px] border border-solid mt-[10px] border-t-[#a88734] border-r-[#9c7e31] border-b-[#846a29] border-l-[#9c7e31] text-[#111] '>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal
