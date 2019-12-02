import React from "react";
import { Link } from "react-router-dom";

import "./CSS/menu.css";
import logo from "./images/ow-logo.png";

const MainMenu = () => {
  return (
    <div className="menu">
      {/* header start */}
      <div className="menu-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/* header end */}

      {/* menu list start */}
      <div className="menu-list">
        <nav>
          <ul className="list-items">
            <li className="top-names">
              <Link to="/play">PLAY</Link>
            </li>
            <li className="top-names">
              <Link to="/training">TRAINING</Link>
          </li>
            <li className="top-names">
              <Link to="/gallery">HERO GALLERY</Link>
            </li>
            <li className="top-names">
              <Link to="/lootbox">LOOT BOX</Link>
            </li>
            <li className="bottom-names">
              <Link to="">OVERWATCH LEAGUE</Link> {/* add OWL href */}
            </li>
            <li className="bottom-names">
              <Link to="/highlights">HIGHLIGHTS</Link>
            </li>
            <li className="bottom-names">
              <Link to="/social">SOCIAL</Link>
            </li>
            <li className="bottom-names">
              <Link to="/career">CAREER PROFILE</Link>
            </li>
            <li className="bottom-names">
              <Link to="/options">OPTIONS</Link>
            </li>
            <li className="bottom-names">
              <Link to="/exit">EXIT GAME</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* menu list end */}
    </div>
  );
};

export default MainMenu;
