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
        // placeholder="Search Spare Parts or Services"
        label="Search Spare Parts or Services"
        InputProps={{
          inputProps: {
            style: {},
          },
          style: {
            outline: "none",
            borderRadius: 30,
            boxShadow: "3px 3px 3px grey",
            // backgroundColor: "lightgray",
            color: "black",
          },
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="start">
              <button className="bg-red-500 rounded-full p-4 -mt-4 -mr-5 hover:bg-red-600 ">
                <Search style={{ color: "white", fontSize:"25px" }} />
              </button>
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <Box className="grid grid-cols-3 gap-8 justify-items-center justify-self-end font-semibold">
        <Box>
          <PersonOutline className="hover:text-blue-600"/>
          <h2>Sign</h2>
        </Box>
        <Box>
          <ShoppingCartOutlined />
          <h5>Cart</h5>
        </Box>
        <Box>
          <FavoriteBorder/>
          <h5>Like</h5>
        </Box>
      </Box>
    </div>
    <div className="grid grid-flow-col text-xl justify-around p-2 font-serif  bg-gray-300">
      <h1>Repair Parts</h1>
      <h1>Body Parts</h1>
      <h1>Oils & Fluids</h1>
      <h1>Wheels & Tiers</h1>
      <h1>Lighting</h1>
      <h1>Electronics</h1>
      <h1>Interior</h1>
      <h1>Exterior</h1>
      <h1>Tools & Garage</h1>
    </div>
    </>
  );
}

export default NavBar;
