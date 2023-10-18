import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import Slika from "../../assets/picture/1275638.jpg";
import slikaa from "../../assets/picture/question.png";
import slikaaa from "../../assets/picture/treningSlika.png";
import "swiper/css";
import "swiper/css/effect-fade";

const Testimonials = () => {
  return (
    <>
      <h1 className=" text-center font-[700]    text-3xl  text-red-700 ">
        THIS IS ALPHA TESTING FOR TESTIMONIALS{" "}
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={Slika} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slikaa} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slikaaa} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
