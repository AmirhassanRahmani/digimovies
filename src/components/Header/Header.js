import React, { useContext, useState } from "react";
import {
  BackHeader,
  BackLeft,
  BackRight,
  Ball,
  BallSection,
  BottomLeft,
  BottomMiddle,
  BottomRight,
  BrightContent,
  Container,
  FilmList,
  HeaderBottom,
  HeaderBottomContainer,
  HeaderSliding,
  HeaderTop,
  HeaderTopContainer,
  HoverDiv,
  Icon,
  Image,
  ImageContent,
  Info,
  InputSection,
  Item,
  Left,
  Right,
  RightBall,
  RightCell,
  SlideBottom,
  SlideIcon,
  SlideTop,
  TopLeft,
  TopRight,
} from "./Header-styles";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchIcon from "@mui/icons-material/Search";
import listHeaderTop from "../../utils/listHeaderTop";
import { Mode } from "../../App";
import listHeaderBottom from "../../utils/listHeaderBottom";
import MenuHeader from "./MenuHeader";
import darkLogo from "../../images/digi_dark_logo.webp";
import lightLogo from "../../images/logo.webp";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import listHeaderMenu from "../../utils/listHeaderMenu";
import SlideItem from "./SlideItem";

function Header() {
  const [direction, setDirection] = useState(false);
  const { darkMode, setDarkMode } = useContext(Mode);
  const [slide, setSlide] = useState(false);
  const [id, setId] = useState(null);

  const handlePositionRight = () => {
    setDirection(true);
    setDarkMode(false);
  };

  const handlePositionLeft = () => {
    setDirection(false);
    setDarkMode(true);
  };

  const handleOn = (index) => {
    setId(index);
  };

  const handleOff = () => {
    setId(null);
  };

  const handleSliding = () => {
    setSlide(true);
  };

  const handleSlidingOff = () => {
    setSlide(false);
  };

  return (
    <Container>
      {/* <BackHeader darkMode={darkMode}>
        <BackLeft></BackLeft>
        <BackRight></BackRight>
      </BackHeader> */}
      
      <HeaderTop>
        <HeaderTopContainer>
          <TopRight>
            {listHeaderTop.map((item, index) => (
              <Item darkMode={darkMode}>
                <Icon>{item.icon}</Icon>
                <Info>{item.info}</Info>
              </Item>
            ))}
          </TopRight>
          <TopLeft>
            <ImageContent darkMode={darkMode}>
              <img src={darkLogo} alt="" />
              <img src={lightLogo} alt="" />
            </ImageContent>
            <BrightContent darkMode={darkMode}>
              <NightlightIcon
                style={{ color: "#f1c40f" }}
                onClick={handlePositionRight}
              />
              <Brightness7Icon
                style={{ color: "#f1c40f" }}
                onClick={handlePositionLeft}
              />
              <Ball direction={direction}></Ball>
            </BrightContent>
          </TopLeft>
        </HeaderTopContainer>
      </HeaderTop>

      <HeaderBottom darkMode={darkMode}>
        <HeaderBottomContainer>
          <BottomRight>
            {listHeaderBottom.map((item, index) => (
              <MenuHeader
                icon={item.icon}
                top={item.top}
                bottom={item.bottom}
                key={index}
                index={index}
                id={setId}
                darkMode={darkMode}
              />
            ))}

            {listHeaderBottom.map((cell, index) => (
              <HoverDiv
                key={index}
                onMouseEnter={() => handleOn(index)}
                onMouseLeave={() => handleOff(index)}
              >
                {cell.Hide && index === id && (
                  <FilmList index={index} darkMode={darkMode}>
                    <Right index={index}>
                      {cell.Hide.right.map((content, index) => (
                        <BallSection>
                          <RightBall></RightBall>
                          <RightCell darkMode={darkMode}>{content}</RightCell>
                        </BallSection>
                      ))}
                    </Right>
                    <Left index={index}>
                      {cell.Hide.left.map((content, index) => (
                        <BallSection>
                          <RightBall></RightBall>
                          <RightCell darkMode={darkMode}>{content}</RightCell>
                        </BallSection>
                      ))}
                    </Left>
                    <Image>
                      <img src={cell.Hide.url} alt="" />
                    </Image>
                  </FilmList>
                )}
              </HoverDiv>
            ))}
          </BottomRight>
          <BottomMiddle onClick={handleSliding} darkMode={darkMode}>
            <MenuIcon />
          </BottomMiddle>
          <BottomLeft darkMode={darkMode}>
            <InputSection placeholder="جستجو کنید . . . " darkMode={darkMode} />
            <SearchIcon style={{ color: "orange" }} />
          </BottomLeft>
        </HeaderBottomContainer>
      </HeaderBottom>

      <HeaderSliding slide={slide} darkMode={darkMode}>
        <SlideTop>
          <ImageContent darkMode={darkMode}>
            <img src={darkLogo} alt="" />
            <img src={lightLogo} alt="" />
          </ImageContent>
          <SlideIcon onClick={handleSlidingOff}>
            <CancelIcon style={{ color: "#eb8307" }} />
          </SlideIcon>
        </SlideTop>
        <SlideBottom>
          {listHeaderMenu.map((item, index) => (
            <SlideItem title={item.top} dropdown={item.Hide} index={index} darkMode={darkMode}/>
          ))}
        </SlideBottom>
      </HeaderSliding>

    </Container>
  );
}

export default Header;
