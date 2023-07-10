import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  SliderContainer,
  ArrowRight,
  ArrowLeft,
} from "./SlickSlider-styles";
import listSlider from "../../utils/listSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CurrentSlide from "./CurrentSlide";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Mode } from "../../App";
import listSecondSlide from "../../utils/listSecondSlide";
import Slide from "./Slide";

function SlickSlider() {
  const { darkMode } = useContext(Mode);
  const [size, setSize] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 880 || window.innerWidth < 521) {
        setSize(true);
      } else if (window.innerWidth < 880 && window.innerWidth >= 521) {
        setSize(false);
      }
    });
  }, [size]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    renderItem: () => <CurrentSlide />,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <ArrowLeft className={className} onClick={onClick} darkMode={darkMode}>
        <KeyboardArrowLeftIcon
          fontSize="large"
          className="icon"
          darkMode={darkMode}
        />
      </ArrowLeft>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <ArrowRight className={className} onClick={onClick} darkMode={darkMode}>
        <KeyboardArrowRightIcon
          fontSize="large"
          className="icon"
          darkMode={darkMode}
        />
      </ArrowRight>
    );
  }

  return (
    <Container>
      <SliderContainer>
        <Slider {...settings}>
          {size &&
            listSlider.map((item, index) => (
              <CurrentSlide key={index} item={item} index={index} />
            ))}
          {!size &&
            listSecondSlide.map((cell, index) => (
              <Slide key={index} cell={cell} />
            ))}
        </Slider>
      </SliderContainer>
    </Container>
  );
}

export default SlickSlider;
