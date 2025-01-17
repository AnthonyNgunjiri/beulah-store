import React, { useState } from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { BiCategory, BiSolidUserAccount } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
// import { BiSolidUserAccount } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navigation() {
  const [menu, setmenu] = useState("Home");
  return (
    <div className="main-nav">
      <div className="access" onClick={() => setmenu("Categories")}
         
          id={menu === "Quick access" ? "list" : ""} >
        <Link to="/Signin">
        <AiOutlineMenuUnfold />
        Quick access
           
          </Link>
       
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
          onClick={() => setmenu("Signup")}
          className="ruto"
          id={menu === "Signup" ? "list" : ""}
        >
          <Link to="/Signup">
            <BiSolidUserAccount />
            Signup{" "}
          </Link>
        </li>
      </ul>
      <input type="text" placeholder="   search product" />
    </div>
  );
}

export default Navigation;
