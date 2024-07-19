import React from "react";
import { BsTelegram, BsTwitterX } from "react-icons/bs";
import CopyAddress from "./CopyAddress";

function Hero() {
  return (
    <section className="hero-main     ">
      <div className=" container-wrapper pt-[25%] sm:pt-[1%]  overflow-hidden relative">
        <div>
          <h2 className=" text-center text-white font-bold">Welcome To</h2>
          <img
            src="images/hero-txt.png"
            alt=""
            className=" mx-auto h-auto sm:h-[200px] w-auto "
            data-aos="zoom-in-up"
          data-aos-duration="1500"
          />
          {/* <a href="/" className="text-sm sm:text-2xl font-bold text-center flex justify-center my-4"> </a> */}
        </div>
        <img
          src="images/hero4.png"
          alt=""
          className=" mx-auto h-auto sm:h-[350px] floating"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        />

        <div className=" relative sm:absolute top-[30%] left-[5%] "  data-aos="zoom-in-right"
          data-aos-duration="1500">
          <div className=" flex flex-col justify-center items-center gap-4 w-full max-w-full sm:max-w-[250px] mx-auto py-4">
            <div className=" h-8 w-[1px] bg-white hidden sm:block"></div>
            <a
              href="https://www.dextools.io/app/en/"
              className=" mx-auto font-dream box-s2  text-lg text-white bg-[#000000] hover:bg-[#1a4093] rounded-full p-1 px-2 border-2 border-[#8d4df9]  hover:text-[#fff] text-center font-bold uppercase"
            >
              {" "}
              <img src="/images/dex.png" alt="" className=" h-[30px] w-auto" />
            </a>
            <a
              href="https://t.me/PurplePepe_sol"
              className=" mx-auto font-dream box-s2  text-3xl text-white bg-[#000000] hover:bg-[#1a4093] rounded-full p-1 border-2 border-[#8d4df9]  hover:text-[#fff]  text-center font-bold uppercase"
            >
              {" "}
              <BsTelegram />{" "}
            </a>
            <a
              href="https://x.com/PurplePepe_Sol"
              className=" mx-auto font-dream box-s2  text-lg text-white bg-[#000000] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#8d4df9]  hover:text-[#fff] text-center font-bold uppercase"
            >
              {" "}
              <BsTwitterX />{" "}
            </a>
            <div className=" h-8 w-[1px] bg-white hidden sm:block"></div>
          </div>
        </div>

        <div  data-aos="zoom-in-up"
          data-aos-duration="1500" className=" flex mt-4 mb-2 items-center justify-center gap-2  relative z-20 py-1 bg-black border-t-2 border-l-2 border-r-2 border-[#8d4df9] rounded-2xl w-full max-w-full sm:max-w-xl px-4 mx-auto">
          <CopyAddress />{" "}
          <button className="copy">
            <span
              data-text-end="Copied!"
              data-text-initial="Copy to clipboard"
              className="tooltip"
            ></span>
            <span>
              <svg
                xmlSpace="preserve"
                id="tgt"
                viewBox="0 0 6.35 6.35"
                y="0"
                x="0"
                height="20"
                width="20"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="clipboard"
              >
                <g>
                  <path
                    fill="#fff"
                    d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                  ></path>
                </g>
              </svg>
              <svg
                xmlSpace="preserve"
                id="tgt"
                viewBox="0 0 24 24"
                y="0"
                x="0"
                height="18"
                width="18"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="checkmark"
              >
                <g>
                  <path
                    data-original="#fff"
                    fill="currentColor"
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>

        <p
         data-aos="zoom-in-up"
          data-aos-duration="1500"
        className=" text-center font-medium text-sm sm:text-xl py-2 text-white max-w-full sm:max-w-[750px] mx-auto">
          Welcome to Purple Pepe. The only true OG Pepe on Solana. Purple Pepe:
          From Zero to Lambo Hero, making Solana great again - 1000x Profit for
          all.
          Driven by unity and strength, the Purple Pepe community aims for financial freedom. With $PUPE leading the way, join the movement.
        </p>
      </div>
    </section>
  );
}

export default Hero;
