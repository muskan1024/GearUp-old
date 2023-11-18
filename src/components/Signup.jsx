import React from "react";

function Signup() {
  return (
    <div className="w-full h-screen flex item-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[9%] flex flex-col">
          {/* <h1 className='text-4x1 text-white font-bold my-4'>Welcome!!</h1> */}
          {/* <p className='text-x1 text-white font-normal'>To The Perfect Solution for Your Machine</p> */}
        </div>
        <img
          src="https://images.unsplash.com/photo-1522598140461-ec9911e01c53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BhcmUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full bg-white flex flex-col p-16 justify-between items-center">
        {/* <h1 className="text-3xl text-red-600 font-bold"> GearUp</h1> */}
        <img
          src="public\WhatsApp Image 2023-11-11 at 5.23.40 PM.jpeg"
          height={"170px"}
          width={"200px"}
          className="-mt-9 m-6"
        />

        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">SignUp</h3>
            <p className="text-base mb-2">
              Welcom Back! Please enter your details.
            </p>
          </div>

          <div className="grid grid-flow-cols grid-cols-2 gap-6">
            <div className="flex flex-col ">
              <label>First name</label>
              <input
                type="text"
                placeholder="Enter your First name"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Last name</label>
              <input
                type="text"
                placeholder="Enter your Last name"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Phone number</label>
              <input
                type="text"
                placeholder="Enter your Phone number"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Email-Id</label>
              <input
                type="email"
                placeholder="Enter your Email-ID"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Password</label>
              <input
                type="Password"
                placeholder="Enter your Password"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Confirm password</label>
              <input
                type="Password"
                placeholder="Confirm your Password"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-center my-4">
            <button className="w-[50%] text-white my-2 bg-red-600 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Sign up
            </button>
          </div>

          <div className=" flex items-center justify-center relative py-2">
            <div className="w-3/4 h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-white">or</p>
          </div>
          <div className="flex justify-center my-4">
            <div className="w-[50%] text-black font-semibold bg-white border-2 border-black/40 rounded-md p-4 flex justify-center cursor-pointer">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                className="h-6 mr-2"
              />
              Sign up with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
