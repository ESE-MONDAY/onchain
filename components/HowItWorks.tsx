import React from 'react'
import Image from 'next/image'
import Create from '../public/create.png'
import post from '../public/post.png';
import AI from '../public/AI.png';
import payment from '../public/payment.png'

const HowItWorks = () => {
  return (
    <div className='w-full min-h-screen mt-16 flex items-center'>
      <div className='max-w-[800px] mx-auto w-full'>
      <h2 className='font-bold text-xl sm:text-3xl py-8 text-center text-white'>How it works</h2>
      <p className='text-center'>Unlocking the magic behind our process is as simple as 1-2-3. Here&apos;s a glimpse into the seamless journey that awaits you:</p>
      <div className='mt-8'>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">

      <time className="font-mono italic ">Step 1
     </time>
      
      <div className="text-lg font-black flex flex-col justify-end items-end gap-4 mt-4">
      <Image src={Create} alt='Create order' className='w-16 h-16' loading='lazy'/>
        Create an Offer
      </div>
      Create sponsorship offers by clearly describing the content requirements using natural language
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">Step 2</time>
      <div className="text-lg font-black flex flex-col justify-end items-start gap-4 mt-4">
      <Image src={post} alt='Create order' className='w-16 h-16' loading='lazy'/>
        Post Content</div>
      Post authentic content that connects with followers and fulfills the sponsored content requirements
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic">step 3</time>
      <div className="text-lg font-black flex flex-col justify-end items-end gap-4 mt-4">
      <Image src={AI} alt='Create order' className='w-16 h-16' loading='lazy'/>
        AI Verification
      </div>
      Content is analyzed using an artificial intelligence oracle network to confirm it meets the content requirements
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic">Step 4</time>
      <div className="text-lg font-black flex flex-col justify-end items-start gap-4 mt-4">
      <Image src={payment} alt='Create order' className='w-16 h-16' loading='lazy'/>
        Send payment</div>
      Using smart contracts, token payments are automatically sent to creators based on content likes or views
    </div>
    <hr />
  </li>
 
</ul>
      </div>

      </div>

    </div>
  )
}

export default HowItWorks