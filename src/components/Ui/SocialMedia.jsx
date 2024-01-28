import React from "react";
import Container from "../Shared/Container/Container";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiSkype } from "react-icons/tfi";

const SocialMedia = () => {
  return (
    <div className="bg-[#23263D]">
      <Container>
        <div className=" py-24 ">
          <p className="text-[18px] text-[#F2B95F] font-Montserrat font-normal leading-8">
            SOCIAL MEDIA
          </p>
          <h1 className="text-[46px] text-white mt-4 font-Exo font-bold leading-[56px] tracking-[0.5px]">
            Let’s Be Friends
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="xl:xl:w-[420px] lg:w-[390px] w-full lg:w-[390px] w-full h-[120px] flex justify-between items-center p-6 rounded-md border border-[#ffc576] hover:bg-[#ffc576] hover:cursor-pointer duration-300 group">
              <div>
                <h2 className="text-[32px] text-white font-Montserrat font-medium group-hover:text-[#28264D]">
                  Linkeding
                </h2>
                <p className="text-[#ffc576] text-[14px] font-Montserrat font-normal leading-8 group-hover:text-[#28264D]">
                  Professional social profile
                </p>
              </div>

              <div>
                <FaLinkedinIn className="text-[#5a90bd] size-16" />
              </div>
            </div>

            <div className="xl:w-[420px] lg:w-[390px] w-full h-[120px] flex justify-between items-center p-6 rounded-md border border-[#ffc576] hover:bg-[#ffc576] hover:cursor-pointer duration-300 group">
              <div>
                <h2 className="text-[32px] text-white font-Montserrat font-medium group-hover:text-[#28264D]">
                  Instagram
                </h2>
                <p className="text-[#ffc576] text-[14px] font-Montserrat font-normal leading-8 group-hover:text-[#28264D]">
                  Image base social communications
                </p>
              </div>

              <div>
                <FaInstagram className="text-[#5a90bd] size-16" />
              </div>
            </div>

            <div className="xl:w-[420px] lg:w-[390px] w-full h-[120px] flex justify-between items-center p-6 rounded-md border border-[#ffc576] hover:bg-[#ffc576] hover:cursor-pointer duration-300 group">
              <div>
                <h2 className="text-[32px] text-white font-Montserrat font-medium group-hover:text-[#28264D]">
                  Email
                </h2>
                <p className="text-[#ffc576] text-[14px] font-Montserrat font-normal leading-8 group-hover:text-[#28264D]">
                  hasibulhasan40420@gmail.com
                </p>
              </div>

              <div>
                <HiOutlineMail className="text-[#5a90bd] size-16" />
              </div>
            </div>

            <div className="xl:w-[420px] lg:w-[390px] w-full h-[120px] flex justify-between items-center p-6 rounded-md border border-[#ffc576] hover:bg-[#ffc576] hover:cursor-pointer duration-300 group">
              <div>
                <h2 className="text-[32px] text-white font-Montserrat font-medium group-hover:text-[#28264D]">
                  Twitter
                </h2>
                <p className="text-[#ffc576] text-[14px] font-Montserrat font-normal leading-8 group-hover:text-[#28264D]">
                  Random thoughts
                </p>
              </div>

              <div>
                <FaTwitter className="text-[#5a90bd] size-16" />
              </div>
            </div>

            <div className="xl:w-[420px] lg:w-[390px] w-full h-[120px] flex justify-between items-center p-6 rounded-md border border-[#ffc576] hover:bg-[#ffc576] hover:cursor-pointer duration-300 group">
              <div>
                <h2 className="text-[32px] text-white font-Montserrat font-medium group-hover:text-[#28264D]">
                  Facebook
                </h2>
                <p className="text-[#ffc576] text-[14px] font-Montserrat font-normal leading-8 group-hover:text-[#28264D]">
                  Top social profile
                </p>
              </div>

              <div>
                <FaFacebookF className="text-[#5a90bd] size-16" />
              </div>
            </div>

            <div className="xl:w-[420px] lg:w-[390px] w-full h-[120px] flex justify-between items-center p-6 rounded-md border border-[#ffc576] hover:bg-[#ffc576] hover:cursor-pointer duration-300 group">
              <div>
                <h2 className="text-[32px] text-white font-Montserrat font-medium group-hover:text-[#28264D]">
                  Skype{" "}
                </h2>
                <p className="text-[#ffc576] text-[14px] font-Montserrat font-normal leading-8 group-hover:text-[#28264D]">
                  Medium social profile
                </p>
              </div>

              <div>
                <TfiSkype className="text-[#5a90bd] size-16" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SocialMedia;
