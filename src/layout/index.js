import React, { Children } from "react";
import Header from "./header/header";

const index = ({children}) => {
  return (
    <div>
     <Header/>
     {children}
    </div>
  );
};

export default index;
