import { Grid, Typography } from "@mui/material";
import React from "react";

function Cate() {
  return (
    <>
      <h1 className="text-2xl text-center font-russo mb-5 lg:mb-16 mt-5">
        Shop By Categories
      </h1>
      <div className="grid gap-7 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 m-[2%] text-right text-lg justify-around xl:ml-[15%] xl:mr-[15%] font-rubik">
        <div className="relative row-span-2 col-span-2 shadow-xl hover:shadow-2xl hover:shadow-gray-400">
          <img src="public\cate_images\tiers.png" width={"440px"} alt="" srcset=""/>
          <h1 className="bg-[#F50500]  text-white   top-32 absolute right-0 p-2 ">Wheels & Tiers</h1>
        </div>
        <div className="relative shadow-xl hover:shadow-2xl">
          <img src="public\cate_images\repair-part.png"   alt="" srcset=""/>
          <h1 className="absolute bg-[#F50500] text-white top-12 right-0 p-2">Spare Parts</h1>
        </div>
        <div className="relative shadow-xl hover:shadow-2xl">
          <img src="public\cate_images\body-part.png"   alt="" srcset="" />
          <h1 className="absolute bg-[#F50500] text-white top-12 right-0 p-2">Body Parts</h1>
        </div>
        <div className="relative shadow-xl hover:shadow-2xl">
        <img src="public\cate_images\oil&fluids.png"  alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] text-white top-12 right-0 p-2">Oil & Fluids</h1>
        </div>
        <div className="relative shadow-xl hover:shadow-2xl">
        <img src="public\cate_images\lighting.png"  alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] text-white top-12 right-0 p-2">Lighting</h1>
        </div>
        <div className="relative shadow-xl hover:shadow-2xl">
        <img src="public\cate_images\electronics.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] text-white top-12 right-0 p-2">Electronics</h1>
        </div>
        <div className="relative shadow-xl hover:shadow-2xl">
        <img src="public\cate_images\interior.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] text-white top-12 right-0 p-2">Interior</h1>
        </div>
        <div className="relative shadow-xl hover:shadow-2xl">
        <img src="public\cate_images\exterior.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] text-white top-12 right-0 p-2">Exterior</h1>
        </div>
        <div className="relative shadow-xl hover:shadow-2xl">
        <img src="public\cate_images\tools&garage.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] text-white  top-12 right-0 p-2">Tools & Garage</h1>
        </div>
      </div>
    </>
  );
}

export default Cate;
