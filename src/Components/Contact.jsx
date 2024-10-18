import React from 'react'
import Newsletter from './Newsletter'

function Contact() {
    return (
        <div>
            <div className="md:py-[3.5em] py-10 bg-black"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:m-[10%] mx-[4%] my-[15%]">
                <div className="Text">
                    <h1 className='font-semibold md:text-4xl text-2xl font-mono'>Have Questions?</h1>
                    <p className='md:text-xl text-sm font-light pt-3 pb-10'>Please feel free to call or email us,<br />
                        or use our contact form to get in touch with us.<br />
                        We look forward to hearing from you!
                    </p>
                    <div className="number pb-10">
                        <p className='md:text-3xl text-xl font-mono tracking-tighter font-semibold'>Give Us a Call:</p>
                        <p className='md:text-lg text-sm font-thin'><a href="tel:+447767558035">+44 7767 558035</a> United Kingdom (Uk) <br /></p>
                        <p className='md:text-lg text-sm font-thin'><a href="tel:+2348082369281">+2348082369281</a> Nigeria</p>
                    </div>
                    <div className="mail pb-5">
                        <p className='md:text-2xl text-lg font-mono font-semibold'>Send Us Mail</p>
                        <a href="mailto:hydratechconsulting@gmail.com" className='hover:text-blue-500 hover:underline'>hydratechconsulting@gmail.com</a>
                    </div>
                    <div className="map">
                        <h1 >Find us here:</h1>

                    </div>
                </div>
                <div className="Form">
                    <form action="">
                        <input className='w-full shadow-lg border border-black py-3 my-0.5 px-4 placeholder:text-black/50 focus:border-red-600 focus:border-2 outline-none' type='text' placeholder='Name' /><br />
                        <input className='w-full shadow-lg border border-black py-3 my-0.5 px-4 placeholder:text-black/50 focus:border-red-600 focus:border-2 outline-none' type='email' placeholder='Email Address' /><br />
                        <input className='w-full shadow-lg border border-black py-3 my-0.5 px-4 placeholder:text-black/50 focus:border-red-600 focus:border-2 outline-none' type='text' placeholder='Subject' /><br />
                        <textarea className='w-full shadow-lg border border-black py-3 my-0.5 px-4 placeholder:text-black/50 focus:border-red-600 focus:border-2 outline-none' name="Your Message" id="Message" cols="30" rows="6"></textarea>
                        <button type="submit" className='bg-black focus:bg-red-600 block mx-auto py-3 px-20 text-white text-lg font-semibold w-full'>Send Message</button>
                    </form>
                </div>
            </div>
            <Newsletter />
            <div className='lg:pt-[10%] md:pt-[20%] sm:pt-[30%] bg-black/90 lg:pb-[2%] md:pb-[5%] sm:pb-[8%]'>
                <p className='lg:text-sm md:text-sm sm:text-xs text-white text-center border-t border-white/30 pt-10 lg:mx-28'>COPYRIGHT © 2023 Hydratech NIG LTD ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    )
}

export default Contact