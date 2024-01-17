import React from 'react'
import Onchain from '../public/OnChain Logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between sm:justify-around bg-white mt-4 mx-auto py-4 px-8 sticky top-'>
        <Link href="/" className='w-8 h-8 flex items-center gap-4'>
            <Image src={Onchain} alt="OnChainPromo.com logo" loading='lazy' />
            <p className='text-black text-lg font-extrabold'>OnChain.</p>
        </Link>
        <div className='text-black flex items-center gap-4'>
            <Link href='#features' className='hidden sm:flex'>Features</Link>
            <Link href='#faq' className='hidden sm:flex'>Faq</Link>
            <Link href='#contact' className='hidden sm:flex'>Contact</Link>
            <button className='bg-[#000] text-white px-4 py-2 rounded-md ml-8'>Get Started</button>

        </div>
        
        </div>
  )
}

export default Navbar