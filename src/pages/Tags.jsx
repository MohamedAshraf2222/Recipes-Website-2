import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Tags = () => {
  return (
    <div>
      <Header />{" "}
      <main class="page">
        <div class="container">
          <div class="tags">
            <a class="tag" href="">
              <h4>Beef</h4>
              <p>1 recipe</p>
            </a>
            <a class="tag" href="">
              <h4>Breakfast</h4>
              <p>2 recipes</p>
            </a>
            <a class="tag" href="">
              <h4>Carrots</h4>
              <p>3 recipes</p>
            </a>
            <a class="tag" href="">
              <h4>Dinner</h4>
              <p>4 recipes</p>
            </a>
            <a class="tag" href="">
              <h4>Food</h4>
              <p>1 recipe</p>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tags;
