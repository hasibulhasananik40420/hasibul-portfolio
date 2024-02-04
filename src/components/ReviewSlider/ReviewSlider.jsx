"use client";
import man1 from "@/assets/man1.jpg";
import man2 from "@/assets/man2.jpg";
import women4 from "@/assets/women4.jpg";
import women5 from "@/assets/women5.jpg";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

const ReviewSlider = () => {
    const sliderRef = useRef(null);
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  
  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <div className="flex justify-end gap-1 mb-6">
        <span onClick={handlePrevClick} className="size-12 flex justify-center items-center rounded bg-[#162033] border-[0.5px] border-[#2C304A]  hover:cursor-pointer duration-300">
          <IoIosArrowRoundBack className="size-8 text-textDark" />
        </span>

        <span onClick={handleNextClick} className="size-12 flex justify-center items-center rounded bg-[#162033] border-[0.5px] border-[#2C304A]  hover:cursor-pointer duration-300">
          <IoIosArrowRoundForward className="size-8 text-textDark" />
        </span>
      </div>

        <Slider {...settings} ref={sliderRef}>


        <div className="lg:w-[600px] w-full  bg-[#162033] border-[0.5px] border-[#2C304A] lg:p-10 md:p-10 p-6 shadow-md rounded-md">
          <div className="">
            <div className="md:flex gap-8 items-center">
              <Image
                className="lg:size-16 md:size-24 size-16 rounded-full ring-4 ring-offset-textGreen"
                src={man1}
                alt="man image"
                placeholder="blur"
              />

              <span>
                <h1 className="lg:text-[24px] md:text-[32px] text-[20px] mt-4 md:mt-0 text-white font-Exo font-bold tracking-[0.5px]">
                  Jams Smith
                </h1>
                <p className="lg:text-[14px] md:text-[20px] text-[12px] text-textDark font-Montserrat font-normal ">
                  Product Designer at CodeNext
                </p>
              </span>
            </div>

           
          </div>

          <p className="text-[18px] text-textDark font-Montserrat font-normal leading-8 mt-10">
            We are motivated by the satisfaction of our clients. Put your trust
            in us and share in our growth Asset Management is made up of a team
            of expert, committed and experienced people with a passion for
            financial markets. Our goal is to achieve continuous.
          </p>
        </div>

           <div className="lg:w-[600px] w-full  bg-[#162033] border-[0.5px] border-[#2C304A] lg:p-10 md:p-10 p-6 shadow-md rounded-md">
          <div className="">
            <div className="md:flex gap-8 items-center">
              <Image
                className="lg:size-16 md:size-24 size-16 rounded-full ring-4 ring-offset-textGreen"
                src={women4}
                alt="man image"
                placeholder="blur"
              />

              <span>
                <h1 className="lg:text-[24px] md:text-[32px] text-[20px] mt-4 md:mt-0 text-white font-Exo font-bold tracking-[0.5px]">
                  Helana Niro
                </h1>
                <p className="lg:text-[14px] md:text-[20px] text-[12px] text-textDark font-Montserrat font-normal ">
                  Graphic Designer at Stamfrod
                </p>
              </span>
            </div>

            
          </div>

          <p className="text-[18px] text-textDark font-Montserrat font-normal leading-8 mt-10">
            Put your trust
            in us and share in our growth Asset Management. We are motivated by the satisfaction of our clients.  is made up of a team
            of expert, committed and experienced people with a passion for
            financial markets. Our goal is to achieve continuous.
          </p>
        </div>

      <div className="lg:w-[600px] w-full  bg-[#162033] border-[0.5px] border-[#2C304A] lg:p-10 md:p-10 p-6 shadow-md rounded-md">
          <div className="">
            <div className="md:flex gap-8 items-center">
              <Image
                className="lg:size-16 md:size-24 size-16 rounded-full ring-4 ring-offset-textGreen"
                src={man2}
                alt="man image"
                placeholder="blur"
              />

              <span>
                <h1 className="lg:text-[24px] md:text-[32px] text-[20px] mt-4 md:mt-0 text-white font-Exo font-bold tracking-[0.5px]">
                  Steven Ford
                </h1>
                <p className="lg:text-[14px] md:text-[20px] text-[12px] text-textDark font-Montserrat font-normal ">
                  Crative Marketer at Zollnet
                </p>
              </span>
            </div>

            
          </div>

          <p className="text-[18px] text-textDark font-Montserrat font-normal leading-8 mt-10">
           This is my satisfaction of our clients. Put your trust
            in us and share in our growth Asset Management is made up of a team
            of expert, committed and experienced people with a passion for
            financial markets. Our goal is to achieve continuous.
          </p>
        </div>


             <div className="lg:w-[600px] w-full  bg-[#162033] border-[0.5px] border-[#2C304A] lg:p-10 md:p-10 p-6 shadow-md rounded-md">
          <div className="">
            <div className="md:flex gap-8 items-center">
              <Image
                className="lg:size-16 md:size-24 size-16 rounded-full ring-4 ring-offset-textGreen"
                src={women5}
                alt="man image"
                placeholder="blur"
              />

              <span>
                <h1 className="lg:text-[24px] md:text-[32px] text-[20px] mt-4 md:mt-0 text-white font-Exo font-bold tracking-[0.5px]">
                  Carry Howel
                </h1>
                <p className="lg:text-[14px] md:text-[20px] text-[12px] text-textDark font-Montserrat font-normal ">
                  Web Developer at Examsoft
                </p>
              </span>
            </div>

            
          </div>

          <p className="text-[18px] text-textDark font-Montserrat font-normal leading-8 mt-10">
           I am motivated by the satisfaction of our clients. Put your trust
            in us and share in our growth Asset Management is made up of a team
            of expert, committed and experienced people with a passion for
            financial markets. Our goal is to achieve continuous.
          </p>
        </div>





      </Slider>
    </div>
  );
};

export default ReviewSlider;
