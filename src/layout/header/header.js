import React, { useState } from "react";
import { useUserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Navbar from "../navigation/Navbar";
const Header = () => {
  const { userData, logout } = useUserContext();
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate(`/profile/${userData.firstName}`, {
      state: { id: userData._id },
    });
  };
  return (
    <div className="Flex">
      <div className="Flex">
        <Link to="/">Home</Link>
        <Navbar />
      </div>
      <div className="Flex">
        {!userData ? (
          <>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </>
        ) : (
          <>
            <div>
              <Button onClick={navigateToProfile}>Profile</Button>
              <Button onClick={logout}>Log Out</Button>
            </div>
          </>
        )}

        <Link to="/cart">
          <HiOutlineShoppingCart />
        </Link>
      </div>
      </div>
  );
};

export default Header;
