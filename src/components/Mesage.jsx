import React from "react";

const Mesage = ({ title, className }) => {
  return <p className={`text-white text-4xl pt-5 ${className}`}> {title} </p>;
};

export default Mesage;
