'use client'
import React, {useState} from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e: any) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e: any) => {
        e.preventDefault();
      
        if (!formData.name || !formData.email || !formData.message) {
          alert('Please fill out all required fields.');
          return;
        }
      
        
      };
  return (
    <div id='contact' className=' w-full min-h-screen flex items-center'>
        <div className='max-w-[800px] mx-auto w-full'>
            <h2 className='font-bold text-xl sm:text-3xl py-8 text-center text-white'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='flex flex-col mt-12 '>
              <label htmlFor="name" className='font-bold font-merriweather'>What&apos;s your name?</label>
              <input 
              type="text" 
              name="name" 
              id="name"   
              value={formData.name}
              required
            onChange={handleChange} 
            className='bg-transparent outline-none p-2 border-b-[1px] mt-1 border-b-[#363636]'/>

              <label htmlFor="email" className='mt-4 font-merriweather font-bold'>What&apos;s your email</label>
              <input 
              type="email"
              name="email" 
              id="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className='bg-transparent outline-none p-2 mt-1 border-b-[1px] border-b-[#363636]' />

              

              <label htmlFor="message" className='mt-4 font-bold font-merriweather'>Enter your message</label>
              <textarea 
              name="message"
              id='message'
              required
              value={formData.message}
              onChange={handleChange} 
              className='bg-transparent outline-none p-4 mt-1 border-b-[1px] border-b-[#363636]'></textarea>
              <input
                  
                  type="button"
                  value="Submit"
                  onClick={handleSubmit}
                  className='transition-all text-white border-white border-[1px] mt-4 p-4 rounded-md w-[50%] bg-transparent hover:bg-[#363636] ease-in-out duration-300'
                />
            </form>
        </div>
          
    </div>
  )
}

export default ContactForm