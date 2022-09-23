import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import { instance } from "../../hooks/instance";


const Search = () => {
  const [value, setValue] = useState("");
  const [searchResult,setSearchResult] = useState([]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      const filterByName = async () => {
        const { data } = await instance.get(`/products/search?name=${value}`);

      };
      if (value) {
        filterByName();
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [value]);
 
  return (
    <div>
        <TextField id="outlined-basic" label="search" variant="outlined" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
};

export default Search;
