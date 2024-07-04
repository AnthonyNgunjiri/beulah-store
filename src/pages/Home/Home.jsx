import React from "react";
import "./home.css";
import Hola from "./Hola";
import cat from "../../assets/electronic.jpeg"
import jewel from "../../assets/jewel.jpeg"
import clothing from "../../assets/clothing.jpeg"
import shoes from "../../assets/shoes.jpeg"
import food from "../../assets/trolley.jpeg"
function Home() {
  return (
    <div className="main">
        <div className="hero">
      <section className="hero-description">
        <section className="head">
          <h2 className="heading">
            Beulah Store <br />
            Shop at your doorstep
          </h2>
          <p>
            Try our exquisite products with quality brands Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
        </section>

        <section className="btn">
          <button id="but">Sign up</button>
        </section>
      </section>
      </div>
      <h1 className="madango">Top Categories</h1>
      <div className="cat">
        <section>
        <Hola image={<img src={cat}/>} title= "electronics" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus ipsa eaque incidunt " />
        </section>
        <section>
        <Hola image={<img src={jewel}/>} title= "jewelleries" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus ipsa eaque incidunt " />
        </section>
        <section>
        <Hola image={<img src={clothing}/>} title= "outfits" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus ipsa eaque incidunt " />
        </section>
        <section>
        <Hola image={<img src={shoes}/>} title= "footwears" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus ipsa eaque incidunt " />
        </section>
        <section>
        <Hola image={<img src={food}/>} title= "victuals" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus ipsa eaque incidunt " />
        </section>

      </div>
      <h1 className="madango">sale offers</h1>
      <section className="cat">
      <div className="item">
        <div className="image"></div>
        <div className="detail">
          <h4>spices up &#9733;&#9733; &#9733;&#9733; &#9733;&#9733;&#9733;</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, unde!</p>
          <h4>$90</h4>
        </div>
      </div>
      <div className="item">
        <div className="image1"></div>
        <div className="detail">
          <h4>foodstuff &#9733;&#9733; &#9733;&#9733; &#9733;&#9733;&#9733;</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, unde!</p>
          <h4>$90</h4>
        </div>
      </div>
      <div className="item">
        <div className="image2"></div>
        <div className="detail">
          <h4>garments &#9733;&#9733; &#9733;&#9733; &#9733;&#9733;&#9733;</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, unde!</p>
          <h4>$90</h4>
        </div>
      </div>
      <div className="item">
        <div className="image3"></div>
        <div className="detail">
          <h4>footwear &#9733;&#9733; &#9733;&#9733; &#9733;&#9733;&#9733;</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, unde!</p>
          <h4>$90</h4>
        </div>
      </div>
      <div className="item">
        <div className="image4"></div>
        <div className="detail">
          <h4>bracelets &#9733;&#9733; &#9733;&#9733; &#9733;&#9733;&#9733;</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, unde!</p>
          <h4>$90</h4>
        </div>
      </div>
      </section>
   
    </div>
  
  );
}

export default Home;
