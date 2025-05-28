import React from 'react'
import { useDarkMode } from '../components/DarkModeComponent'
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';


function Contact() {

  const {darkmode,toggleDarkMode} = useDarkMode();

  return (
    <div id='contact' className={`${darkmode ? 'bg-black' : 'bg-amber-200'} lg:px-20 py-10 justify-start items-start flex m-20 rounded-xl`}>
      <section className=' flex flex-col justify-start items-center lg:w-[95%] w-full  '>
        
          <h1 className='text-5xl text-black font-serif font-semibold '>
            Get In Touch
          </h1>
           <div className='flex justify-start items-start gap-10 lg:grid-cols-2 grid-cols-1 lg:w-[95%] w-full'>
          <div className='flex flex-col justify-center items-center m-10 gap-4 w-full lg:w-[95%] '>
            <input type="text" placeholder='Enter your name ' className='px-4 py-3 w-[80%] border rounded-lg border-gray-400' />
            <input type="text" placeholder='Enter your phone number  ' className='px-4 py-3 w-[80%] border rounded-lg border-gray-400' />
            <input type="text" placeholder='Enter your email ' className='px-4 py-3 w-[80%] border rounded-lg border-gray-400'/>
            <textarea name="" placeholder='Leave a Message' rows={4} id="" className='px-4 py-3  border rounded-lg w-[80%] border-gray-400'></textarea>
            <button className='bg-red-600 text-white text-xl py-3 px-6 font-semibold rounded-xl
            transform hover:scale-110 transform-transition duration-300 hober:text-red hover:bg-black w-[50%]'>SUBMIT</button>
          </div>    

           <div className=' justify-center items-center lg:w-[95%] mt-16 ml-20 w-full'>
            <p><FaLocationDot size={30} className='m-5'/> 123 Main Street</p>
            <p><FaPhone size={30} className='m-5' /> +1 234 567 890</p>
            <p><FaEnvelope size={30} className='m-5'/> example@email.com</p>
          </div> 


        </div>

       

      </section>
      

    </div>
  )
}

export default Contact