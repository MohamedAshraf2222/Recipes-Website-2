import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const SingleRecipe = () => {
  return (
    <div>
      <Header />
      <main class="page pb-6">
        <div class="container">
          <div class="single-recipe-content">
            <div class="img-4"></div>
            <div class="single-recipe-txt">
              <h4>Banana Pancakes</h4>
              <p>
                Shabby chic humblebrag banh mi bushwick, banjo kale chips
                meggings. Cred selfies sartorial, cloud bread disrupt blue
                bottle seitan. Dreamcatcher tousled bitters, health goth vegan
                venmo whatever street art lyft shabby chic pitchfork beard.
                Drinking vinegar poke tbh, iPhone coloring book polaroid
                truffaut tousled ramps pug trust fund letterpress. Portland four
                loko austin chicharrones bitters single-origin coffee. Leggings
                letterpress occupy pour-over.
              </p>
              <div class="icons-section">
                <div class="icon">
                  <i class="fa-solid fa-clock"></i>
                  <h4>Prep Time</h4>
                  <p>30 min</p>
                </div>
                <div class="icon icon-2">
                  <i class="fa-solid fa-clock"></i>
                  <h4>Cook Time</h4>
                  <p>15 min</p>
                </div>
                <div class="icon">
                  <i class="fa-solid fa-user-group"></i>
                  <h4>Serving</h4>
                  <p>6 servings</p>
                </div>
              </div>
              <div class="tags-content">
                <span>Tags :</span>
                <div class="btn-contact">
                  <Link to={"/tagtemplate"}>Beef</Link>
                </div>
                <div class="btn-contact">
                  <Link to={"/tagtemplate"}>Breakfast</Link>
                </div>
                <div class="btn-contact">
                  <Link to={"/tagtemplate"}>Pancakes</Link>
                </div>
                <div class="btn-contact">
                  <Link to={"/tagtemplate"}>Food</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="instruction-container">
            <div class="instructions">
              <h2>Instructions</h2>
              <div class="instructions-steps">
                <h3>STEP 1</h3>
                <div class="line"></div>
              </div>
              <p>
                I'm baby mustache man braid fingerstache small batch venmo
                succulents shoreditch.
              </p>
              <div class="instructions-steps">
                <h3>STEP 2</h3>
                <div class="line"></div>
              </div>
              <p>
                Pabst pitchfork you probably haven't heard of them, asymmetrical
                seitan tousled
                <br />
                succulents wolf banh mi man bun bespoke selfies freegan ethical
                hexagon.
              </p>
              {/* <p> */}
              <div class="instructions-steps">
                <h3>STEP 3</h3>
                <div class="line"></div>
              </div>
              <p>
                Polaroid iPhone bitters chambray. Cornhole swag kombucha
                live-edge.
              </p>
            </div>
            <div class="ingredients">
              <h2>Ingredients</h2>
              <p>1 1/2 cups dry pancake mix </p>
              <div class="line line-2"></div>
              <p>1/2 cup flax seed meal </p>
              <div class="line line-2"></div>
              <p>1 cup skim milk </p>
              <div class="line line-2"></div>
              <div class="gap"></div>
              <h2>Tools</h2>
              <p class="tools-color">Hand Blender </p>
              <div class="line line-2"></div>
              <p class="tools-color">Large Heavy Pot With Lid</p>
              <div class="line line-2"></div>
              <p class="tools-color"> Measuring Spoons </p>
              <div class="line line-2"></div>
              <p class="tools-color">Measuring Cups </p>
              <div class="line line-2"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SingleRecipe;
