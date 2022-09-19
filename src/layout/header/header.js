import React, { useState } from "react";
import { useUserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const Header = () => {
  const { userData, logout } = useUserContext();
  const navigate = useNavigate();
  const navigateToProfile = () => {
    navigate(`/profile/${userData.firstName}`,{
      state: {id: userData._id},
    })
  }
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br />
        {!userData ? (
          <>
            <Link to="/register">Sign Up</Link>
            <br />
            <Link to="/login">Sign In</Link>
          </>
        ) : 
        <>
        <Button onClick={navigateToProfile}>Profile</Button>
        <Button onClick={ logout } >Log Out</Button> 
        </>}
      </nav>
    </div>
  );
};

export default Header;
