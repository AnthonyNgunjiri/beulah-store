import React from "react";
import "./cate.css";
import gold  from "../../assets/gold.jpeg"
import clothings  from "../../assets/clothing.jpeg"
import perfume  from "../../assets/perfume.jpeg"
import shoes  from "../../assets/shoes.jpeg"
import electrons  from "../../assets/electronic.jpeg"
import victuals  from "../../assets/trolley.jpeg"
import drinks  from "../../assets/download.jpeg"
import detergents  from "../../assets/detergent.jpeg"
import Productdisplay from "../../components/productdisplay/Productdisplay";

function Categories() {
  return (
    <div className="man">
      <h2 id="bei">All Categories</h2>
      <div className="manee">
        <section className="top">
          <div><img src={gold} className="imagery"/></div>

          <button className="bton">view</button>
        </section>
      
        <section className="top">
          <div ><img src={perfume} className="imagery"/></div>

          <button className="bton">view</button>
        </section>
        <section className="top">
          <div ><img src={clothings} className="imagery"/></div>

          <button className="bton">view</button>
        </section>
        <section className="top">
          <div ><img src={shoes} className="imagery"/></div>

          <button className="bton">view</button>
        </section>
        <section className="top">
          <div><img src={electrons} className="imagery"/></div>

          <button className="bton">view</button>
        </section>
        <section className="top">
          <div ><img src={victuals} className="imagery"/></div>

          <button className="bton">view</button>
        </section>
        <section className="top">
          <div><img src={drinks} className="imagery"/></div>

          <button className="bton">view</button>
        </section>
        <section className="top">
          <div><img src={detergents} className="imagery"/></div>

          <button className="bton">view</button>
        </section>
      </div>
<hr />
      <h2 id="bei">All Products</h2>
      <div >
       <Productdisplay/>
      </div>
    </div>
  );
}

export default Categories;
