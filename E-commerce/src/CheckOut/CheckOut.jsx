import React from 'react'
import Navbar from '../Wishlist/Navbar'
import product from '../assets/product.png'
import gamepad from '../assets/productGamepad.png'
import visa from '../assets/visa.png'
import bkash from '../assets/bkash.png'
import masterCard from '../assets/mastercard.png'
import nogod from '../assets/nogod.png'
import '../../src/Global.css'


// List (Functional Component)

const ListItems = (props) => {

  const { name, opacity,display } = props
  
  return (
    <div>
          <li className={`text_detail4 cursor-pointer text-black text-opacity-[0.5] ${opacity}`}>{name}<span className={`px-[12px] text_detail4 cursor-default text-black text-opacity-[0.5] ${display}`} >/</span></li>
    </div>
  )
}

//Input Box (Functional Component)

const InputBoxes = (props) => {

const {name, type,margin}=props

  return (
    <div>
 <div className={`mt-[${margin}]`}>
            <p className='text_detail3 text-black text-opacity-[0.4]'>{name}</p>
            <input type={type} className='bg-[#F5F5F5] outline-none w-[470px] h-[50px] rounded-[4px] pl-[15px] text-black text-opacity-[0.4] mt-[8px]'/>
          </div>
    </div>
  )
}

// Main Portion

const CheckOut = () => {
  return (
    <div>
      <Navbar />
      {/* Main Container */}
      <div className="max-w-container mx-auto pb-[140px]">
        
        {/* List items */}
          <div className="mt-[80px]">
            <ul className='flex items-center'>
              <ListItems name='Account' />
              <ListItems name='My Account' />
              <ListItems name='Product' />
              <ListItems name='View Cart' />
              <ListItems name='CheckOut' opacity='text-opacity-[1]' display='hidden'/>
            </ul>
        </div>
        
        {/* Billing Details */}

        <div className="mt-[80px] flex justify-between">


          <div>     {/* Left-Side */}
          <h2 className='font-inter text-[36px] font-medium leading-[30px] text-black tracking-[1.44px] mb-[48px]'>Billing Details</h2>
            <InputBoxes name='First Name' type='text' />
            <InputBoxes name='Company Name' type='text' margin='32px' />
            <InputBoxes name='Street Address' type='text' margin='32px' />
            <InputBoxes name='Apartment, floor, etc. (optional)' type='text' margin='32px' />
            <InputBoxes name='Town/City*' type='text' margin='32px' />
            <InputBoxes name='Phone Number*' type='number' margin='32px' />
          <InputBoxes name='Email Address*' type='email' margin='32px' />
          {/* CheckBox */}
          <div className="flex items-center mt-[24px]">
            <input type="checkbox" checked className='h-[24px] w-[24px] accent-brand' />
            <span className='text_detail3 text-black ml-[16px]'>Save this information for faster check-out next time</span>
          </div>
          </div>

                {/* Right-Side */}
          <div className='w-[50%] mt-[100px]'>     

            {/* Item-1 */}
            <div className="flex_between pr-[100px]"> 

              <div className="flex items-center">   
                <img src={gamepad} alt="Gamepad" />
                <p className='ml-[15px] text_detail3 text-black'>LCD Monitor</p>
                  </div>
                <span className='text_detail3 text-black'>$650</span>
            </div>

            {/* Item-2 */}
            <div className="flex_between pr-[100px] mt-[32px] mb-[16px]">
            
              <div className="flex items-center">
                <img src={product} alt="laptop" />
                <p className='ml-[15px] text_detail3 text-black'>H1 Gamepad</p>
                  </div>
                <span className='text_detail3 text-black'>$550</span>
            </div>

            <div>   {/* Subtotal */}
            <div className="flex_between pr-[100px] py-[16px]">
              <p className='text_detail3 text-black'>Subtotal:</p>
              <span className='text_detail3 text-black'>$1200</span>
              
            </div>
            <div className="border-b-[1px] border-b-black border-opacity-[0.4] mr-[100px]"></div>
           </div>
            <div>   {/* Shipping */}
            <div className="flex_between pr-[100px] py-[16px]">
              <p className='text_detail3 text-black'>Shipping:</p>
              <span className='text_detail3 text-black'>Free</span>
              
            </div>
            <div className="border-b-[1px] border-b-black border-opacity-[0.4] mr-[100px]"></div>
           </div>
              {/* Total */}
            <div className="flex_between pr-[100px] py-[16px]">
              <p className='text_detail3 text-black'>Total:</p>
              <span className='text_detail3 text-black'>$1200</span>
              
            </div>
            
          {/* Bank */}
            
            <div className="flex_between pr-[100px] mt-[32px]">
              <div className="flex items-center">
                <input type="radio" className='w-[24px] h-[24px] accent-black border-[2px]' />
                <span className='ml-[16px] text_detail3 text-black'>Bank</span>
              </div>
              <div className="flex items-center gap-x-[8px]">
                <img src={bkash} alt="Bkash" />
                <img src={visa} alt="Visa" />
                <img src={masterCard} alt="Master-card" />
                <img src={nogod} alt="Nogod" />
              </div>
            </div>

            {/* Cash on delivery */}
            
            <div className="flex items-center mt-[34px]">
              <input type="radio" checked className="w-[24px] h-[24px] accent-black border-[2px]' " />
              <span className='ml-[16px] text_detail3 text-black'>Cash on delivery</span>
            </div>

            {/* Coupon Code and Apply coupon */}

            <div className='flex mt-[32px]'>
          <input type="text" placeholder='Coupon Code' className='pl-[18px] pr-[130px] py-[8px] rounded-[4px] border-[1px] border-black outline-none font-pop' />
        
        <button className='text-Text3 btn2 text_detail2 py-[16px] px-[48px] ml-[16px]'><p>Apply Coupon</p></button>
            </div>

            {/* Place-Order Button */}

            <button className='text-Text3 btn2 text_detail2 py-[16px] px-[48px] mt-[32px]'><p>Place Order</p></button>

          </div>
          

        </div>

      </div>

    </div>
  )
}

export default CheckOut