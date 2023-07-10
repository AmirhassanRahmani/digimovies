import React from "react";
import { Container, ImageSection } from "./SwiperSlider-styles";
import listSecondSlide from "../../utils/listSecondSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './SwiperSlider.css'

function SwiperSlider() {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 5,
          depth: 50,
          modifier: 10,
        //   slideShadows: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-first",
          prevEl: ".swiper-button-prev-first",
        }}
        className="swiper_container_first"
      >
        {listSecondSlide.map((item, index) => (
          <SwiperSlide>
            <ImageSection>
              <img src={item} alt="" />
            </ImageSection>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next-first"></div>
        <div className="swiper-button-prev-first"></div>
      </Swiper>
    </Container>
  );
}

export default SwiperSlider;
