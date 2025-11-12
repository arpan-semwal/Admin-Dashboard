import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";


const data = [
    {month:"Jan" , revenue:4000},
    {month:"Feb" , revenue:3000},
    {month:"Mar" , revenue:5000},
    {month:"Apr" , revenue:4780},
    {month:"May" , revenue:5890},
    {month:"Jun" , revenue:6390},
    {month:"Jul" , revenue:7490},
  
]


const RevenueChart = () => {
  return (
    <div className="revenue-chart">
        <h3>Monthly Revenue</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} barSize={40}  barCategoryGap="40%">
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
                <XAxis dataKey="month"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="revenue" fill="#4f46e5" radius={[8,8,0,0]}/>
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
};

export default RevenueChart;
