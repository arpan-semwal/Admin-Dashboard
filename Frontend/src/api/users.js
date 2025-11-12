import api from "./axiosInstance";

export const fetchUsers = async () => {
    const res = await api.get("/users");
    return res.data;
}