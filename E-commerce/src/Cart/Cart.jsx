import React, { useState } from 'react'
import Navbar from '../Wishlist/Navbar'
import {BiChevronUp,BiChevronDown} from 'react-icons/bi'
import product from '../assets/product.png'
import gamepad from '../assets/productGamepad.png'
import '../../src/Global.css'

// Inner Functional Component

const CartsItem = (props) => {

  const {img,alt,productName,productPrice,productSubtotal}= props

  const [quantity, setQuantity] = useState(1)
  
  const increment = () => {
    setQuantity(quantity + 1)
    
  
    }
  const decrement = () => {
    
    if (quantity >1) {
      setQuantity(quantity - 1)
    } 
    
    }
  return (
    <div>
      <div className="py-[24px] px-[40px]  shadow-outer mt-[40px] flex_between">

{/* //Todo PRODUCT */}

        
        <div className="w-[25%]">
        <div className="flex items-center">
        <img src={img} alt={alt} />
                <span className='ml-[20px] text-black text_detail3'>{productName}</span>
      </div>
      
    </div>

{/* //Todo PRICE */}
        <div className="w-[25%] ml-[135px]">
        <p className={` text-black text_detail3`}>{productPrice}</p>
</div>

{/* //Todo QUANTITY */}

        
        <div className="w-[25%] ml-[110px]">
                
        <div className="flex_center select-none py-[6px] px-[12px] rounded-[4px] border-[1.5px] border-[#00000066] w-[72px] gap-x-[4px]">
        <span className='text_detail3 select-none'>{quantity>9 ? quantity: `0${quantity}`}</span>
        <div className="">
              <BiChevronUp onClick={increment} className='arrows'/>
              <BiChevronDown onClick={decrement} className='arrows'/>
        </div>
      </div>
  </div>
      
      

{/* //Todo SUBTOTAL */}


        <div className="w-[25%] flex justify-end">
        <p className=' text-black w-[25%] text_detail3'>{productSubtotal}</p>
        </div>




      </div>
    </div>
  )
}

// Main Component

const Cart = () => {

  return (
    <div>
      <Navbar />

      {/* Product, Price, Quantity, Subtotal */}

      <div className="max-w-container mx-auto pb-[140px]">
        <div className="flex items-center py-[80px]">
          <p className='text-black text-opacity-[0.5] text_detail4 cursor-pointer'>Home</p><span className='text-black text-opacity-[0.5] text_detail4 px-[12px]'>/</span>
          <p className='text-black text_detail4 cursor-pointer'>Cart</p>
        </div>

        <div className="flex_between py-[24px] px-[40px] rounded-[4px] bg-white shadow-outer">
          <p className='text-black text_detail3'>Product</p>
          <p className='text-black text_detail3'>Price</p>
          <p className='text-black text_detail3'>Quantity</p>
          <p className='text-black text_detail3'>Subtotal</p>
        </div>
  
        <CartsItem img={product} alt='LCD Monitor' productName='LCD Monitor' productPrice='$650' productSubtotal='$650'/>

        <CartsItem img={gamepad} alt='H1 Gamepad' productName='H1 Gamepad' productPrice='$550' productSubtotal='$550'/>
       
        {/*// Two Buttons */}

        <div className="flex_between mt-[24px]">
          <button className='text_detail2 py-[16px] px-[48px] btn'><p>Return To Shop</p></button>
          <button className='py-[16px] px-[48px] text_detail2 btn'><p>Update Cart</p></button>
        </div>
        

        <div className="flex justify-between mt-[80px]">

        {/*Left Side Coupon code and Apply Coupon Button */}

          <div>
          <input type="text" placeholder='Coupon Code' className='pl-[24px] pr-[164px] py-[16px] rounded-[4px] border-[1px] border-black outline-none font-pop' />
        
        <button className=' text-Text3 text_detail2 py-[16px] px-[48px] ml-[16px] btn2'><p>Apply Coupon</p></button>
          </div>

          {/* Right Side Box */}
          
          <div className="py-[32px] px-[24px] rounded-[4px] border-[1.5px] border-black">
          
            {/* Cart total */}
            <h4 className='text-[20px] text-black font-medium leading-[28px] font-pop pr-[346px] pb-[24px]'>Cart Total</h4>

            {/* Subtotal */}
            <div>
            <div className="flex_between">
              <span className='text-black text_detail3'>Subtotal:</span>
              <span className='text-black text_detail3'>$1200</span>
            </div>
            <div className="h-[1px] w-full bg-black bg-opacity-[0.4] my-[16px]"></div>
            </div>
            {/* Shipping */}
            <div>
            <div className="flex_between">
              <span className='text-black text_detail3'>Shipping:</span>
              <span className='text-black text_detail3'>Free</span>
            </div>
            <div className="h-[1px] w-full bg-black bg-opacity-[0.4] my-[16px]"></div>
            </div>
            {/* Total */}
            <div>
            <div className="flex_between pb-[16px]">
              <span className=' text-black text_detail3'>Total:</span>
              <span className='text-black text_detail3'>$1200</span>
            </div>
            
            </div>
            {/* Process to checkout */}
            <div className="ml-[65px] mr-[95px]">
            <button className='text-Text3 btn2 text_detail2 py-[16px] px-[48px]'><p>Procees to checkout</p></button>
            </div>

          </div>
          
        </div>


      </div>

    </div>
  )
}

export default Cart