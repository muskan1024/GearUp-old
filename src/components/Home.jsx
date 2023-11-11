import React from "react";
import Typewriter from "typewriter-effect";
import Items from "./Items";
import NavBar from "./NavBar";

function Home() {
  return (
    <>
        <NavBar/>
      <div className="bg-gradient-to-b from-black from-50% to-white absolute">
        <img
          src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="opacity-20  w-screen h-screen bg-blend-screen z-10"
        />
      </div>
      <div className="text-8xl font-russo text-white relative p-20 grid grid-flow-cols grid-cols-2 gap-4 h-screen">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 150,
            strings: ["Driven by Quality, Powered by Service."],
          }}
          className="text-white "
        />
      </div>
      <Items/>
    </>
  );
}

export default Home;
