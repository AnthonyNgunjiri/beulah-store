import React, { useState } from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { BiSolidUserAccount } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navigation() {
  const [menu, setmenu] = useState("Home");
  return (
    <div className="main-nav">
      <div id="access">
        <AiOutlineMenuUnfold />
        Quick access
      </div>
      <ul className="nav">
        <li
          onClick={() => setmenu("Home")}
          className="ruto"
          id={menu === "Home" ? "list" : ""}
        >
          <Link to="/">
            <FaHome />
            Home{" "}
          </Link>
        </li>
        <li
          onClick={() => setmenu("Categories")}
          className="ruto"
          id={menu === "Categories" ? "list" : ""}
        >
          <Link to="/Categories">
            <BiCategory />
            Categories
          </Link>
        </li>
        <li
          onClick={() => setmenu("Cart")}
          className="ruto"
          id={menu === "Cart" ? "list" : ""}
        >
          <Link to="/Cart">
            <BsCart4 />
            Cart{" "}
          </Link>
        </li>
        <li
          onClick={() => setmenu("Account")}
          className="ruto"
          id={menu === "Account" ? "list" : ""}
        >
          <Link to="/Account">
            <BiSolidUserAccount />
            Account{" "}
          </Link>
        </li>
      </ul>
      <input type="text" placeholder="   search product" />
    </div>
  );
}

export default Navigation;
