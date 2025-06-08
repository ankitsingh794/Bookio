import React from "react";
import { Cards } from "./Cards";
import { FaSearch } from "react-icons/fa";
import { CardsWrapper } from "./CardsWrapper";
import { Frame } from "./Frame";
import { Lnavigation } from "../../components/Navigation";
import { NavigationFooter } from "../../components/NavigationFooter";
import { Section } from "./Section";
import { Text } from "./Text";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import SearchBar from "../../components/SearchBar";



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import "./Style/Home.css";

const Home = () => {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="frame-screen">
          <div className="home-wrapper">
            <Lnavigation />
            <SearchBar />
            <div className="home">
              <div className="group">
                <Swiper
                  effect={'fade'}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  modules={[EffectFade, Pagination, Navigation, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  <SwiperSlide>Slide 5</SwiperSlide>
                  <SwiperSlide>Slide 6</SwiperSlide>
                  <SwiperSlide>Slide 7</SwiperSlide>
                  <SwiperSlide>Slide 8</SwiperSlide>
                  <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>


                <button className="button-2">
                  <div className="text-wrappers-21">Find Your Event Now</div>
                </button>
              </div>



              <Frame />

              <Text />



              <Cards />


              <CardsWrapper />


              <Section />

            </div>
            <NavigationFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
