import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';

function Contact() {
 
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
    phone:'',
  });

  function handleInput(e){
    const {name,value} = e.target
    setForm((prev)=>({
      ...prev,
      [name]:value
    }))
  }


  function handleSubmit(e){       //e here is refferd to form
    e.preventDefault()
    const serviceId= 'service_ztf4wko';
    const templateId ='template_aow27gx';
    const publicKey = '-5Inxx_DftbJeKeKM';

    emailjs.send(serviceId,templateId,form,publicKey)
    .then((res)=>{
      console.log('Email succesfully Sent!',res.text)
      alert("Thank you! Your message has been sent.");
      setForm({ name: '', email: '', phone: '', message: '' }); // Reset form
    })
    .catch((e)=>{
      console.log('There was an error sending the email')
      alert("Oops! Something went wrong. Please try again.");
    })
     console.log(form.name,form.email,form.phone,form.message)
    console.log(e.target.phone.value)
  }

  return (
    <section
      id="contact"
      className='px-6 md:px-16 py-12 rounded-xl shadow-md transition-all duration-300 bg-black text-pink-900'
      aria-label="Contact section"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-10">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col gap-6"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                id="name"
                required
                placeholder="Your name"
                onChange={handleInput}
                className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                id="phone"
                placeholder="Your phone number"
                onChange={handleInput}
                className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                id="email"
                required
                placeholder="Your email address"
                onChange={handleInput}
                className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                id="message"
                rows="4"
                required
                placeholder="Write your message here..."
                onChange={handleInput}
                className="w-full px-4 py-3 border rounded-lg border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-300"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white text-lg py-3 px-6 font-semibold rounded-xl transition-transform transform hover:scale-105 w-full"
            >
              Submit
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-6 flex flex-col justify-center px-4">
            <h2 className="text-2xl font-semibold">Contact Info</h2>
            <div className="flex items-center text-lg">
              <FaLocationDot size={26} className="mr-4 text-pink-600" />
              <address className="not-italic">D-2/30 Khajoori Khas, Delhi-94</address>
            </div>
            <div className="flex items-center text-lg">
              <FaPhone size={26} className="mr-4 text-pink-600" />
              <a href="tel:+919650855481">+91 9650855481</a>
            </div>
            <div className="flex items-center text-lg">
              <FaEnvelope size={26} className="mr-4 text-pink-600" />
              <a href="mailto:surbhi8004@email.com">surbhi8004@email.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
