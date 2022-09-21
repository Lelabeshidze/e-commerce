import decode from "jwt-decode";
export const getUser = () => {
    const token = localStorage.getItem("token");
    return token ? decode(token) : null;
};

export const isUserAdmin = () => {
    const user = getUser();
    if (!user) return null;
    return user.role.includes("admin");
}