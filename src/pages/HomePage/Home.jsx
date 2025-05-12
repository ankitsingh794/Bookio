import React from "react";
import { Cards } from "./Cards";
import { CardsWrapper } from "./CardsWrapper";
import { Frame } from "./Frame";
import { Navigation } from "./Navigation";
import { NavigationFooter } from "./NavigationFooter";
import { Section } from "./Section";
import { Text } from "./Text";
import "./Style/Home.css";

const Home = () => {
  return (
    <div className="frame-screen">
      <div className="home-wrapper">
        <Navigation />
        <div className="home">
          <div className="group">
            <div className="page-title">
              <div className="text-wrapper-26">Featured</div>
              <p className="text-wrapper-27">
                Trending Events Right Now: Explore Top Events Near You!
              </p>
            </div>
          </div>

          <div className="overlap-group">
            <div className="hero-image" />

            <button className="button-2">
              <div className="text-wrapper-21">Find Your Event Now</div>
            </button>
          </div>

          <div className="text-wrapper-22">Discover Events Near You</div>

          <Frame />

          <div className="image-6" />
          <div className="text-wrapper-24">Join the Community</div>
          <Text />
          <div className="buttons-2">
            <button className="button-3">
              <div className="text-wrapper-21">Join</div>
            </button>

            <button className="button-4">
              <div className="text-wrapper-25">Explore the Community</div>
            </button>
          </div>

          <div className="text-wrapper-23">Upcoming Events</div>

          <Cards />

          <div className="customer-reviews">Customer Reviews</div> 
          <CardsWrapper />


          <Section />
          
        </div>
        <NavigationFooter />
      </div>
    </div>
  );
};

export default Home;
