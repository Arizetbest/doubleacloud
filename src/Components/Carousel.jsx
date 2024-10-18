import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className=" mt-[5%] mx-[10%]">
        <div className=" bg-white/10 pt-[7%] px-20 h-[30dvh] text-center">
          <h1 className=" text-2xl text-white font-semibold">DoubleACloud made the entire visa process incredibly smooth and stress-free. Their constant support, professionalism, and knowledge were invaluable. I highly recommend their services to anyone pursuing their study abroad dreams!</h1>
          <p className=" text-white/80 pt-6">—— Alawiye Oyewole, MSc Criminology, Anglia Ruskin University —— </p>
        </div>
        <div className=" bg-white/10 pt-[7%] px-20 h-[30dvh] text-center">
          <h1 className=" text-2xl text-white font-semibold">Thanks to DoubleACloud’s expert guidance, I successfully gained admission to DeMontfort University. Their support made the process incredibly easy and stress-free. I couldn’t have done it without their help!</h1>
          <p className=" text-white/80 pt-6">—— Emmanuel Adebowale, DeMontfort University, Leicester ——</p>
        </div>
        <div className=" bg-white/10 pt-[7%] px-20 h-[30dvh] text-center">
          <h1 className=" text-2xl text-white font-semibold">DoubleACloud took care of my entire application process from start to finish, saving me significant time and effort. Their expert team ensured everything was perfectly handled. I am truly grateful!</h1>
          <p className=" text-white/80 pt-6">—— Chinenye Nwakeze, Liverpool ——</p>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;