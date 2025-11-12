import React from "react";
import "../styles/Dashboard.css";

// Chart component for revenue visualization
import RevenueChart from "../components/RevenueChart";

// React Query imports for data fetching and caching
import { useQuery } from "@tanstack/react-query";

// API functions to fetch users, products, and orders data
import { fetchUsers } from "../api/users";
import { fetchProducts } from "../api/products";
import { fetchOrders } from "../api/orders";

// Reusable component to display top-level statistics in card format
import CardsSection from "../components/CardsSection";

function Dashboard() {
  /**
   * Fetch all required data using React Query.
   * Each query is cached and automatically updated when dependencies change.
   */

  // Fetch Users Data
  const { data: users, isLoading: loadingUsers } = useQuery({
    queryKey: ["users"], // Unique key for caching
    queryFn: fetchUsers, // API function to call
  });

  // Fetch Products Data
  const { data: products, isLoading: loadingProducts } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Fetch Orders Data
  const { data: orders, isLoading: loadingOrders } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  /**
   * If any of the API requests are still loading,
   * show a loading indicator to the user.
   */
  if (loadingUsers || loadingProducts || loadingOrders)
    return <div>Loading.....</div>;

  /**
   * Prepare summarized statistics for dashboard cards.
   * - Total Users: Number of user entries
   * - Total Products: Number of products
   * - Total Orders: Number of orders
   * - Revenue: Sum of all order totals
   */
  const stats = [
    {
      title: "Total Users",
      value: users?.total || users?.users?.length || 0, // Fallback for different API structures
    },
    {
      title: "Total Products",
      value: products?.total || products?.products?.length || 0,
    },
    {
      title: "Total Orders",
      value: orders?.total || orders?.orders?.length || 0,
    },
    {
      title: "Revenue",
      // Calculate total revenue from all orders
      value: "$" + (orders?.carts?.reduce((acc, c) => acc + c.total, 0) || 0),
    },
  ];

  return (
    <div className="dashboard">
      {/* ===== Top Summary Section ===== */}
      {/* Displays overall metrics like total users, products, orders, and revenue */}
      <CardsSection stats={stats} />

      {/* ===== Charts Section ===== */}
      {/* Contains all visual data representations (e.g., revenue trends) */}
      <div className="chart-section">
        <RevenueChart />
      </div>
    </div>
  );
}

export default Dashboard;
