import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CEO from '../public/CEO.jpeg'
import Katarina from '../public/Katarina.jpeg'
import Kristain from '../public/Kristain.jpeg'

const TeamMates = [
    {id: 1, name: 'Morgan Kuphal', role: 'Web3 Founder, Software Engineer', image: CEO, content: "After the launch of Chainlink Functions, Morgan continues to develop real-world applications that leverage blockchain technology.", profile: "https://www.linkedin.com/in/morgan-kuphal-b1b487244/"},
    {id: 2, name: 'Katarina Kuphal', role: 'UI/UX Designer, Web Developer', image: Katarina, content: "Katarina has a track record of merging design and coding skills to craft impactful digital solutions used by millions worldwide.", profile: "https://www.linkedin.com/in/sapereaude1512/"},
    {id: 3, name: 'Kristain Kuphal', role: 'Smart Contract Developer, Code Mentor', image: Kristain, content: "Kristain is a smart contract developer and code mentor with a passion for building decentralized applications.", profile: "https://www.linkedin.com/in/kristians-kuhta/"},
]

const Team = () => {
  return (
    <div className='w-full min-h-screen mt-16 flex items-center'>
        <div className='max-w-[800px] mx-auto w-full'>
        <h2 className='font-bold text-xl sm:text-3xl py-8 text-center text-white'>Meet Our Team</h2>
        <p className='text-center'> Get to know the faces behind the innovation, the minds shaping our vision, and the individuals who make it all happen</p>
        <div className='flex flex-col sm:flex-row gap-4 mx-auto w-full mt-8  justify-around'>
            {TeamMates.map((member) => (
                <div key={member.id } className='bg-white/80 text-black p-8 flex items-center flex-col rounded-md'>
                    <Image src={member.image} alt='CEO' className='rounded-full h-24 w-24' loading='lazy'/>
                    <p className='mt-4'>{member.name}</p>
                    <p className='mt-4'>{member.role}</p>
                    <p className='mt-2'>{member.content}</p>
                    <Link href={member.profile} target='_blank' className='mt-8 hover:underline' >Connect on Linkedin</Link>

                </div>
            ))}
            
           

        </div>

        </div>
    </div>
  )
}

export default Team