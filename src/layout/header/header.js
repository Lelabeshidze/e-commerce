import React, { useState } from "react";
import { useUserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { HiOutlineShoppingCart } from "react-icons/hi";

import Search, { useSearchContext } from "../../components/search/Search";
import logo from "../../Images/Mobile Phones/logo.jpg"
const Header = () => {
  const { userData, logout } = useUserContext();
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate(`/profile/${userData.firstName}`, {
      state: { id: userData._id },
    });
  };
  const {searchResult,value,onClick,setValue} = useSearchContext();
  return (
    <div className="Flex Border">
      <Link  to="/">
       <img src={logo} className="Logo"/>
       </Link>
      <div className="Flex">
       
        <Link to="/">Home</Link>
        </div>
        <div className="Flex">
      <TextField
        id="outlined-basic"
        label="search"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={onClick}>Search</Button>
     </div>

      <div className="Flex">
        {!userData ? (
          <>
            <div className="Flex Padding">
              <Link to="/register"><Button variant="outlined">Sign Up</Button></Link>
              </div>
            <div className="Flex">
              <Link to="/login"><Button variant="outlined">Sign In</Button></Link>
              </div>
          </>
        ) : (
          <>
            <div className="Flex ">
              <div>
              <Button onClick={navigateToProfile} variant="outlined">Profile</Button>
              </div>
              <div className="MarginLeft">
              <Button onClick={logout} variant="outlined" >Log Out</Button>
              </div>
            </div>
          </>
        )}

        <Link to="/cart" className="CartLogo">
          <HiOutlineShoppingCart />
        </Link>
      </div>
      </div>
  );
};

export default Header;
