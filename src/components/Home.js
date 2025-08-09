import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div className='home flex justify-center mx-auto max-w-[1600px]'>

        {/* Banner */}
        <div className='home_container'>

            <img
            className='home_image w-screen -z-1 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))]' 
            src='./images/amazon-banner.jpg'
            alt='amazon-banner'
            />

            {/* Products */}

            <div className='home_row flex z-1 mx-[5px]'>
                <Product
                id=''
                title='Echo Dot'
                price = {39.99}
                rating={5}
                image="./images/products/amazon-echo.jpg"
                />
                <Product/>
            </div>

            <div className='home_row flex z-1 mx-[5px]'>
                <Product/>
                <Product/>
                <Product/>
            </div>

            <div className='home_row flex z-1 mx-[5px]'>
                <Product/>
            </div>

        </div>
    </div>
  )
}

export default Home
