import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Faq from '@/components/Faq'
import HowItWorks from '@/components/HowItWorks'
import Team from '@/components/Team'
import Hero from '@/components/Hero'


export default function Home() {
  return (
    <main className="flex h-auto flex-col  py-12 px-8 sm:px-24">
     <Hero />
     <HowItWorks />
    
     <Faq />
     <Team />
     <ContactForm />
     
    </main>
  )
}
