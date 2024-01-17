import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Faq from '@/components/Faq'
import HowItWorks from '@/components/HowItWorks'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  py-12 px-8 sm:px-24">
     <h1>Hello</h1>
     <HowItWorks />
    
     <Faq />
     <ContactForm />
     
    </main>
  )
}
