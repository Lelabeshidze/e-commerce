import React, { useEffect, useState } from 'react'
import { instance } from '../instance';

const UseAxios = (url) => {
 const [data, setData] = useState([]);
 useEffect(() => {
 const  getData = async () => {
    const { data } = await instance.get(url);
    setData(data)
 }
 getData();
 },[url]);
 return {
    data,
 };
}

export default UseAxios