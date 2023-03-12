import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const TagTemplate = () => {
  return (
    <div>
        <Header/>
      {" "}
      <main class="page">
        <div class="container">
          <div class="tag-template-content">
            <p class="tag-tamplate-p">Beef</p>
            <div class="boxes about-boxes">
              <Link to={"/singlerecipe"} class="box">
                <div class="img-1 img"></div>
                <h3>Carne Asada</h3>
                <p>Prep : 15min | Cook : 5min</p>
              </Link>
              <Link to={"/singlerecipe"} class="box">
                <div class="img-2 img"></div>
                <h3>Greek Ribs</h3>
                <p>Prep : 15min | Cook : 5min</p>
              </Link>
              <Link to={"/singlerecipe"} class="box">
                <div class="img-3 img"></div>
                <h3>Vegetable Soup</h3>
                <p>Prep : 15min | Cook : 5min</p>
              </Link>
              <Link to={"/singlerecipe"} class="box">
                <div class="img-4 img"></div>
                <h3>Banana Pancakes</h3>
                <p>Prep : 15min | Cook : 5min</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default TagTemplate;
