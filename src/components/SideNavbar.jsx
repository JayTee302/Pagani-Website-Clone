import React, { useState } from "react";
import "./SideNavbar.css";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidenav ${isOpen ? "active" : ""}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="menu">
        <ul>
          <li>25TH ANNIVERSARY</li>
          <li>HOME</li>
          <li>HISTORY</li>
          <li>HYPERCARS</li>
          <li>DEALERS</li>
          <li>GUIDED TOURS</li>
          <li>CONTACT</li>
          <li>JOB & STAGE OPPORTUNITIES</li>
          <li>PRESS ROOM</li>
          <li>BOOKSHOP</li>
          <li>CALENDARIO PAGANI</li>
          <li>PAGANI OFFICINA</li>
          <li>PAGANI STORE</li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
