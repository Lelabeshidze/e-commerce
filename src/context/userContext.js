import { createBox } from "@mui/system";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../hooks/instance";
import { useForm } from "../hooks/useForm";
import { getUser } from "../utils/GetToken";


const userContext = createContext();
export const useUserContext = () => useContext(userContext);
export const UserContextProvider = ({ children }) => {
  const { setErrors } = useForm();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(() => {
    return getUser();
  });

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

      navigate(`/profile/${data.user.firstName}`, {
        state: { id: data.user._id },
      });
      setUserData(data.user);
    } catch (err) {
      setErrors("Registration Failed");
    }
  };

  const login = async (userInfo) => {
    try {
      const { data } = await instance.post("/users/login/", userInfo);
      localStorage.setItem("token", data.token);
      localStorage.setItem("refresh_token", data.refreshToken);
      setUserData(data.user);
      navigate(`/profile/${data.user.firstName}`, {
        state: { id: data.user._id },
      });
    } catch (err) {
      setErrors("Login Failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    setUserData(null);
    navigate("/");
  }
  return (
    <userContext.Provider value={{ register, userData, login,logout}}>
      {children}
    </userContext.Provider>
  );
};
