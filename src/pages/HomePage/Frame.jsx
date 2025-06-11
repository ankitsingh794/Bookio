import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState,useEffect } from "react";

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import "./Style/Frame.css"

export const Frame = () => {
    const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const { data } = await axios.get(
            `/api/events/nearby?lat=${latitude}&lng=${longitude}&distance=50`
          );
          setEvents(data.events || []);
        } catch (err) {
          console.error("Error fetching nearby events:", err.message);
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error("Geolocation error:", err.message);
        setLoading(false);
      }
    );
  }, []);

    return (
        <div className="frame">
            

            <div className="text-wrapper-22">Discover Events Near You</div>
            <div className="card-collect">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                    style={{maxWidth:"100vw"}}
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

                
            </div>

        </div>
    );
};