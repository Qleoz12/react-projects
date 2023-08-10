import React from "react";

export const ButtomMap = ({ title, icon, py, px }) => {
  return (
    <button className={`bg-green-700  text-white py-2 px-3`}>
      <h3>{title}</h3>
    </button>
  );
};
