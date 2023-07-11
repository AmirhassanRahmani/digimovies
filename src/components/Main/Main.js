import React, { useContext, useEffect, useState } from "react";
import {
  CardMovie,
  Container,
  FilmSectionContainer,
  Left,
  LeftContainer,
  RightContainer,
  Right,
  RightImage,
  RightBottom,
  ImageSection,
  SpanRight,
  SpanLeft,
  Topic,
  HeaderFilm,
  InfoFilm,
  About,
  LogoSide,
  LogoSideRight,
  LogoSideLeft,
  HeartIcon,
  Plus,
  Rank,
  Vote,
  Imdb,
  SpanNum,
  SmallNum,
  Green,
  GreenContainer,
  DarkDiv,
  Svg,
  Download,
  DownloadContainer,
  PathIcon,
  SpanDownload,
  OrangeIcons,
  SpanSideIcon,
  SpanInfo,
  TopSection,
  RecentMovies,
  CardImage,
  ImagePart,
  CaptionPart,
  LeftFirstCol,
  LeftSlider,
  TopLeftSlider,
  FilmCategories,
  TopCategory,
  BottomCategory,
  ItemCategory,
  ItemTop,
  ItemBottom,
  SerialCategory,
  TitrSection,
  TitrSlider,
  Divide,
} from "./Main-styles";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Mode } from "../../App";
import listCardMovies from "../../utils/listCardMovies";
import listLeftImage from "../../utils/listLeftImage";
import Slider from "./Slider";
import listBottomCategory from "../../utils/listBottomCategory";
import listSerial from "../../utils/listSerial";
import NextSlider from "./NextSlider";
import { Link } from "react-router-dom";

function Main() {
  const { darkMode } = useContext(Mode);
  const [size, setSize] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setSize(true);
      } else {
        setSize(false);
      }
    });
  }, [size]);

  return (
    <Container>
      <FilmSectionContainer>
        <LeftContainer>
          <LeftFirstCol darkMode={darkMode}>
            <RecentMovies>
              <LiveTvIcon />
              <TitrSection darkMode={darkMode}>
                <div>سریال های</div>
                <div>بروز شده</div>
              </TitrSection>
            </RecentMovies>
            {listLeftImage.map((item, index) => (
              <CardImage>
                <ImagePart>
                  <img src={item.url} alt="" />
                </ImagePart>
                <CaptionPart>
                  قسمت <span>{item.caption}</span> فصل اول با زیرنویس منتشر شد
                </CaptionPart>
              </CardImage>
            ))}
          </LeftFirstCol>

          <LeftSlider darkMode={darkMode}>
            <TopLeftSlider>
              <KeyboardVoiceOutlinedIcon />
              <TitrSlider darkMode={darkMode}>
                <div>فیـــلم هــای</div>
                <div>دوبله فارسی</div>
              </TitrSlider>
            </TopLeftSlider>
            <Slider darkMode={darkMode} />
          </LeftSlider>

          <FilmCategories darkMode={darkMode}>
            <TopCategory>
              <GroupWorkIcon style={{ color: "#eb8307" }} />
              <Divide darkMode={darkMode}>
                <div>دسته بندی</div>
                <div>فیلم ها</div>
              </Divide>
            </TopCategory>
            <BottomCategory>
              {listBottomCategory.map((item, index) => (
                <ItemCategory>
                  <ItemTop darkMode={darkMode}>
                    <span>{item.icon}</span>
                    <span>{item.type}</span>
                  </ItemTop>
                  <ItemBottom>{item.number}</ItemBottom>
                </ItemCategory>
              ))}
            </BottomCategory>
          </FilmCategories>

          <SerialCategory darkMode={darkMode}>
            <TopCategory>
              <GroupWorkIcon style={{ color: "#eb8307" }} />
              <Divide darkMode={darkMode}>
                <div>دسته بندی</div>
                <div>سریال ها</div>
              </Divide>
            </TopCategory>
            {listSerial.map((item, index) => (
              <ItemCategory>
                <ItemTop darkMode={darkMode}>
                  <span>{item.icon}</span>
                  <span>{item.type}</span>
                </ItemTop>
                <ItemBottom>{item.number}</ItemBottom>
              </ItemCategory>
            ))}
          </SerialCategory>

          <LeftSlider darkMode={darkMode}>
            <TopLeftSlider>
              <GroupWorkIcon />
              <TitrSlider darkMode={darkMode}>
                <div>تریلرها</div>
                <div>به زودی</div>
              </TitrSlider>
            </TopLeftSlider>
            <NextSlider darkMode={darkMode} />
          </LeftSlider>
        </LeftContainer>

        <RightContainer>
          {listCardMovies.map((item, index) => (
            <CardMovie darkMode={darkMode} key={index}>
              <Right>
                <Link to={`/page/${index}`}>
                  <RightImage>
                    <ImageSection
                      src={size && item.src ? item.src : item.url}
                      alt=""
                    />
                  </RightImage>
                </Link>
                <RightBottom darkMode={darkMode}>
                  <SpanRight darkMode={darkMode}>
                    <SlideshowIcon />
                  </SpanRight>
                  <SpanLeft darkMode={darkMode}>مشاهده تریلر</SpanLeft>
                </RightBottom>
              </Right>

              <Left>
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
                <PathIcon>
                  <DownloadContainer>
                    <SpanDownload>
                      ادامه / <span>دانلود</span>
                    </SpanDownload>

                    <Download>
                      <FileDownloadOutlinedIcon style={{ color: "white" }} />
                    </Download>
                  </DownloadContainer>
                  <Svg darkMode={darkMode}>
                    <path
                      d="M0 27c.417-.01.838-.03 1.3-.03a46.441 46.441 0 0023.462-6.34L43.127 4.11a16.829 16.829 0 0122.04 0l13.471 12.12.085-.04a45.881 45.881 0 0029.971 10.78c.463 0 .888.02 1.309.03H0z"
                      class="moresvgposts"
                      fill-rule="evenodd"
                    ></path>
                  </Svg>
                </PathIcon>
              </Left>
            </CardMovie>
          ))}
        </RightContainer>
      </FilmSectionContainer>
    </Container>
  );
}

export default Main;
