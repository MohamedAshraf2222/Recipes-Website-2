import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Header />
      <main class="page">
        <div class="container">
            <div class="contact-content">
                <div class="contact-txt">
                    <h3>
                        Want To Get In Touch?
                    </h3>
                    <p>
                        Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke 
                        mlkshk intelligentsia edison bulb synth.
                    </p>
                    <p>
                        Cardigan prism bicycle rights put a bird on it deep v.
                    </p>
                    <p>
                        Hashtag swag health goth air plant, raclette listicle 
                        fingerstache cold-pressed fanny pack bicycle rights cardigan poke
                    </p>
                </div>
                <form class="contact-form flex flex-col gap-2">
                    <p class="name"> Your Name</p>
                    <input type="text" name="name"/>
                    <p>Your Email</p> 
                    <input type="email" name="email"/>
                    <p>Message</p> 
                    <textarea name="textarea" rows="10"></textarea>
                    <button type="submit" class="btn-contact">Submit</button>
                </form>
            </div>
            <div class="about-boxes-h">
                Look At This Awesomesouce!
            </div>
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


export default Contact