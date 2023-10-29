import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {IoCartOutline} from 'react-icons/io5'
import { FiUser } from 'react-icons/fi'
import '../../src/Global.css'

const Navbar = () => {
    let Links = [
        {name:'Home'},
        {name:'Contact'},
        {name:'About'},
        {name:'Sign Up'},
    ]
    
        return (
          
            <div>
               <div className='pt-[40px] pb-[16px]'>
              <div className="max-w-container mx-auto">
                  <div className="flex items-center">
                  <div className="w-1/5">
                      <p className='text-black text-[24px] font-bold leading-[24px] tracking-[0.72px]'>Exclusive</p>
                  </div>
                  <div className="w-2/5">
                      <ul className='flex_center'>
                          {
                              Links.map((link) => (
                                  <li key={link.name} className='nav_items text-[16px] leading-[24px]'>
                                      <p className='text-black text-[16px] cursor-pointer'>{link.name}</p>
                                  </li>
                              ))
                       }
                      </ul>
                  </div>
                      
                      <div className="w-2/5">
                          <div className="flex items-center justify-end">
                          <div className=" flex items-center relative">
                              <input type="text" placeholder='What are you looking for?' className='nav_inputBox'/>
                              <FiSearch className='absolute right-[12px]' />
                          </div>
                              
                              <IoMdHeartEmpty className='text-[22px] nav_elements'/>
                              <IoCartOutline className='text-[24px] nav_elements'/>
                              <FiUser className='text-[22px] nav_elements'/>
                            
                         </div>
                  </div>
                     
                  </div>
              </div>
              
          </div>
          <div className="border-b"></div>
         </div>
      )
}

export default Navbar