import React from "react";

const GameStat = ({ title, className }) => {
  return <p className={`text-2xl pt-7 pb-7 ${className}`}>{title}</p>;
};

export default GameStat;
