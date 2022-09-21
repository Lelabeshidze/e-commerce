import axios from "axios";
import decode from "jwt-decode";

export const instance = axios.create({
  baseURL: "http://localhost:3001/",
})
instance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refresh_token");
  if (!token) return req;

  req.headers.Authorization = `Bearer ${token}`;
  const expirationDate = decode(token).exp;
  const isExpired = expirationDate * 1000 < new Date().getTime();

  if (!isExpired) return req;
  const response = await axios.post("http://localhost:3001/users/refresh", {
    refresh_token: refreshToken,
  });
  localStorage.setItem("token", response.data.token);
  req.headers.Authorization = `Bearer ${response.data.token}`;
  return req;
});
