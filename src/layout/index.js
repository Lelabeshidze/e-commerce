import React, { Children } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Navbar from "./navigation/Navbar";

const index = ({children}) => {
  return (
    <div>
    
     <Header/>
     <Navbar/>
     {children}
     <Footer/>
    </div>
  );
};

export default index;
