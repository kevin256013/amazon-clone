import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className='h-[60px] flex items-center bg-[#131921] sticky top-0 z-[100]'>

        {/* Amazon Logo */}
        <img 
        className='w-[100px] object-contain mx-20 mt-[18px]'
        src='./images/amazon-logo.png' 
        alt='amazon-logo'
        />

        {/* Input Header */}
        <div className='flex flex-1 items-center rounded-[24px]'>
            <input type='text' className='h-[22.5px] p-[10px] border-none w-full focus:outline-none'/>
            <SearchIcon className='p-[5px] h-[22px] bg-[#cd9042]'/>
            {/* Logo */}
        </div>

        {/* Header Nav */}
        <div className='flex justify-evenly'> 
            <div className='flex flex-col mx-10 text-white'>
                <span className='text-[10px]'>
                    Hello Guest
                </span>
                <span className='text-[13px] font-extrabold'>
                    Sign In
                </span>
            </div>

            <div className='flex flex-col mx-10 text-white'>
                <span className=' text-[10px]'>
                    Returns
                </span>
                <span className=' text-[13px] font-extrabold'>
                    & Orders
                </span>
            </div>

            <div className='flex flex-col mx-10 text-white'>
                <span className='text-[10px]'>
                    Your
                </span>
                <span className='text-[13px] font-extrabold'>
                    Prime
                </span>
            </div>

            <div className='flex items-center text-white'>
                <ShoppingBasketIcon/>
                <span className='text-[13px] font-extrabold ml-[10px] mr-[10px'>
                    0
                </span>

            </div>

        </div>

    </div>

  )
}

export default Header
