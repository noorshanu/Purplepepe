import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section className=" mt-4 border-t-2 border-purple-700  bg-[#171c22]  pb-2  " id="contact">
      <div className=" container-wrapper relative  ">
      

        <div className=" relative   px-[8%] mx-auto left-0 right-0 ">
          <div className=" flex justify-between items-center flex-col sm:flex-row">
            <div>
              <img src="images/foot.png" alt="" className=" h-[30px] sm:h-[110px] my-2 sm:my-8 sm:mx-0 mx-auto"  />

              <div className=" flex items-center gap-4 text-white mb-6 ml-5">
              <a
                  href="https://x.com/PurplePepe_Sol"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <BsTwitterX />
                </a>
             
           

                <a
                  href="https://t.me/PurplePepe_sol" target="_blank" rel="noreferrer"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <FaTelegram />
                </a>
              </div>

            <p className=" text-white">Copyright 2024 PurplePepe  All Rights Reserved.</p>
            </div>

            <div className=" mt-[5%]">
              <h1 className=" text-lg sm:text-3xl font-bold mb-4 text-center sm:text-start text-white">
                Don't miss our updates!
              </h1>
              <div className="flex items-center justify-between gap-8 bg-white border-[#000] border-2 rounded-lg px-2 py-2 w-[300px] mx-auto  sm:w-auto">
                <input type="text" />
                <button className=" text-xl bg-black text-white p-2 rounded-md">
                  <IoSend />
                </button>
              </div>

              <div className=" pt-[15%] grid sm:grid-cols-4 grid-cols-2 items-center gap-2 sm:gap-6  sm:justify-normal justify-center mx-auto ">
                <a
                  href="#about"
                  className="text-white font-bold text-lg block "
                >
                  About
                </a>
                <a
                  href="#col"
                  className="text-white font-bold text-lg block "
                >
                Tokenomics
                </a>
             
                <a
                  href="#contact"
                  className="text-white font-bold text-lg "
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
