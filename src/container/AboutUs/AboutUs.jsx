import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g-letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Welcome To Gericht ! We're A Family-Owned Restaurant That's Been
          Serving Delicious Meals Since 2007. Our Chefs Use Only The Freshest
          Ingredients To Create Classic Dishes And Unique Twists On Old
          Favorites. We Offer A Warm And Welcoming Atmosphere, Friendly Service,
          And A Menu That Caters To All Tastes And Dietary Needs. Come Dine With
          Us And Experience The Best That Gericht Has To Offer!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife image" />
      </div>

      <div className="app__aboutus-content_history ">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon__history" className="spoon__img" />
        <p className="p__opensans">
          Our Restaurant Has Been Serving Delicious Food And Providing A Warm
          Atmosphere For Over 20 Years. It All Started With A Simple Idea: To
          Create A Place Where People Could Come Together To Enjoy Great Food
          And Good Company. Since Then, We've Continued To Grow And Evolve,
          Always Striving To Bring New And Exciting Dishes To Our Menu While
          Staying True To Our Roots. Our Commitment To Quality And Customer.
          
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
