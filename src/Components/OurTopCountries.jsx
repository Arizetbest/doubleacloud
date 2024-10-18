import React from 'react'
import Img01 from "../Components/Images/Countries/Canada.jpg"
import Img02 from "../Components/Images/Countries/Dubai.jpg"
import Img03 from "../Components/Images/Countries/Ireland.jpg"
import Img04 from "../Components/Images/Countries/NetherL.jpg"
import Img05 from "../Components/Images/Countries/NewZealand.jpg"
import Img06 from "../Components/Images/Countries/UnitedK.jpg"


function OurTopCountries() {
    return (
        <div className=''>
            <div className=" TopContainer bg-blue-800/10 w-full py-16">
                <h1 className=' text-5xl font-black text-center'>Our Top Destinations</h1>
                <p className='text-center leading-10 text-2xl mt-5'>We offer admission and visa assistance to the following countries</p>
                <div className="ImageContainer grid grid-cols-3 gap-12 mx-[15%] mt-16">
                    <div className="img01 group relative overflow-hidden">
                        <div className="relative w-full h-[30dvh] transition-transform duration-300 transform group-hover:scale-110">
                            <img
                                src={Img01}
                                alt=""
                                className="h-full object-cover w-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-bold">CANADA</p>
                            </div>
                        </div>
                    </div>
                    <div className="img01 group relative overflow-hidden">
                        <div className="relative w-full h-[30dvh] transition-transform duration-300 transform group-hover:scale-110">
                            <img
                                src={Img02}
                                alt=""
                                className="h-full object-cover w-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-bold uppercase">Dubai</p>
                            </div>
                        </div>
                    </div>
                    <div className="img01 group relative overflow-hidden">
                        <div className="relative w-full h-[30dvh] transition-transform duration-300 transform group-hover:scale-110">
                            <img
                                src={Img03}
                                alt=""
                                className="h-full object-cover w-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-bold">Ireland</p>
                            </div>
                        </div>
                    </div>
                    <div className="img01 group relative overflow-hidden">
                        <div className="relative w-full h-[30dvh] transition-transform duration-300 transform group-hover:scale-110">
                            <img
                                src={Img04}
                                alt=""
                                className="h-full object-cover w-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-bold">NetherLand</p>
                            </div>
                        </div>
                    </div>
                    <div className="img01 group relative overflow-hidden">
                        <div className="relative w-full h-[30dvh] transition-transform duration-300 transform group-hover:scale-110">
                            <img
                                src={Img05}
                                alt=""
                                className="h-full object-cover w-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-bold">New Zealand</p>
                            </div>
                        </div>
                    </div>
                    <div className="img01 group relative overflow-hidden">
                        <div className="relative w-full h-[30dvh] transition-transform duration-300 transform group-hover:scale-110">
                            <img
                                src={Img06}
                                alt=""
                                className="h-full object-cover w-full"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-bold">United Kingdom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTopCountries