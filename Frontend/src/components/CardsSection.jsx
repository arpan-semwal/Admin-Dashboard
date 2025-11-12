import React from "react";
import Cards from "./Cards";
import "../styles/Dashboard.css";

const CardsSection = ({ stats }) => {
  return (
    <div className="top-cards">
      {stats.map((item) => (
        <Cards
          key={item.title}
          title={item.title}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default CardsSection;
