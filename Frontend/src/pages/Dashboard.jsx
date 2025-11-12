import React from "react";
import "../styles/Dashboard.css";
import Cards from "../components/Cards";
import dashboard_logo from "../assets/dashboard-monitor.png";
import users_logo from "../assets/circle-user.png";
import orders_logo from "../assets/order-history.png";
import settings_logo from "../assets/function-process.png";
import RevenueChart from "../components/RevenueChart";

const metrics = [
  {
    icon: users_logo,
    title: "Total Users",
    value: 1245,
    subtext: "+12 new today",
  },
  {
    icon: orders_logo,
    title: "Total Orders",
    value: 552,
    subtext: "3 pendings",
  },
  {
    icon: settings_logo,
    title: "Revenue",
    value: "$1,20,540",
    subtext: "5% last week",
  },
  {
    icon: dashboard_logo,
    title: "Pending Request",
    value: 14,
    subtext: "Needs attention",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      {/* {Cards Section - Summary Stats} */}
      <div className="top-cards">
        {metrics.map((item) => (
          <Cards
            key={item.title}
            icon={item.icon}
            title={item.title}
            value={item.value}
            subtext={item.subtext}
          />
        ))}
      </div>

        {/* Charts Section - Graphs / Visuals */}
      <div className="chart-section">
    
         <RevenueChart/>
      
       
      </div>


        {/* Table Section - Recent Activitites 
      <div>
        <h2>Recent Orders</h2>
        <div>
          Table of latest orders or users
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
