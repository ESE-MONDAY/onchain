import React from 'react'

const Faq = () => {
  return (
    <div className='w-full h-[70vh] flex flex-col justify-center items-center ' id='faq'>
     
      <div className='max-w-[800px] mx-auto mt-12'>
      <h2 className='font-bold text-xl sm:text-3xl py-8 text-center text-white'>Frequently Asked Question</h2>
      <div className="collapse collapse-plus borber-b-[1px] border-b-[#363636] w-full">
        <input type="radio" name="my-accordion-3"  />
        <div className="collapse-title text-xl font-medium">
        How are payments handled?
        </div>
        <div className="collapse-content">
          <p className='text-sm'>All payments are sent and instantly available upon deal settlement on the blockchain using USDC.</p>

          <p className='mt-2 text-sm'>Since the platform is built using smart contracts, user funds are always handled exactly as specified in the smart contract logic.
          This means payments are transferred from advertisers to creators without passing through a centralized entity. </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3"  />
        <div className="collapse-title text-xl font-medium">
        Is there any dispute mechanism in case an advertiser or content creator disagrees with the AI content verification result?
        </div>
        <div className="collapse-content">
          <p className='text-sm'>Yes, we have a manual dispute resolution process. </p>

          <p className='mt-4 text-sm'>After a content creator attempts to redeem payment for a sponsorship deal, the content undergoes multiple AI queries to ensure consistency.
          However, if either the advertiser or creator disagrees with the AI&apos;s initial verification result, they have a 7-day window to raise a dispute before the deal is settled.</p>
          <p className='text-sm mt-2'>During this period, they can request a manual review to potentially overrule the AI verification and either refund the advertiser or pay the content creator.</p>
        </div>
      </div>
      <div className="collapse collapse-plus borber-b-[1px] border-b-[#363636]">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        How does the platform ensure the security and privacy of sponsorship deals?
        </div>
        <div className="collapse-content">
          <p className='text-sm'>To maintain privacy, all payment terms and content requirements for private sponsorship deals are encrypted and stored in an off-chain database such that only the respective advertiser and content creator can access the information. </p>
            <p className='text-sm mt-2'>To ensure security, fully audited smart contracts are used to create and enforce all sponsorship deals and facilitate payments.</p>
            
            <p className='text-sm mt-2'>Finally, proof of social media account ownership and AI verification of sponsored content are conducted on the ultra-reliable Chainlink decentralized oracle network.  </p>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Faq