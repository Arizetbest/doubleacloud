import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import Video001 from "./Images/002.mp4";
import { Link } from "react-router-dom";
import { FaConnectdevelop } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { SiSololearn } from "react-icons/si";
import Img3 from "./Images/01.jpg";
import Img2 from "./Images/02.jpg";
import Img1 from "./Images/03.jpg";
import Img4 from "./Images/05.jpg";
import Img01 from "./Images/06.jpg";
import Arinze from "./Images/Arinze.jpg";
import Img02 from "./Images/man1.jpg";
import Counting from "./Carousel";
import Play from './Images/Play.png'
import Newsletter from "./Newsletter";
import Experience from "./Images/Experience.png"
import SimpleSlider from "./Carousel";
import OurTopCountries from "./OurTopCountries";
import StudySteps from "./StudySteps";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      AOS.refresh();
    };
  });

  const Image = [
    {
      src: Arinze,
      Name1: "Mr Arize Onubiyi",
      Name2: "Founder",
    },
    {
      src: Img02,
      Name1: "Mr Obafemi adegoke",
      Name2: "CO-Founder",
    },
    {
      src: Img02,
      Name1: "Mr Bernard Chika Uwaezuoke",
      Name2: "Administration",
    },
  ]
  const Name = [
    {
      id: 1,
      Icon: <FaConnectdevelop />,
      Title: "Our Mission",
      Sub: "To create and facilitate opportunities for academic achievement, global competence and personal growth through quality international education.",
    },
    {
      id: 2,
      Icon: <CgCommunity />,
      Title: "Our Vision",
      Sub: "To become one of the foremost international education consulting firms in Africa and to continuously create the most seamless study abroad experience for every student",
    },
    {
      id: 3,
      Icon: <SiSololearn />,
      Title: "African Studies & E-Learning Courses",
      Sub: "Comprehensive online education on Africa's diverse cultures, history, politics, and societies. Accessible to learners worldwide, fostering cross-cultural awareness and promoting a deeper understanding of the continent's complexities.",
    },
  ];

  const service = [
    {
      Id: 1,
      Image: Img1,
      Title: "FREE ASSESSMENT",
      Description:
        "Receive a personalized assessment of your academic background and extracurricular activities. We identify your strengths and improvement areas to save time and avoid disappointment in your study abroad journey.",
    },
    {
      Id: 2,
      Image: Img2,
      Title: "School Finding/ School Research",
      Description:
        "We provide a tailored list of universities that fit your academic and career goals. With our guidance, you'll confidently choose the best path to achieving your study abroad dreams.",
    },
    {
      Id: 3,
      Image: Img3,
      Title: "Handling of Applications",
      Description:
        "Our team of experts will guide you through every step of the application process, ensuring your materials stand out and impress university admissions committees.",
    },
    {
      Id: 4,
      Image: Img4,
      Title: "Visa Application",
      Description:
        "Our visa services cover every step: visa application assistance, interview preparation, and follow-up. With a 100% customer satisfaction guarantee, your visa process will be stress-free and successful.",
    },
  ];
  return (
    <div>
      <Video
        autoPlay
        loop
        muted
        controls
        className="w-full lg:h-screen md:h-auto relative sm:hidden md:block scroll-smooth object-cover top-0"
      >
        <source src={Video001} type="video/webm" />
        Your browser does not support the video tag.
      </Video>
      <div className="text selection:bg-blue-800 selection:text-white bg-black/60 z-30 sm:bg-black/80 absolute top-0 w-full h-screen">
        <div className="contain py-[17%] px-24">
          <p
            data-aos="fade-left"
            className="text-white uppercase py-1 font-bold text-sm"
          >
            DoubleACloud.COM
          </p>
          <p
            data-aos="fade-right"
            className="lg:text-4xl md:text-2xl sm:text-lg text-white Font uppercase font-black lg:py-5 md:py-2 sm:py-3"
          >
            Our Study Abroad services improve your chances <br /> of getting into the universities you want. <br />
            <span>Seamless Travel Experiences</span>
          </p>
          <p
            data-aos="fade-up"
            className="lg:text-sm md:text-sm sm:text-xs text-white lg:w-[50%] lg:tracking-wider mb-10 font-semibold"
          >
            Unlocking Opportunities Worldwide. Empowering with Innovative Tech
            Solutions and Seamlessly Facilitating International Travel for
            Memorable Journeys. Your Partner for Boundless Horizons and
            Unforgettable Experiences in the Tech-savvy Global Landscape.
          </p>
          <div className="btn flex gap-20">
            <div data-aos="fade-up-right" className="read">
              <Link
                to="/"
                className="BTN py-4 lg:px-10 md:px-16 sm:px-8 -mt-16 rounded-sm text-white bg-blue-800 uppercase text-sm font-semibold"
              >
                Get Started
              </Link>
            </div>
            <div data-aos="fade-up-right" className="read">
              <Link
                to="/"
                className="BTNS py-4 lg:px-10 md:px-16 sm:px-8 -mt-16 rounded-sm text-white bg-green-600 uppercase text-sm font-semibold"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-800/20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-[100%] lg:pt-0 md:pt-32 gap-10 lg:mx-20 md:mx-20 mx-5">
          {Name.map((item) => (
            <div className="" key={item.id}>
              <div
                data-aos="fade-up-right"
                className={`bg-white overflow-hidden my-10 py-14 shadow-2xl lg:px-10 md:px-10 px-3 rounded-2xl lg:-mt-[25%] md:-mt-[10%] mt-1 z-30 relative text-center ${item.id === 1 ? "" : item.id === 2 ? "lg:-mt-[30%] pb-20" : ""
                  }`}
              >
                <div className="mx-[42%]" data-aos="fade-up">
                  <p
                    className={`text-6xl text-blue-800/70 block mx-auto ${item.id === 2 ? "text-8xl -mx-[30%]" : ""
                      }`}
                  >
                    {item.Icon}
                  </p>
                </div>
                <p className="text-xl py-2 tracking-tighter font-semibold text-blue-800">
                  {item.Title}
                </p>
                <p className="text-black font-semibold text-sm px-2 pt-3">
                  {item.Sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-800/20 py-10">
        <div className="Our">
          <div className="z-20 relative">
            <h1 className="text-center text-2xl text-blue-800 uppercase font-bold border-b border-gray-400 mx-20 pb-2">
              What is In For You
            </h1>
          </div>
          <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-[5%] mt-10">
            <div className="">
              <div
                data-aos="fade-right"
                className="bg-white pt-10 pb-10 pl-10 lg:w-10/12 sm:mb-10 rounded-3xl"
              >
                <h1 className="text-xl font-bold border-b border-gray-400/40 pb-8">
                  Categories
                </h1>
                <div className="capitalize py-5">
                  <ul>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        IT Solutions
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        Tech Development
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        Project Management
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        E-Learning and Online Education
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        Data Science and Economic Analysis
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        Travel agency and student accommodation
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        General Contracts
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="button border-t border-gray-400/40 pt-10 w-full">
                  <Link
                    to="service"
                    className="text-sm text-center mx-auto font-semibold bg-blue-800 w-full text-white py-3 mt-6 px-[30%] rounded-full"
                  >
                    ALL SERVICES
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 col-span-2 gap-10"
              data-aos="fade-left"
            >
              {service.map((service, index) => {
                return (
                  <figure
                    className={`cursor-pointer lg:mb-0 md:mb-5 sm:mb-5 ${service.Id === 3 ? "mt-[8%]" : service.Id === 1 ? " mt-[15%]" : service.Id === 4 ? " -mt-[17%]" : ""
                      }`}
                  >
                    <img
                      src={service.Image}
                      alt=""
                      className="w-[100%] rounded-t-2xl"
                    />
                    <figcaption className="bg-white rounded-b-2xl py-8 ">
                      <p className="text-center font-bold text-xl md:ml-5 sm:ml-5 lg:px-10 md:px-5 sm:px-5">
                        {service.Title}
                      </p>
                      <p className="text-center font-thin text-lg md:ml-0 lg:px-6 md:px-5 sm:px-5 sm:ml-5">
                        {service.Description}
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="WhyChoose bg-black h-screen py-20 px-32">
        <p className="text-5xl font-semibold text-center text-white">Why Choose DoubleACloud?</p>
        <p className=" text-white text-xl text-center mx-[20%] pt-10">Whether you dream of studying at a world-class university or exploring a new culture, DoubleACloud is here to support you. Here’s why students choose us:</p>
        <div className="containergrid">

        </div>
        <div className="our-mission grid grid-cols-2 gap-9 py-20 mx-[5%]">
          <div className="content01 bg-white/10 text-white hover:text-black py-10 px-10 rounded-md hover:bg-white/80 my-2">
            <h2 className="text-3xl font-bold ">Experience</h2>
            <p className="py-5 font-semibold">With over a decade of experience, DoubleACloud has helped hundreds of students secure admission to top universities abroad.</p>
            <p className=" text-red-500 hover:underline cursor-pointer">Read more....</p>
          </div>
          <div className="content02 bg-white/10 text-white hover:text-black py-10 px-10 rounded-md hover:bg-white/80 my-2">
            <h2 className="text-3xl font-bold ">Expertise</h2>
            <p className="py-5 font-semibold">We specialize in study abroad destinations such as the UK, Canada, Europe, and more. Our expertise ensures that you’ll find the right program and institution for your specific needs.</p>
            <p className=" text-red-500 hover:underline cursor-pointer">Read more....</p>
          </div>
          <div className="content02 bg-white/10 text-white hover:text-black py-10 px-10 rounded-md hover:bg-white/80 my-2">
            <h2 className="text-3xl font-bold ">Personalized Guidance</h2>
            <p className="py-5 font-semibold">From choosing the right university to visa applications, we provide step-by-step support tailored to your individual goals.</p>
            <p className=" text-red-500 hover:underline cursor-pointer">Read more....</p>
          </div>
          <div className="content02 bg-white/10 text-white hover:text-black py-10 px-10 rounded-md hover:bg-white/80 my-2">
            <h2 className="text-3xl font-bold ">Affordable Fees</h2>
            <p className="py-5 font-semibold">Studying abroad doesn’t have to break the bank. We focus on finding affordable options for students while providing top-tier service.</p>
            <p className=" text-red-500 hover:underline cursor-pointer">Read more....</p>
          </div>
        </div>
      </div>
      <div className="teamMate bg-blue-800/10 pt- py-16 lg:px-20 md:px-10 px-5">
        <h1 data-aos="fade-up" className="text-4xl text-black py-2 font-bold text-center"><span>Our Team</span></h1>
        <p data-aos="fade-down" className="text-center text-lg font-semibold text-black py-2 mx-[20%]">Meet our dedicated professionals with deep expertise in international education and admission processes. We're here to guide you every step of the way, ensuring you have the best possible experience throughout your study abroad journey.</p>
        <div data-aos="fade-up-left" className="image grid lg:grid-cols-3 md:grid-cols-1 lg:mx-10 md:mx-10 mx-2 gap-10 mt-8">
          {Image.map((Image, index) => {
            return (
              <div data-aos="fade-up-left" className="image bg-white rounded-t-3xl" key={index}>
                <img src={Image.src} alt="" className="bg-white rounded-t-3xl h-[70%] object-cover w-full" />
                <div className="rounded-b-2xl h-[6.5em] py-10 text-center">
                  <p className="text-3xl font-bold">{Image.Name1}</p>
                  <p className="font-semibold pt-3 text-sm">{Image.Name2}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="z-40 relative">
        <div className="BackgroundFlight">
          <div className="bg-black/30 relative pt-[1%] px-[6%] h-[80dvh]">
            <h1 className="lg:text-4xl md:text-xl sm:text-lg text-white pt-32 font-black">Student Testimonials</h1>
            <div className="StudentTestimonials">
              <SimpleSlider />
            </div>
          </div>
        </div>
      </div>
      <OurTopCountries />
      <StudySteps />
      <Newsletter />
      <div className='lg:pt-[10%] md:pt-[20%] sm:pt-[30%] bg-black/90 lg:pb-[2%] md:pb-[5%] sm:pb-[8%]'>
        <p className='lg:text-sm md:text-sm sm:text-xs text-white text-center border-t border-white/30 pt-10 lg:mx-28'>COPYRIGHT © 2023 DoubleACloud NIG LTD ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default Home;
