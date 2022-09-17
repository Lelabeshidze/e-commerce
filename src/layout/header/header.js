import React from "react";
import { useUserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Header = () => {
  const { userData, logout } = useUserContext();
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
        ) : <Button onClick={logout}>Log Out</Button>}
      </nav>
    </div>
  );
};

export default Header;
