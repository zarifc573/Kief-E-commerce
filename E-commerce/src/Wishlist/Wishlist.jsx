import React from 'react'
import Navbar from './Navbar'
import bag from '../assets/bag.png'
import rgb from '../assets/rgbcoler.png'
import gp11 from '../assets/GP11 gamepad.png'
import jacket from '../assets/jacket.png'
import laptop from '../assets/laptop.png'
import monitor from '../assets/monitor.png'
import gamepad from '../assets/Gamepad.png'
import keyboard from '../assets/keyboard.png'
import {IoCartOutline} from 'react-icons/io5'
import { BsTrash3 } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'
import '../../src/Global.css'

const Carts = (props) => {

       const {img, alt, title, cost1, cost2, percentOff, height, icon, style, display}=props

    return (
        <div>
             <div className="mt-[75px]">
                        <div className="md:w-[270px] rounded-[4px] bg-[#F5F5F5] relative">
                            <div className='absolute top-[12px] right-[12px] w-[34px] h-[34px] rounded-[50%] flex_center bg-white cursor-pointer hover:text-white hover:bg-black duration-500'>
                            {icon}
                    </div>
                    <div className={`${height} px-[12px] ${style} w-[55px] rounded-[4px] absolute top-[12px] left-[12px]`} >
                        <p className='text_detail text-white'>{percentOff}</p>
                    </div>
                    
                            <img src={img} alt={alt} className='mx-auto py-[18px] mt-[20px]'/>
                            <div className='flex items-center py-[9px] px-[80px] bg-black cursor-pointer text-white'>
                                <IoCartOutline className='text-[22px]'/>
                                <p className='ml-[8px] text_detail'>Add To Cart</p>
                            </div>
                           
                        </div>
                        <div className="mt-[16px]">
                    <p className='text-black text_detail2'>{title}</p>
                                <div className="mt-[8px]">
                        <span className='text-[#FF4040] text_detail2'>{cost1}</span>
                        <span className='text-black opacity-[0.5] text_detail2 line-through ml-[12px]'>{cost2}</span>
                        <div className={`text-[#FFAD33] mt-[8px] ${display} flex items-center`}>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar />
                            <p className='font-pop text-[14px] font-semibold leading-[21px] text-black text-opacity-[0.5] ml-[8px]'>(65)</p>
                            </div>
                        
                    </div>
                    
                            </div>
             </div>
        </div>
    )
}

const Wishlist = () => {

    return (
      
        <div>

         

            {/* //todo Navbar  */}
            <Navbar />

            {/* //todo  Wishlist-part */}
            <div className="mt-[80px]">
            <div className="max-w-container mx-auto">
                <div className="flex_between">
                        <h4 className='font-pop text-[20px] font-normal leading-[26px]'>Wishlist (4)</h4>
                        <button className="py-[16px] px-[48px] btn">
                            <p className='text-[16px] font-medium font-pop leading-[24px]'>Move All To Bag</p>
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                       
                        <Carts display='hidden' img={bag} alt='Bag' title='Gucci duffle bag' cost1='$960' cost2='$1160' style='bg-brand' percentOff='-35%' height='py-[4px]' icon={<BsTrash3 className='text-[18px]' />} />
                        
                        <Carts display='hidden' img={rgb} alt='RGB-CPU' title='RGB liquid CPU Cooler' cost1='$1960' icon={<BsTrash3 className='text-[18px]' />} />
                        
                        <Carts display='hidden' img={gp11} alt='Gamepad' title='GP11 Shooter USB Gamepad' cost1='$550' icon={<BsTrash3 className='text-[18px]' />} />
                        
                        <Carts display='hidden' img={jacket} alt='Jacket' title='Quilted Satin Jacket' cost1='$750' icon={<BsTrash3 className='text-[18px]'/>}/>
                      
                    </div>
            </div>
            </div>

            {/* //todo Just for you part */}
            <div className="pt-[88px] pb-[140px]">
            <div className="max-w-container mx-auto">
                    <div className="flex_between">
                    <div className="flex items-center">
                        <div className="w-[20px] h-[40px] bg-brand rounded-[4px]"></div>
                        <p className='text-[20px] font-pop text-black font-normal leading-[26px] ml-[16px]'>Just For You</p>
                    </div>
                    <button className="py-[16px] px-[48px] text-center text_detail2 btn">See All</button>
                    </div>
                    <div className="flex items-center justify-between">

                        {/* Cart Items  */}

                        <Carts img={laptop} alt='Laptop' title='ASUS FHD Gaming Laptop' cost1='$960' style='bg-brand' cost2='$1160' percentOff='-35%' height='py-[4px]' icon={<AiOutlineEye className='text-[18px]' />} />
                      

                    <Carts img={monitor} alt='Monitor' title='IPS LCD Gaming Monitor' cost1='$1160' icon={<AiOutlineEye className='text-[18px]'/>} />
                        
                        <Carts img={gamepad} alt='Laptop' title='HAVIT HV-G92 Gamepad' cost1='$560' style='bg-green' percentOff='NEW' height='py-[4px]' icon={<AiOutlineEye className='text-[18px]' />} />
                        
                        <Carts img={keyboard} alt='Keyboard' title='AK-900 Wired Keyboard' cost1='$200' icon={<AiOutlineEye className='text-[18px]' />} />
                        

                    </div>
                </div>
            </div>

            {/* //!Footer missing */}

     </div>
  )
}

export default  Wishlist