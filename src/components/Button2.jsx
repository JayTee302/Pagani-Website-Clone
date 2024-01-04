import React from "react";
import "./Button2.css";

const Button2 = () => {
  return (
    <div className="scroll-invitation__container">
      <svg
        className="scroll-invitation__svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 42"
        width="24px"
        height="42px"
      >
        <path d="M2,12H2V30a10,10,0,0,0,20,0V12A10,10,0,0,0,2,12ZM0,12a12,12,0,0,1,24,0V30A12,12,0,0,1,0,30V12Z"></path>
        <path className="scroll-invitation__svg-line" d="M11,7v4a1,1,0,0,0,2,0V7a1,1,0,0,0-2,0Z"></path>
      </svg>
    </div>
  );
};

export default Button2;
