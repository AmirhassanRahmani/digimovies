import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import listCardMovies from "../../utils/listCardMovies";
import { useParams } from "react-router-dom";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";

import {
  Container,
  Content,
  Right,
  Left,
  ContentContainer,
  ImageSection,
  Play,
  PlayIcon,
  Tray,
  Topic,
  HeaderFilm,
  LogoSide,
  LogoSideRight,
  Plus,
  HeartIcon,
  SmallNum,
  Rank,
  Vote,
  Imdb,
  LogoSideLeft,
  SpanNum,
  LeftContainer,
  SpanInfo,
  InfoFilm,
  OrangeIcons,
  SpanSideIcon,
  About,
  GreenContainer,
  Green,
  DarkDiv,
} from "./Page-styles";

import StarRating from "./StarRating";

function Page({ darkMode }) {
  const { id } = useParams();

  const [current, setCurrent] = useState(
    listCardMovies.filter((item) => item.count === parseInt(id))
  );

  return (
    <Container>
      <Header />
      {current.map((item, index) => (
        <Content src={item.back} key={index}>
          <ContentContainer>
            <Right>
              <ImageSection>
                <img src={item.src} alt="" />
                <PlayIcon>
                  <PlayArrowOutlinedIcon />
                </PlayIcon>
              </ImageSection>
              <Tray>مشاهده تریلر</Tray>
              <Play>پخش آنلاین</Play>
            </Right>
            <Left>
              <LeftContainer>
                <Topic>
                  <HeaderFilm darkMode={darkMode}>{item.head}</HeaderFilm>
                  <LogoSide>
                    <LogoSideRight>
                      <Plus>
                        <AddIcon />
                      </Plus>
                      <HeartIcon darkMode={darkMode}>
                        <FavoriteBorderIcon />
                      </HeartIcon>
                    </LogoSideRight>
                    <LogoSideLeft>
                      <Rank>
                        <SpanNum>{item.spanNum}</SpanNum>
                        <SmallNum>/10</SmallNum>
                      </Rank>
                      <Vote>{item.vote}</Vote>
                      <Imdb>IMDb</Imdb>
                    </LogoSideLeft>
                  </LogoSide>
                </Topic>
                <InfoFilm>
                  {item.icons.map((icon, index) => (
                    <OrangeIcons>
                      <SpanSideIcon>{icon.icon}</SpanSideIcon>
                      <SpanInfo darkMode={darkMode}>{icon.info}</SpanInfo>
                    </OrangeIcons>
                  ))}
                </InfoFilm>
                <About darkMode={darkMode}>{item.about}</About>
                <GreenContainer>
                  <Green>
                    <ClosedCaptionOffOutlinedIcon style={{ color: "white" }} />
                  </Green>
                  <DarkDiv>همراه با زیرنویس چسبیده</DarkDiv>
                </GreenContainer>
                <StarRating />
              </LeftContainer>
            </Left>
          </ContentContainer>
        </Content>
      ))}
      <Footer />
    </Container>
  );
}

export default Page;
