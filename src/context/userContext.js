import { createBox } from "@mui/system";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../hooks/instance";
import { useForm } from "../hooks/useForm";
const userContext = createContext();
export const useUserContext = () => useContext(userContext);
export  const UserContextProvider = ({ children }) => {
    

const {setValues,setErrors,setLoading,values} = useForm();
const navigate = useNavigate();




 const register = async (values) => {
       
        try {
          const { data } = await instance.post(
            "/users/register/",
            values
            // JSON.stringify({ values }),
            // {
            //   headers: { "Content-Type": "application/json" },
            //   withCredentials: true,
            // }
          );
          localStorage.setItem("token", data.token);
          localStorage.setItem("refresh_token", data.refreshToken);
          setLoading(true);
          navigate("/profile");
          setValues(data.user);
        } catch (err) {
          setErrors("Registration Failed");
        }
      };

  
  return (
 
    <userContext.Provider value={{register}}>
      {children} 
    </userContext.Provider>
  );
};
