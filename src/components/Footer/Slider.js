import React from "react";
import { Container } from "./Footer-styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import listFooter from "../../utils/listFooter";
import { Content, ImageSection, Para } from "./Slider-styles";

function Slider({darkMode}) {

  return (
    <Container darkMode={darkMode}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-three",
          prevEl: ".swiper-button-prev-three",
        }}
        className="swiper_container_three"
        loop={true}
        centeredSlides={true}
      >
        {listFooter.map((item, index) => (
          <SwiperSlide key={index}>
            <Content>
              <ImageSection>
                <img src={item.url} alt="" />
              </ImageSection>
              <Para>{item.info}</Para>
            </Content>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev-three">
          <KeyboardArrowRightIcon style={{ color: "white" }} />
        </div>
        <div className="swiper-button-next-three">
          <KeyboardArrowLeftIcon style={{ color: "white" }} />
        </div>
      </Swiper>
    </Container>
  );
}

export default Slider;
