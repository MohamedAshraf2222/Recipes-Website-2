import React from "react";
import { Link } from "react-router-dom";
import { recipe01, recipe02, recipe03, recipe04 } from "../assets";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Recipes = () => {
  return (
    <div>
      <Header />
      <main class="page">
        <div class="container">
          <div class="main-section">
            <div class="recipes-list-content">
              <h3>Recipes</h3>
              <div class="recipes-list">
                <Link to={"/tagtemplate"} class="link-hover p-1">
                  Beef (1)
                </Link>
                <Link to={"/tagtemplate"} class="link-hover p-1">
                  Breakfast (2)
                </Link>
                <Link to={"/tagtemplate"} class="link-hover p-1">
                  Carrots (3)
                </Link>
                <Link to={"/tagtemplate"} class="link-hover p-1">
                  Food (4)
                </Link>
              </div>
            </div>

            <div class="boxes boxes-recipes">
              <Link to={"/singlerecipe"} class="box">
                <img src={recipe01} alt="recipe-1" />
                <h3>Carne Asada</h3>
                <p>Prep : 15min | Cook : 5min</p>
              </Link>
              <Link to={"/singlerecipe"} class="box">
                <img src={recipe02} alt="recipe-2" />
                <h3>Greek Ribs</h3>
                <p>Prep : 15min | Cook : 5min</p>
              </Link>
              <Link to={"/singlerecipe"} class="box">
                <img src={recipe03} alt="recipe-3" />
                <h3>Vegetable Soup</h3>
                <p>Prep : 15min | Cook : 5min</p>
              </Link>
              <Link to={"/singlerecipe"} class="box">
                <img src={recipe04} alt="recipe-4" />
                <h3>Banana Pancakes</h3>
                <p>Prep : 15min | Cook : 5min</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recipes;
