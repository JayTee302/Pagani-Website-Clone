import React from "react";
import Button from "./Button";
import Background from "./Background";
import SideNavbar from "./SideNavbar";
import Button2 from "./Button2";
import "./App.css";

const App = () => {
  const paganiImage = require("./assets/pagani.png").default;

  return (
    <header className="header_1">
    <div className="app">
      <div className="image-container">
        <img src={paganiImage} alt="Pagani" className="centered-image" />
      </div>
      <>
      <Button />
      <Background />
      <SideNavbar />
      <Button2 />
      </>
    </div>
    </header>
  );
};

export default App;

