import React from 'react'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='flex justify-center  items-center'>
        <div className='border-t-[1px] flex-col sm:flex-row  p-4 border-t-[#fff] w-full flex justify-between items-center '>
          <div className='flex gap-4'>
            <Link href='/policy' className='font-semibold'>Privacy Policy</Link>
            <Link href='/terms' className='font-semibold'>Terms Of Service</Link>

          </div>
          <div>
          <p className='text-sm  font-bold  flex justify-center items-center p-2 '>
           <span className='text-[#fff]/70 pr-2'>
        &copy; {currentYear} 
            </span> OnChainPromo.com. All rights reserved. </p>
          </div>
          
          
         </div>
    </div>
  )
}

export default Footer