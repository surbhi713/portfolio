import React from 'react'
import { useDarkMode } from '../components/DarkModeComponent'


function Contact() {

  const {darkmode,toggleDarkMode} = useDarkMode();

  return (
    <div className={`${darkmode ? 'bg-black' : 'bg-yellow-100'} lg:px-20 py-10 justify-start items-start
    flex`}>
      <section className=' flex flex-col justify-start items-center lg:w-[50%] w-full'>
        
          <h1 className='text-7xl text-black font-serif '>
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


          <div>
            <h1>nam</h1>
            <h1>loctaion</h1>
            <h1>email</h1>


          </div>
        </div>
      </section>
      

    </div>
  )
}

export default Contact