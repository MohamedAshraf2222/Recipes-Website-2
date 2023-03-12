import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <main class="page">
        <div class="container">
          <div class="about-content">
            <div class="txt">
              <h1>I'm baby coloring book poke taxidermy</h1>
              <p>
                Taxidermy forage glossier letterpress heirloom before they sold
                out you probably haven't heard of them banh mi biodiesel chia.
              </p>
              <p>
                Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
                retro.
              </p>
              <div class="btn-about btn-contact">
                <Link to={"/contact"}>Contact</Link>
              </div>
            </div>
            <div class="img"></div>
          </div>
          <div class="about-boxes-h">Look At This Awesomesouce!</div>
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
