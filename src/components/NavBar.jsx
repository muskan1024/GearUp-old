import {
  FavoriteBorder,
  PersonOutline,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <div className="grid grid-cols-3 p-3 shadow-md">
      <img
        src="public\GearUp_logo1-removebg-preview.png"
        alt=""
        srcset=""
        height={"150px"}
        width={"150px"}
      />
      <TextField
        id=""
        label="Search Spare Parts or Services"
        InputProps={{
          inputProps: {
            style: {},
          },
          style: {
            outline: "none",
            borderRadius: 30,
            boxShadow: "3px 3px 3px grey",
            color: "black",
          },
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="start">
              <button className="bg-[#F50500] rounded-full p-4 -mt-4 -mr-5 hover:bg-red-600 ">
                <Search style={{ color: "white", fontSize:"25px" }} />
              </button>
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <Box className="grid grid-cols-3 gap-8 justify-items-center justify-self-end font-russo text-md text-center">
        <Box >
          <Link to="/login">
          <PersonOutline className="hover:text-[#F50500]" sx={{fontSize:"35px"}}/>
          <h2>Sign</h2>
          </Link>
        </Box>
        <Box>
          <ShoppingCartOutlined className="hover:text-[#F50500]" sx={{fontSize:"35px"}}/>
          <h5>Cart</h5>
        </Box>
        <Box>
          <FavoriteBorder className="hover:text-[#F50500]" sx={{fontSize:"35px"}} />
          <h5>Like</h5>
        </Box>
      </Box>
    </div>
    <div className="grid grid-flow-col text-xl justify-around p-2 font-russo  bg-gray-200">
      <h1 className="hover:text-[#F50500]">Repair Parts</h1>
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