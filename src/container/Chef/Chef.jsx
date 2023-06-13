import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse ">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Our Menu Features A Variety Of Dishes That Are Sure To Please Any
            Palate
          </p>
        </div>
        <p className="p__opensans">
          Our Signature Dish Is A Succulent Slow-Roasted Prime Rib, Served With
          Creamy Horseradish Sauce And A Side Of Tender Roast Potatoes. For
          Seafood Lovers, We Offer A Fresh Catch Of The Day, Expertly Grilled
          And Served With A Lemon Butter Sauce. Vegetarians Will Enjoy Our
          Roasted Eggplant Stack, Layered With Creamy Feta Cheese And Sun-Dried
          Tomatoes. And No Meal Is Complete Without A Sweet Finish, So Be Sure
          To Save Room For Our Decadent Chocolate Lava Cake, Served With A Scoop
          Of Creamy Vanilla Bean Ice Cream.
        </p>
      </div>
      <div className="app__chef-sign">
        <p className="p__cormorant">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
