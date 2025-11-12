import api from "./axiosInstance";

export const fetchProducts = async() => {
    const res = await api.get("/products");
    return res.data;
}