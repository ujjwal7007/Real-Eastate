import React, { useState } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <BsFillHouseFill />
            Real
          </span>
          Estate
        </h1>
        <button className="btn">Sign In</button>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <RiMenuFoldLine className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
