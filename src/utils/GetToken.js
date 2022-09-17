import decode from "jwt-decode";
export const getUser = () => {
    const token = localStorage.getItem("token");
    return token ? decode(token) : null;
}