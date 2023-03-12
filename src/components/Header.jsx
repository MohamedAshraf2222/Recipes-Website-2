import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";

const Header = () => {
  return (
    <div>
      <header>
        <nav id="nav">
          <div class="container">
            <div class="nav-content">
              <Link to={'/home'} className='pr-6' >
                <img src={logo} alt="Simply Recipes" />
              </Link>
              <div class="nav-links">
                <Link to={"/home"} class="nav-link">
                  Home
                </Link>
                <Link to={"/about"} class="nav-link">
                  About
                </Link>
                <Link to={"/tags"} class="nav-link">
                  Tags
                </Link>
                <Link to={"/recipes"} class="nav-link">
                  Recipes
                </Link>
                <div class="btn-contact">
                  <Link to={"/contact"}>Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
