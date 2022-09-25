import { Button, TextField } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAxios from "../../hooks/axios/UseAxios";
import { instance } from "../../hooks/instance";


const searchContext =createContext();
export const useSearchContext = () => useContext(searchContext);
export const SearchContextProvider = ({children}) => {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => {
      const filterByName = async () => {
        const { data } = await instance.get(`/products/search?name=${value}`);
        setSearchResult(data);
        localStorage.setItem("data", JSON.stringify(data));
      };
      if (value) {
        filterByName();
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [value]);
  const onClick = () => {
    navigate("/searchResult");
  };
  

  return (
 
 <searchContext.Provider value={{searchResult,value,onClick, setValue}}>
  {children}
 </searchContext.Provider>

  );
};


