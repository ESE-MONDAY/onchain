import React from 'react'
import Link from 'next/link';
import onchain from '../public/OnChain Logo.png'
import Image from 'next/image';
import { MdOutlineMailOutline } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='flex justify-center  items-center flex-col border-t-[1px] border-t-[#fff] '>
      <div className='w-full  flex items-center justify-center p-8'>
        <div className='flex flex-col gap-4 w-full items-center justify-center'>
          <Image src={onchain} alt='Onchainpromo Logo' loading='lazy' className='w-24 h-24' />
          <p className='sm:text-3xl text-xl font-bold text-center text-white'>OnChainPromo LTD</p>
          <div>
        
                        <TbBrandLinkedin className='text-4xl inline-block ml-2' />
                        <MdOutlineMailOutline className='text-4xl inline-block ml-2' />
          </div>
        </div>
        </div>

        <div className=' flex-col sm:flex-row  p-4 px-8 sm:px-24  w-full flex justify-between items-center px- '>
          <div className='flex gap-4'>
            <Link href='/policy' className='font-semibold hover:text-white hover:underline'>Privacy Policy</Link>
            <Link href='/terms' className='font-semibold hover:text-white hover:underline'>Terms Of Service</Link>

          </div>
          <div>
          <p className='text-sm  font-bold  flex justify-center items-center p-2 '>
           <span className='text-[#fff]/70 pr-2'>
        &copy; {currentYear} 
            </span> OnChainPromo.com. All rights reserved. </p>
          </div>
          
          
         </div>
    </footer>
  )
}

export default Footer