import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchComponent from "../../components/search/SearchComponent";
import { instance } from "../../hooks/instance";


const  Search = () => {
  const [value, setValue] = useState("");
  const [searchResult,setSearchResult] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => {
      const filterByName = async () => {
        const { data } = await instance.get(`/products/search?name=${value}`);
        setSearchResult(data)
       
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
    navigate("/searchPage")
  }
  console.log(searchResult);
  return (
    <div>
        <TextField id="outlined-basic" label="search" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)} />
        <Button onClick={onClick}>Search</Button>
        <SearchComponent data={searchResult}/>
    </div>
  )
};

export default Search;
