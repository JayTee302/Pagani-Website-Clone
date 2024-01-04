import React from "react";
import "./Button.css";

const Button = ({ onClick }) => {
  return (
    <div className="container">
      <div className="paganiText">PAGANI 25TH ANNIVERSARY</div>
      <div className="credits">© 2023 Pagani S.P.A. - rights reserved - P.IVA 02054560368 - credits</div>
      <div className="scrollText">SCROLL DOWN</div>
      <div className="buttonGroup">
        <button className="discoverButton" onClick={onClick}>
          DISCOVER
        </button>
        <button className="eventButton" onClick={onClick}>
          EVENT
        </button>
      </div>
    </div>
  );
};

export default Button;
