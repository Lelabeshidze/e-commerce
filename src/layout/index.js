import React, { Children } from "react";
import Header from "./header/header";
import Navbar from "./navigation/Navbar";

const index = ({children}) => {
  return (
    <div>
     <Header/>
     <Navbar/>
     {children}
    </div>
  );
};

export default index;
