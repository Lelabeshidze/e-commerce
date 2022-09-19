import React, { useEffect, useState } from 'react'
import { instance } from '../hooks/instance';

const UseAxios = (url) => {
 const [isLoading, setIsLoading] = useState(false);
 const [data, setData] = useState(null);
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