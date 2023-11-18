import {
  FavoriteBorder,
  PersonOutline,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi'

function NavBar() {
  const[open, setOpen] = useState(true)
  return (
    <>
      <div className="text-center grid grid-cols-2 md:grid-cols-4 p-3 shadow-md gap-2">
        <img
          className=""
          src="public\GearUp_logo1-removebg-preview.png"
          alt=""
          srcset=""
          height={"150px"}
          width={"150px"}
        />
        <Box className="md:hidden grid grid-cols-3 gap-4 justify-items-center justify-self-end font-russo text-sm text-center" >
          <Box>
            <Link to="/login">
              <PersonOutline
                className="hover:text-[#F50500]"
                sx={{ fontSize: "30px" }}
              />
              <h2>Sign</h2>
            </Link>
          </Box>
          <Box>
            <ShoppingCartOutlined
              className="hover:text-[#F50500]"
              sx={{ fontSize: "30px" }}
            />
            <h5>Cart</h5>
          </Box>
          <Box>
            <FavoriteBorder
              className="hover:text-[#F50500]"
              sx={{ fontSize: "30px" }}
            />
            <h5>Like</h5>
          </Box>
        </Box>
        {/* <FiMenu className="sm:hidden block h-6 w-6  cursor-pointer justify-self-end" onClick={() => setOpen(!open)}/> */}
        <div className="col-span-2 md:col-span-2">
          <TextField  
            fullWidth 
            id=""
            label="Search Spare Parts or Services"
            InputProps={{
              style: {
                outline: "none",
                borderRadius: 30,
                boxShadow: "3px 3px 3px grey",
                color: "black",
              },
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="start">
                  <button className="bg-[#F50500] rounded-full p-4 -mt-4 -mr-5 hover:bg-black ">
                    <Search style={{ color: "white", fontSize: "25px" }} />
                  </button>
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
          </div>
        <Box className="hidden md:grid grid-cols-3 gap-8 justify-items-center justify-self-end font-russo text-md text-center" >
          <Box>
            <Link to="/login">
              <PersonOutline
                className="hover:text-[#F50500]"
                sx={{ fontSize: "35px" }}
              />
              <h2>Sign</h2>
            </Link>
          </Box>
          <Box>
            <ShoppingCartOutlined
              className="hover:text-[#F50500]"
              sx={{ fontSize: "35px" }}
            />
            <h5>Cart</h5>
          </Box>
          <Box>
            <FavoriteBorder
              className="hover:text-[#F50500]"
              sx={{ fontSize: "35px" }}
            />
            <h5>Like</h5>
          </Box>
        </Box>
      </div>
      <div className=" grid-flow-col xl:text-xl lg:text-md lg:grid justify-around p-2 font-russo bg-gray-200 hidden  xl:grid">
        <h1 className="hover:text-[#F50500] hover:underline">Repair Parts</h1>
        <h1 className="hover:text-[#F50500]">Body Parts</h1>
        <h1 className="hover:text-[#F50500]">Oils & Fluids</h1>
        <h1 className="hover:text-[#F50500]">Wheels & Tiers</h1>
        <h1 className="hover:text-[#F50500]">Lighting</h1>
        <h1 className="hover:text-[#F50500]">Electronics</h1>
        <h1 className="hover:text-[#F50500]">Interior</h1>
        <h1 className="hover:text-[#F50500]">Exterior</h1>
        <h1 className="hover:text-[#F50500]">Tools & Garage</h1>
      </div>
    </>
  );
}

export default NavBar;
