import React from "react";
import { HiArrowNarrowRight, HiArrowNarrowDown } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


const Home = () => {

  const handleDownlaodPdf = () => {
    const url = '/public/cv.pdf';
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'cv.pdf';
    anchor.click();

  }

  return (
    <div
      name="home"
      className="w-full grid md:grid-cols-2 justify-center items-center min-h-screen bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] max-auto md:ml-24 px-8 flex flex-col justify-center  h-full">
        <p className="text-pink-600 md:text-xl mt-4 md:mt-4">Hi, my name is</p>
        <h1 className="md:text-[55px] my-4 text-xl font-bold text-[#ccd6f6]">
          <Typewriter
            options={{
              strings: ["Mohammad Sagor"],
              autoStart: true,
              loop: true,
              delay: 150,
            }}
          />
        </h1>
        <h2 className="md:text-4xl text-lg font-bold text-[#8892b0]">
          I'm a Jr.Frontend <br />
          React Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[500px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div className="flex  gap-x-4">
          <div className="hidden md:block">
            <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Hire Me
              <span className="">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>


              <button
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
                onClick={handleDownlaodPdf}
              >
                Downlaod CV
                <span className="">
                  <HiArrowNarrowDown className="ml-3 " />
                </span>
              </button>
        </div>
      </div>
      {/* for animation intro part */}

      <div
        className="
        w-full
        h-full
        mx-auto
        flex
        flex-col
        justify-center
        p-8
            "
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Player
          className="w-full md:w-4/6"
          autoplay
          loop
          src="https://assets1.lottiefiles.com/packages/lf20_ne6kcqfz.json"
        />
      </div>
    </div>
  );
};

export default Home;
