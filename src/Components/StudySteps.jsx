import React from 'react'
import Img01 from "../Components/Images/Find01.png"
import Img02 from "../Components/Images/Submit.png"
import Img03 from "../Components/Images/Secure.png"

function StudySteps() {
    return (
        <div>
            <div className="contain py-16 bg-blue-900/10">
                <h1 className=' text-5xl font-bold text-center'>Study Abroad in Three Steps</h1>
                <div className="relative max-w-7xl mx-auto my-10">
                    {/* Vertical Line */}
                    <div className="absolute border-l-4 border-blue-900 h-full left-1/2 transform -translate-x-1/2"></div>

                    {/* Step 1 */}
                    <div className="mb-8 flex justify-between items-center w-full left-timeline">
                        <div className="order-1 w-5/12">
                            <img src={Img01} alt="Icon 1" className="w-full h-full rounded-full" /></div>
                        <div className="z-20 flex items-center order-1 bg-blue-900 shadow-xl w-8 h-8 rounded-full">
                        </div>
                        <div className="order-1 bg-white rounded-lg shadow-lg w-5/12 px-6 py-4">
                            <h3 className="mb-2 text-xl font-bold text-blue-900">Step 1</h3>
                            <p className=' text-xl my-2 font-bold text-gray-700'>Find Your Perfect Program</p>
                            <p className=" text-base leading-snug text-gray-900">
                                We help you identify the best options based on your goals and preferences.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">

                        <div className="order-1 bg-white rounded-lg shadow-lg w-5/12 px-6 py-4">
                            <h3 className="mb-2 text-xl font-bold text-blue-900">Step 2</h3>
                            <p className=' text-xl my-2 font-bold text-gray-700'>Submit Your Application</p>
                            <p className=" text-base leading-snug text-gray-900">
                                We’ll guide you through preparing a compelling application.
                            </p>
                        </div>
                        <div className="z-20 flex items-center order-1 bg-blue-900 shadow-xl w-8 h-8 rounded-full">
                        </div>
                        <div className="order-1 w-5/12">
                            <img src={Img02} alt="Icon 1" className="w-full h-full rounded-full" />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="mb-8 flex justify-between items-center w-full left-timeline">
                        <div className="order-1 w-5/12">
                            <img src={Img03} alt="Icon 3" className="w-full h-full rounded-full" />
                        </div>
                        <div className="z-20 flex items-center order-1 bg-blue-900 shadow-xl w-8 h-8 rounded-full">
                        </div>
                        <div className="order-1 bg-white rounded-lg shadow-lg w-5/12 px-6 py-4">
                            <h3 className="mb-2 text-xl font-bold text-blue-900">Step 3</h3>
                            <p className=' text-xl my-2 font-bold text-gray-700'>Secure Your Visa</p>
                            <p className=" text-base leading-snug text-gray-900">
                                Our team ensures you have everything needed for a smooth visa process
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudySteps