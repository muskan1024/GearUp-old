import React from "react";
import Typewriter from "typewriter-effect";
import Items from "./Items";
import NavBar from "./NavBar";
import Cate from "./Cate";

function Home() {
  return (
    <>
      <NavBar />
      <div className="relative bg-gradient-to-b from-gray-900 from-40% to-transparent ">
        <img src="public\bg-img-2.jpg" alt="" className="opacity-20 w-screen" />
        <div className="absolute w-full top-0 text-3xl  sm:text-6xl lg:text-7xl xl:text-8xl font-russo text-white p-0 sm:p-5 grid grid-flow-cols grid-cols-2 gap-4 overflow-hidden">
          <div className="justify-self-stretch xl:p-20">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 250,
                strings: ["Driven by Quality, Powered by Service."],
              }}
              className="text-white"
            />
          </div>
          <div className="grid justify-items-center">
            <img
              src="public\gif.png"
              className="w-[150px] sm:w-[250px] lg:w-[400px] md:w-[300px] xl:w-[470px] "
              alt=""
              srcset=""
            />
            {/* <img
              src="public\output-onlinegiftools (2).gif"
              className=""
              alt=""
              srcset=""
            /> */}
            {/* <img src="public\GearUp-1--unscreen.gif"  className="-top-8" alt="" srcset="" /> */}
            <img
              src="public\GearUp-1--unscreen.gif"
              className="w-[90px] -mt-5 sm:w-[150px] sm:-mt-7 md:w-[200px] md:-mt-10 lg:-mt-16 lg:w-[300px] xl:w-[400px] "
              alt=""
              srcset=""
            />
            {/* <div className="bg-gradient-to-r from-black from-30% to-[#F50500] to-100%">
              <p className=" bg-blend-screen text-center font-rubik font-bold ">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 300,
                    strings: ["GearUp"],
                  }}
                />
              </p>
            </div> */}
            {/* <img src="https://cdni.iconscout.com/illustration/premium/thumb/car-repairing-service-8185907-6529883.png?f=webp" width={"1000px"} alt="" srcset="" /> */}
            {/* <img src="https://static.wixstatic.com/media/a59a36_6c7da64d6423493ab37d1afa706fb2cc~mv2.gif" alt="" srcset="" /> */}
          </div>
        </div>
      </div>
      <Cate />
    </>
  );
}

export default Home;
