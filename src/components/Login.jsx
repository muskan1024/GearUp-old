import React from "react";

const colors = {
    Primary: "#060606",
    background: "#E0E0E0",
    disabled: "#D9D9D9"
}

const Login = () => {
    return(
        <div className="w-full h-screen flex item-start">
            <div className='relative w-1/2 h-full flex flex-col'>
                <div className="absolute top-[20%] left-[9%] flex flex-col">
                   {/* <h1 className='text-4x1 text-white font-bold my-4'>Welcome!!</h1> */}
                   {/* <p className='text-x1 text-white font-normal'>To The Perfect Solution for Your Machine</p> */}
                </div>
                 <img src="https://images.unsplash.com/photo-1611633235555-45e252fe48c8?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwcGFydHN8ZW58MHx8MHx8fDA%3D" className= "w-full h-full object-cover" />
            </div>
            <div className="w-1/2 h-full bg-white flex flex-col p-20 justify-between items-center">
                    {/* <h1 className="text-3xl text-red-600 font-bold"> GearUp</h1> */}
                    <img src="public\WhatsApp Image 2023-11-11 at 5.23.40 PM.jpeg" height={"170px"} width={"200px"} className="-mt-9 m-6" />


                    <div className="w-full flex flex-col max-w-[500px]">
                        <div className="w-full flex flex-col mb-2">
                        <h3 className="text-3xl font-semibold mb-2">Login</h3>
                        <p className="text-base mb-2">Welcom Back! Please enter your details.</p>
                        </div>

                        <div className="w-full flex flex-col">
                            <input 
                            type="email"
                            placeholder="Email"
                            className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"/>


                            <input 
                            type="password"
                            placeholder="Password"
                            className="w-full text-black py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"/>
                        </div>

                        <div className="w-full flex items-centre justify-between">
                            <div className="w-full flex items-center">
                                <input type="checkbox" className="w-4 h-4 mr-2"/>
                                <p className="text-sm">Remeber me for 30 days</p>
                            </div>

                            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forget Password ?</p>
                        </div>

                        <div className="w-full flex flex-col my-4">
                            <button className="w-full text-white my-2 bg-red-600 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                                Log in
                            </button>

                            <button className="w-full text-black my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                                Register
                            </button>
                        </div>

                        <div className="w-full flex items-center justify-center relative py-2">
                            <div className="w-full h-[1px] bg-black"></div>
                                <p className="text-lg absolute text-black/80 bg-white">or</p>     
                        </div>
                        <div className="w-full text-black my-2 font-semibold bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                            <img src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' className="h-6 mr-2" />
                                Sign in with Google
                            </div>
                    </div>

                    <div className="w-full flex items-center justify-center" >
                        <p className="text-sm font-normal text-black">
                        Don't have account?<span className="font-semibold underline underline-offset-2 cursor-pointer"> Sign up for free.</span>
                        </p>
                    </div>
                    </div>
            
        </div>
    )
}

export default Login;