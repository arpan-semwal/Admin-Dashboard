import api from "./axiosInstance";

export const fetchOrders = async () => {
    const res = await api.get("/carts");
    return res.data;
}