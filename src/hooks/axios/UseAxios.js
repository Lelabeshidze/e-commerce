import React, { useEffect, useState } from 'react'
import { instance } from '../instance';

const UseAxios = (url) => {
 const [data, setData] = useState([]);
 const [isLoading,setLoading] = useState(false)
 useEffect(() => {
 const  getData = async () => {
    const { data } = await instance.get(url);
    setData(data)
    setLoading(true)
 }
 getData();
 },[url]);
 return {
    data,
    setData,
    isLoading,
    setLoading
 };
}

export default UseAxios