import React from 'react'
import { Metadata } from 'next'

const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms of Service',
    
}

const Terms = () => {
    const Terms = [
        {id: 1, heading: "Introduction", content: "Your agreement with us includes these Terms and our Privacy Policy (&quot;Agreements&quot;). You acknowledge that you have read and understood Agreements, and agree to be bound of them.If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at [Your Email Address] so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service."},
        {id: 2, heading: "Communication", content: "By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send."},
        {id: 3, heading: "Purchases" , content: "If you wish to purchase any product or service made available through Service (&quot;Purchase&quot;), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information."},
        {id: 4, heading: "Contests, Sweepstakes and Promotions", content: "Any contests, sweepstakes or other promotions (collectively, &quot;Promotions&quot;) made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy."},
        {id: 5, heading: "Content", content:"Content found on or through this Service are the property of [Your Company Name] or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us."},
        {id: 6, heading:"Prohibited Uses", content: 'You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:In any way that violates any applicable national or international law or regulation.For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.'},
        {id: 7, heading: "Analytics", content: "We may use third-party Service Providers to monitor and analyze the use of our Service."},
        {id: 8, heading: "No Use By Minors", content: "Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms."},
        {id:9 , heading: "Accounts", content: "When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.        "}


    ]
  return (
    <div className=' min-h-screen   py-12 px-8 sm:px-24'>
        <h1 className='text-center text-xl sm:text-3xl py-8  font-bold  text-white'>
        Terms of Service
        </h1>
        <div className='max-w-[800px] mx-auto w-full'>
            <ul className='list-decimal'>
                {Terms.map((term) => (
                    <li key={term.id} className='mt-4'>
                        <span className='font-bold'>{term.heading}</span>
                        <span className='inline-block mt-2'>
                            {term.content}
                        </span>
                    </li>
                ))}
            </ul>
          
        </div>
        
    </div>
  )
}

export default Terms