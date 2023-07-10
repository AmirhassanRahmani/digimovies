import React from "react";
import { styled } from "styled-components";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./NextSlider.css";
import listSwiperSecond from "../../utils/listSwiperSecond";

function NextSlider({ darkMode }) {
  return (
    <Container>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className="swiper_container"
        loop={true}
        centeredSlides={true}
      >
        {listSwiperSecond.map((item, index) => (
          <SwiperSlide>
            <ImagePart>
              <img src={item.url} alt="" />
            </ImagePart>
            <CaptionPart darkMode={darkMode}>
              <h3>{item.info}</h3>
            </CaptionPart>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev">
          <KeyboardArrowLeftIcon style={{ color: "white" }} />
        </div>
        <div className="swiper-button-next">
          <KeyboardArrowRightIcon style={{ color: "white" }} />
        </div>
      </Swiper>
    </Container>
  );
}

export default NextSlider;
const Container = styled.div`
  cursor: pointer;
`;

const CaptionPart = styled.div`
  > * {
    text-align: center;
  }
  > h3 {
    color: ${(props) => (props.darkMode ? "white" : "black")};
  }
  > p > span {
    color: #eb8307;
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 0.2rem;
  }
  margin-top: 1rem;
`;

const ImagePart = styled.div`
  height: 23rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
  }
`;
