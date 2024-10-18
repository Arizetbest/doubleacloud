import React from 'react'
import NewsImage from "../Components/Images/NewsLetter.svg"

function Newsletter() {
    return (
        <div className="">

            <div className=' relative h-[70dvh] bg-blue-900/20'>
            </div>
            <div className="bg-blue-950 -mt-[34%] mx-[10%] py-5 px-20 rounded-2xl shadow-2xl absolute flexCont w-[80%] justify-center items-center">
                <div className="grid grid-cols-2">
                    <div className="img">
                        <img src={NewsImage} alt="" className=' h-[80%] mt-16 w-[80%] ' />
                    </div>
                    <div className="form my-[20%]">
                        <h1 className=' text-3xl text-white/80 font-bold text-center'>Join DoubleACloud Today and Start Your Adventure!</h1>
                        <p className='lg:text-xl md:text-3xl sm:text-2xl text-white/80 my-10 text-center'>Sign up for our exclusive newsletter today and take the first step toward planning your exciting study abroad journey. Receive expert tips, valuable updates, and personalized guidance directly to your inbox!</p>
                        <form className='flex lg:py-1 md:py-1 sm:py-1 bg-white rounded-full px-4 outline-none'>
                            <input type="email" required placeholder='Example@gmail.com' className='py-2 outline-none lg:px-10 sm:px-2 md:px-2 w-full' />
                            <button type='submit' className='text-white rounded-full py-3 lg:px-8 md:px-8 sm:px-5 bg-red-800/90 hover:bg-red-700 mx-3 lg:text-sm font-semibold uppercase md:text-xl sm:text-sm contentOne tracking-widest cursor-pointer'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter