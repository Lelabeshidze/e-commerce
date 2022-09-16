import { createContext, useContext, useState } from "react";
import { instance } from "../hooks/instance";
const userContext = createContext();
export const useUserContext = () => useContext(userContext);
export default function  UserContextProvider  ({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const register = async (userData) => {
    try {
      setLoading(true);
      const { data } = await instance.post("/users/register/", userData);
    } catch (error) {}
  };
  return (
    <userContext.Provider value={ register() }>
      {children}
    </userContext.Provider>
  );
};
