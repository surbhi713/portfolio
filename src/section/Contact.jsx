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
    const templateId_to_me ='template_0s3kp0m';
    const templateId_to_client = 'template_t1ykesp'
    const publicKey = '-5Inxx_DftbJeKeKM';

    const templateParams = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    message: form.message,
    to_email: 'surbhi8004@email.com'
  };


  emailjs.send(serviceId,templateId_to_me,form,publicKey)
  .then((res)=>{
    console.log('Email sent to Surbhi')
  })
  .catch((err)=>{
    console.log(err)
  })

    emailjs.send(serviceId,templateId_to_client,templateParams,publicKey)
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
  className="px-6 md:px-16 py-12 rounded-xl transition-all duration-300 bg-[#FFF5F8] text-[#444]"
  aria-label="Contact section"
>
  <div className="max-w-6xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-10 text-[#A14B68]">
      Get In Touch
    </h1>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-6 border border-[#FDCEDF]"
        aria-label="Contact form"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          id="name"
          required
          placeholder="Your name"
          onChange={handleInput}
          className="w-full px-4 py-3 border rounded-lg border-[#FDCEDF] bg-[#FFF0F5] text-[#444] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-pink-200"
        />

        <input
          type="tel"
          name="phone"
          value={form.phone}
          id="phone"
          placeholder="Your phone number"
          onChange={handleInput}
          className="w-full px-4 py-3 border rounded-lg border-[#FDCEDF] bg-[#FFF0F5] text-[#444] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-pink-200"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          id="email"
          required
          placeholder="Your email address"
          onChange={handleInput}
          className="w-full px-4 py-3 border rounded-lg border-[#FDCEDF] bg-[#FFF0F5] text-[#444] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-pink-200"
        />

        <textarea
          name="message"
          value={form.message}
          id="message"
          rows="4"
          required
          placeholder="Write your message here..."
          onChange={handleInput}
          className="w-full px-4 py-3 border rounded-lg border-[#FDCEDF] bg-[#FFF0F5] text-[#444] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-pink-200"
        ></textarea>

        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-900
           text-white text-lg py-3 px-6 font-semibold rounded-xl 
           transition-transform transform hover:scale-105 w-full shadow-sm"
        >
          Submit
        </button>
      </form>

      {/* CONTACT INFO */}
      <div className="space-y-6 flex flex-col justify-center px-4 text-[#5A4B5C]">
        <h2 className="text-2xl font-bold text-[#A14B68]">Contact Info</h2>
        <div className="flex items-center text-lg">
          <FaLocationDot size={26} className="mr-4 text-pink-400" />
          <address className="font-semibold text-black italic">D-2/30 Khajoori Khas, Delhi-94</address>
        </div>
        <div className="flex items-center text-lg">
          <FaPhone size={26} className="mr-4 text-pink-400" />
          <a href="tel:+919650855481" className='font-semibold text-black italic'>+91 9650855481</a>
        </div>
        <div className="flex items-center text-lg">
          <FaEnvelope size={26} className="mr-4 text-pink-400" />
          <a href="mailto:surbhi8004@email.com" className='font-semibold text-black italic'>surbhi8004@email.com</a>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Contact;
