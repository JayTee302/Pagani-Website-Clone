import React from "react";
import "./Background.css";
import PaganiVideo from './assets/pagani.mp4';
import Button from "./Button";

const Background = () => {
  return (
    <header className="header_1">


 <div className="background">
      <video autoPlay loop muted className="video">
        <source src={PaganiVideo} type="video/mp4" />
      </video>
      <Button />
    </div>


    </header>
   
  );
};

export default Background;
