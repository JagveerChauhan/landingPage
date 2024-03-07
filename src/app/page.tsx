'use client';
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from 'react';
import ReviewSlider from "@/app/components/reviewSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import baseUrl from '@/app/constants/constant.js';

export default function Home() {

    interface FormData {
      name: string;
      email: string;
      mobile_number: string;
      message: string;
    }
    
    interface Errors {
      name?: string;
      email?: string;
      mobile_number?: string;
      message?: string;
    }
  
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      mobile_number: '',
      message: '',
    });
  
    const [errors, setErrors] = useState<Errors>({});
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      try {
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
  
        // If no errors, proceed with form submission logic
        if (Object.keys(validationErrors).length === 0) {
          // Your form submission logic goes here
          console.log('Form submitted:', formData);

          const response = await fetch(`${baseUrl}add-campaign-enquiry`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json', // Set content type based on your API requirements
            },
            body: JSON.stringify(formData),
          });
          const data = await response.json();
          if (response.ok) {
            console.log("Enquiry registered successfuly");
            setFormData({
              name: '',
              email: '',
              mobile_number: '',
              message: '',
            });
            setErrors({});
  
            // Reset or redirect as needed
          } else {
            console.error("Error while enquiry submitting.");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    const validateForm = (data: FormData): Errors => {
      let errors: Errors = {};
  
      if (!data.name) {
        errors.name = 'Name is required';
      }
  
      if (!data.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Invalid email address';
      }
  
      if (!data.mobile_number) {
        errors.mobile_number = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(data.mobile_number)) {
        errors.mobile_number = 'Invalid mobile number';
      }
  
      if (!data.message) {
        errors.message = 'Message is required';
      }
  
      return errors;
    };

  return (
    <>
      <nav className="sticky z-50 top-0 left-0 w-full flex flex-row justify-between drop-shadow-md bg-white px-10">
        <Link className="my-auto" href={'/'}><Image src={'/onetickLogo.png'} alt="Logo" height={45} width={150}></Image></Link>
        <span className="py-6">
          <Link className="py-3 px-6 bg-dark-blue text-white rounded-2xl font-semibold font-DM Sans" href="tel:+919650076857">Call Now</Link>
        </span>
      </nav>
      <div className="px-2 py-10 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 bg-dark-blue text-white font-DM Sans">
        <div className="flex flex-col justify-center gap-8 md:gap-10 px-6 sm:px-10 md:px-0 py-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold md:max-w-md">Boost Your Efficiency with Our Web Development.</h1>
          <p className="text-sm font-medium md:max-w-md">Get ahead with our web development services. We&apos;ll build you a website that boosts your business and helps you work smarter.</p>
          {/* <Link className="py-3 px-5 max-w-fit bg-white rounded-3xl text-dark-blue font-bold" href={'#'}>Try free trial</Link> */}
        </div>
        <div className="py-6 px-6  w-8/12 md:min-w-1.5 bg-white rounded-xl text-black m-auto ">
          <form className=" flex flex-col gap-2" onSubmit={handleFormSubmit}>
            <label className="text-sm font-medium">Name</label>
            <input className="py-1 px-2 border-black border focus:outline-none w-full" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange}></input>
            {errors.name && <span  className="text-xs text-[#FF0000] font-semibold font-DM Sans">{errors.name}</span>}
            <label className="text-sm font-medium">Email</label>
            <input className="py-1 px-2 border-black border focus:outline-none w-full" name="email" type="text" placeholder="Email Address" value={formData.email} onChange={handleChange} ></input>
            {errors.email && <span  className="text-xs text-[#FF0000] font-semibold font-DM Sans">{errors.email}</span>}
            <label className="text-sm font-medium">Mobile</label>
            <input className="py-1 px-2 border-black border focus:outline-none w-full" name="mobile_number" type="tel" placeholder="Phone Number" value={formData.mobile_number} onChange={handleChange} ></input>
            {errors.mobile_number && <span  className="text-xs text-[#FF0000] font-semibold font-DM Sans">{errors.mobile_number}</span>}
            <label className="text-sm font-medium">Message</label>
            <textarea className="py-1 px-2 border-black border focus:outline-none w-full" name="message" rows={3} placeholder="Your Message" value={formData.message} onChange={handleTextAreaChange}></textarea>
            {errors.message && <span  className="text-xs text-[#FF0000] font-semibold font-DM Sans">{errors.message}</span>}
            <button type='submit' className='w-full mt-3 py-3 px-8 text-white font-semibold bg-dark-blue rounded-2xl'>Register</button>
          </form>
        </div>
      </div>
      <div className="pt-10 pb-8 md:pt-20 md:pb-14 px-4 sm:px-10 md:px-20 flex flex-col gap-6 text-center max-w-screen-lg mx-auto font-DM Sans">
        <p className="text-4xl md:text-5xl font-bold leading-snug md:leading-[1.4]">Explore our services to boost your business and achieve your goals with ease and <span className="text-blue">efficiency</span></p>
        <p className="text-sm text-neutral-800 leading-loose">Discover how we can help your business succeed. Our services are designed to make reaching your goals easy and smooth. Let&apos;s work together for your growth and success.</p>
      </div>
      <p className="text-3xl font-bold text-center p-2">Our Services</p>
      <p className="text-base text-center pb-10">We provide Services in various domains.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 px-10 pt-4 pb-20 font-DM Sans">
        <div className="group flex flex-col gap-4 px-4 py-6 border-2 border-transparent rounded-3xl hover:border-blue transition-all duration-700 shadow-[0px_10px_60px_rgba(155,_155,_155,_0.1)]">
          <span className="flex justify-start p-5 w-fit bg-sky-100 rounded-full mx-auto group-hover:bg-blue transition-all duration-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-laptop fill-blue group-hover:fill-white transition-all duration-700" viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
          </svg>
          </span>
          <p className="text-xl font-bold text-center">Web Design</p>
          <p className="text-base text-center font-medium text-neutral-500 leading-relaxed">Get Website Design, Branding, and Print Designs just for you  .</p>
        </div>
        <div className="group flex flex-col gap-4 px-4 py-6 border-2 border-transparent rounded-3xl hover:border-blue transition-all duration-700 shadow-[0px_10px_60px_rgba(155,_155,_155,_0.1)]">
          <span className="flex justify-start p-5 w-fit bg-sky-100 rounded-full mx-auto group-hover:bg-blue transition-all duration-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-phone  fill-blue group-hover:fill-white transition-all duration-700" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
          </svg>
          </span>
          <p className="text-xl font-bold text-center">Mobile Development</p>
          <p className="text-base text-center font-medium text-neutral-500 leading-relaxed">Get Mobile Apps for iPhone and Android, Customized for You.</p>
        </div>
        <div className="group flex flex-col gap-4 px-4 py-6 border-2 border-transparent rounded-3xl hover:border-blue transition-all duration-700 shadow-[0px_10px_60px_rgba(155,_155,_155,_0.1)]">
          <span className="flex justify-start p-5 w-fit bg-sky-100 rounded-full mx-auto group-hover:bg-blue transition-all duration-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-laptop fill-blue group-hover:fill-white transition-all duration-700" viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
          </svg>
          </span>
          <p className="text-xl font-bold text-center">Web Development</p>
          <p className="text-base text-center font-medium text-neutral-500 leading-relaxed">Custom Coding and Website Setup for Your Needs.</p>
        </div>
        <div className="group flex flex-col gap-4 px-4 py-6 border-2 border-transparent rounded-3xl hover:border-blue transition-all duration-700 shadow-[0px_10px_60px_rgba(155,_155,_155,_0.1)]">
          <span className="flex justify-start p-5 w-fit bg-sky-100 rounded-full mx-auto group-hover:bg-blue transition-all duration-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-cart-check fill-blue group-hover:fill-white transition-all duration-700" viewBox="0 0 16 16">
            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
          </span>
          <p className="text-xl font-bold text-center">ECommerce</p>
          <p className="text-base text-center font-medium text-neutral-500 leading-relaxed">Get E-Commerce Solutions Customized Just for You.</p>
        </div>
      </div>
      <div className="p-10 bg-dark-blue text-white grid grid-cols-2 md:grid-cols-4 font-DM Sans">
        <div className="flex flex-col justify-center p-4 text-center"> 
          <span className="text-4xl font-bold">200+</span>
          <span className="text-lg font-normal">Satisficed Clients</span>
        </div>
        <div className="flex flex-col justify-center p-4 text-center"> 
          <span className="text-4xl font-bold">100+</span>
          <span className="text-lg font-normal">Project Complete</span>
        </div>
        <div className="flex flex-col justify-center p-4 text-center"> 
          <span className="text-4xl font-bold">1K+</span>
          <span className="text-lg font-normal">Active Users</span>
        </div>
        <div className="flex flex-col justify-center p-4 text-center"> 
          <span className="text-4xl font-bold">98%</span>
          <span className="text-lg font-normal">Positive Reviews</span>
        </div>
      </div>
      <div className="p-12 font-DM Sans">
        <p className="text-3xl font-semibold text-center">SE0-Friendly Web Design</p>
        <p className="text-base py-4 text-center">We specialize in SEO-friendly web design. Our expert team ensures your website not only looks great but also ranks high on search engines.</p>
        <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-4">
          <div className="flex flex-col gap-1 text-center px-4 py-2">
            <Image className="mx-auto" src={'/images/core-vitals.png'} height={221} width={221} alt="image"></Image>
            <p className="text-xl font-bold">Core Web Vitals</p>
            <p className="text-base">We prioritize Core Web Vitals to ensure your website delivers an exceptional user experience. We optimize your site for speed, interactivity, and visual stability.</p>
          </div>
          <div className="flex flex-col gap-1 text-center px-4 py-2">
            <Image className="mx-auto" src={'/images/modern-coding.png'} height={221} width={221} alt="image"></Image>
            <p className="text-xl font-bold">Modern Coding</p>
            <p className="text-base">We use the latest coding techniques to make your website modern, fast, and secure. Let&apos;s upgrade your online presence.</p>
          </div>
          <div className="flex flex-col gap-1 text-center px-4 py-2">
            <Image className="mx-auto" src={'/images/speed-optimization.png'} height={221} width={221} alt="image"></Image>
            <p className="text-xl font-bold">Optimized Speed</p>
            <p className="text-base">We prioritize speed optimization to ensure your website loads quickly and delivers a seamless user experience. Let&apos;s make your website lightning-fast.</p>
          </div>
          <div className="flex flex-col gap-1 text-center px-4 py-2">
            <Image className="mx-auto" src={'/images/mobile-freindly-website.png'} height={221} width={221} alt="image"></Image>
            <p className="text-xl font-bold">Mobile-Friendly</p>
            <p className="text-base">We specialize in creating mobile-friendly websites. Our expert team ensures your site looks great and functions flawlessly on all devices.</p>
          </div>
        </div>
      </div>
      <div className="grid justify-center  bg-dark-blue">
        <div className="flex flex-col md:flex-row gap-16 md:gap-6 p-2 sm:p-10 md:p-20 text-white">
          <div className="flex flex-col gap-4 md:max-w-screen-md">
            <p className="text-5xl font-bold ">Let&apos;s build something great!</p>
            <p className="text-base font-medium text-neutral-300">Let&apos;s collaborate and create something exceptional together. Elevate your digital presence with our innovative solutions.</p>
          </div> 
          <div className="m-auto min-w-fit">
            <Link className="px-6 py-4 bg-white text-dark-blue font-bold rounded-3xl" href={'#contactUs'}>Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="p-10 font-DM Sans">
        <p className="text-3xl font-semibold text-center">Our Products</p>
        <p className="text-base py-4 text-center">Our work describe why we are the best in business</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-auto max-w-fit pt-10">
          <div className="flex flex-col justify-between gap-14">
            <div className="flex flex-col gap-4">
              <span className="mx-auto">
                <Image className="rounded-lg" src={'/images/aura img.png'} height={800} width={400} alt="image"></Image>
              </span>
              <p className="text-base font-bold text-center">Stylup</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="mx-auto">
                <Image className="rounded-lg" src={'/images/gradient.png'} height={400} width={400} alt="image"></Image>
              </span>
              <p className="text-base font-bold text-center">YouthWear</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-14">
            <div className="flex flex-col gap-4">
              <span className="mx-auto">
                <Image className="rounded-lg" src={'/images/ABS.png'} height={400} width={400} alt="image"></Image>
              </span>
              <p className="text-base font-bold text-center">CouchStays Website</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="mx-auto">
                <Image className="rounded-lg" src={'/images/magazine.png'} height={800} width={400} alt="image"></Image>
              </span>
              <p className="text-base font-bold text-center">CouchStays App</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <ReviewSlider/>
      </div>
      <div className="relative bg-dark-blue p-10 md:p-20 font-DM Sans overflow-hidden " id="contactUs">
        <Image className="absolute z-0 left-0 translate-y-40 -translate-x-44" src={'/images/01.png'} height={400} width={400} alt="image"></Image>
        <Image className="absolute z-0 right-0 translate-x-40" src={'/images/Group3.png'} height={400} width={400} alt="image"></Image>
        <div className="p-2 z-10 grid grid-cols-1 md:grid-cols-2 font-DM Sans bg-white rounded-lg md:max-w-screen-md m-auto">
          <div className=" z-10 px-6 sm:px-10 md:px-0 bg-dark-blue rounded-lg py-10 bg-[url('/images/circle.png')] overflow-hidden bg-[length:200px_200px] bg-right-bottom bg-no-repeat">
            <div className="flex flex-col gap-8 md:gap-10">
              <h1 className="text-2xl px-4 sm:text-3xl md:text-4xl font-bold md:max-w-md text-white mx-auto">Start your software journey with Us.</h1>
              <p className="text-sm px-4 font-medium md:max-w-md text-white mx-auto">Need software help? OneTick Technologies is here! We offer easy-to-use software solutions and friendly experts to guide you. Together, let&apos;s turn your software ideas into reality</p>
            </div>
            {/* <Image className="ms-auto object-cover object-right-bottom translate-x-12 translate-y-24" src={'/images/circle.png'} alt="image" height={250} width={250}></Image> */}
          </div>
          <div className="p-6 z-10">
            <form className="flex flex-col gap-6 p-6 z-10" onSubmit={handleFormSubmit}>
              <span className="flex flex-col gap-1">
                <label className="text-sm font-medium">Name</label>
                <input className="border-b border-neutral-400 focus:outline-none" name='name' type="text" value={formData.name} onChange={handleChange} />
                {errors.name && <span  className="text-xs text-[#FF0000] font-semibold font-DM Sans">{errors.name}</span>}
              </span>
              <span className="flex flex-col gap-1">
                <label className="text-sm font-medium">Email</label>
                <input className="border-b border-neutral-400 focus:outline-none" name="email" type="text" value={formData.email} onChange={handleChange} />
                {errors.email && <span  className="text-xs text-[#FF0000] font-semibold font-DM Sans">{errors.email}</span>}
              </span>
              <span className="flex flex-col gap-1">
                <label className="text-sm font-medium">Mobile Number</label>
                <input className="border-b border-neutral-400 focus:outline-none" name='mobile_number' type="tel" value={formData.mobile_number} onChange={handleChange}  />
                {errors.mobile_number && <span  className="text-xs text-[#FF0000] font-semibold font-DM Sans">{errors.mobile_number}</span>}
              </span>
              <span className="flex flex-col gap-1">
                <label className="text-sm font-medium">Message</label>
                <textarea className="border-b border-neutral-400 focus:outline-none" name="message" rows={2} value={formData.message} onChange={handleTextAreaChange} ></textarea>
                {errors.message && <span  className="text-xs text-[#FF0000] font-semibold font-DM Sans">{errors.message}</span>}
              </span>
              <button type='submit' className='ms-auto mt-5 py-3 px-8 text-white font-semibold bg-dark-blue rounded-md w-fit text-sm'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      {/* Floating Buttons */}
      <Link href={'https://api.whatsapp.com/send?phone=+919650076857&text=Hi'} className="fixed left-4 bottom-4">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48" >
        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
      </svg>
      </Link>
      <Link href={'tel:+919650076857'} className="fixed right-4 bottom-4">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48">
        <path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"></path><path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"></path>
      </svg>
      </Link>
      <footer>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col m-auto md:m-0 gap-3 p-5">
            <Image src={'/onetickLogo.png'} height={45} width={150} alt="Onetick logo"></Image>
            <div className="flex flex-row gap-3 ps-2">
              <Link href={'https://api.whatsapp.com/send?phone=+919650076857&text=Hi'}><FontAwesomeIcon icon={faWhatsapp} className='text-2xl text-neutral-600'></FontAwesomeIcon></Link>
              <Link href={'https://www.facebook.com/oneticktechnologies'}><FontAwesomeIcon icon={faFacebook} className='text-2xl text-neutral-600'></FontAwesomeIcon></Link>
              <Link href={'https://www.instagram.com/oneticktechnologies?igsh=YmNnbHFsZ3F0djk5'}><FontAwesomeIcon icon={faInstagram} className='text-2xl text-neutral-600'></FontAwesomeIcon></Link>
              <Link href={'https://www.linkedin.com/company/onetick-technologies-pvt-ltd/'}><FontAwesomeIcon icon={faLinkedin} className='text-2xl text-neutral-600'></FontAwesomeIcon></Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 font-DM Sans p-5">
            <p className="text-base text-neutral-600 font-medium text-center md:text-right">Mail us at: <span className="text-black">hr@oneticktechnologies.com</span></p>
            <p className="text-base text-neutral-600 font-medium text-center md:text-right">Call us at: <span className="text-black">+91-9650076857</span></p>
            <p className="text-base text-neutral-600 font-medium text-center md:text-right">Address: <span className="text-black">E-1/74, Sector-11, Faridabad(Haryana), Pin Code-121006</span></p>
          </div>
        </div>
        <div className="text-center text-neutral-600 p-4 font-medium font-DM Sans border-t border-neutral-600">&#169; 2024 OneTick Technologies Pvt Ltd. All rights reserved.</div>
      </footer>
    </>
  );
}
