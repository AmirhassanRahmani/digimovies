import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import listCardMovies from "../../utils/listCardMovies";
import { useParams } from "react-router-dom";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import ClosedCaptionOffOutlinedIcon from "@mui/icons-material/ClosedCaptionOffOutlined";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import "./Actors.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
  PeopleVotes,
  PeopleRate,
  NumberDiv,
  Mdiv,
  RateDiv,
  PageFooter,
  DarkInfo,
  InfoSection,
  ArrowSection,
  DarkInfoTop,
  DarkInfoBottom,
  SpanDouble,
  Download,
  RigthDownload,
  LeftDownload,
  Card,
  SubDownload,
  Black,
  BlackRight,
  BlackLeft,
  DirectLink,
  Quality,
  OrangeDiv,
  CloudDiv,
  Ancer,
  ImageDiv,
  SlideContainer,
  SliderContent,
  NotFound,
  AncerContainer,
} from "./Page-styles";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import StarRating from "./StarRating";
import listPage from "../../utils/listPage";

function Page({ darkMode }) {
  const { id } = useParams();

  const [count, setCount] = useState(null);

  const [download, setDownload] = useState(false);

  const [current, setCurrent] = useState(
    listCardMovies.filter((item) => item.count === parseInt(id))
  );

  const handleToggle = (index) => {
    if (count === index) {
      return setCount(null);
    }
    setCount(index);
  };

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
                <PeopleVotes>
                  <PeopleRate>
                    <NumberDiv disColor={item.disColor}>
                      {item.disLike}
                    </NumberDiv>
                    <Mdiv>m</Mdiv>
                    <RateDiv>امتیاز منتقدین</RateDiv>
                  </PeopleRate>
                  <StarRating />
                </PeopleVotes>
              </LeftContainer>
            </Left>
          </ContentContainer>
        </Content>
      ))}
      <PageFooter>
        {listPage.map((item, index) => (
          <Card>
            <DarkInfo onClick={() => handleToggle(index)}>
              <DarkInfoTop>
                <InfoSection>{item.title}</InfoSection>
                <ArrowSection>
                  <SpanDouble toggle={count === index}>
                    <KeyboardArrowLeftIcon style={{ color: "white" }} />
                    <KeyboardArrowLeftIcon style={{ color: "orange" }} />
                  </SpanDouble>
                </ArrowSection>
              </DarkInfoTop>
            </DarkInfo>
            <DarkInfoBottom toggle={count === index} index={index}>
              {index === 0 && (
                <>
                  <Download onClick={() => setDownload(!download)}>
                    <RigthDownload>
                      <FileDownloadOutlinedIcon />
                      <span>نسخه زیرنویس چسبیده فارسی</span>
                    </RigthDownload>
                    <LeftDownload download={download}>
                      <KeyboardArrowLeftIcon style={{ color: "white" }} />
                      <KeyboardArrowLeftIcon style={{ color: "orange" }} />
                    </LeftDownload>
                  </Download>
                  <SubDownload download={download}>
                    {[...Array(3)].map((item, index) => (
                      <Black>
                        <BlackRight>
                          <DirectLink>
                            <span>
                              <KeyboardDoubleArrowDownIcon />
                            </span>
                            <span>دانلود با لینک مستقیم</span>
                          </DirectLink>
                          <Quality>
                            <span>
                              <CameraAltOutlinedIcon />
                            </span>
                            <span>نمونه کیفیت</span>
                          </Quality>
                        </BlackRight>
                        <BlackLeft>
                          <div>1080p Full HD WEB-DL SoftSub</div>
                          <div>
                            <span>Encoder : XEBEC</span>
                            <span>5.54 GB</span>
                            <span>Mkv</span>
                          </div>
                        </BlackLeft>
                      </Black>
                    ))}
                  </SubDownload>
                  <OrangeDiv>
                    <p>
                      {" "}
                      "دانلود و تماشای آنلاین تنها با IP ایران امکانپذیر هست،
                      لطفا v.p.n خود را خاموش نمایید ، همچنین با نرم افزار IDM
                      در رایانه و ADM در موبایل اقدام به دانلود نمائید."
                    </p>
                    <p>
                      در صورتی که خارج از کشور زندگی می‌کنید ،{" "}
                      <span>
                        <a href="#">اینجا کلیک </a>کنید .
                      </span>
                    </p>
                  </OrangeDiv>

                  <CloudDiv>
                    <svg
                      // xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="xMidYMid"
                      viewBox="0 0 550 77"
                    >
                      {" "}
                      <g transform="">
                        <g transform="translate(249.994 54.8399)">
                          {" "}
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            keyTimes="0;1"
                            values="-100 54.839884799569695;550 54.839884799569695"
                            dur="66.66666666666667s"
                            repeatCount="indefinite"
                            begin="-19.96671107251597s"
                          ></animateTransform>{" "}
                          <path
                            d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z"
                            fill="#89bff8"
                            transform="scale(0.5760000000000001)"
                          ></path>{" "}
                        </g>
                        <g transform="translate(466.728 25.1457)">
                          {" "}
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            keyTimes="0;1"
                            values="-100 25.145672237483847;550 25.145672237483847"
                            dur="33.333333333333336s"
                            repeatCount="indefinite"
                            begin="-13.132792749252003s"
                          ></animateTransform>{" "}
                          <path
                            d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z"
                            fill="#408ee0"
                            transform="scale(0.684)"
                          ></path>{" "}
                        </g>
                        <g transform="translate(306.798 31.8145)">
                          {" "}
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            keyTimes="0;1"
                            values="-100 31.814549045599396;550 31.814549045599396"
                            dur="22.222222222222225s"
                            repeatCount="indefinite"
                            begin="-42.421908236134165s"
                          ></animateTransform>{" "}
                          <path
                            d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z"
                            fill="#2c7cbd"
                            transform="scale(0.792)"
                          ></path>{" "}
                        </g>
                        <g transform="translate(-68.4977 8.94321)">
                          {" "}
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            keyTimes="0;1"
                            values="-100 8.94321108217654;550 8.94321108217654"
                            dur="16.666666666666668s"
                            repeatCount="indefinite"
                            begin="-18.21092578783293s"
                          ></animateTransform>{" "}
                          <path
                            d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z"
                            fill="#5e9fe3"
                            transform="scale(0.9)"
                          ></path>{" "}
                        </g>
                        <g transform="translate(-31.9624 0.5779)">
                          {" "}
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            keyTimes="0;1"
                            values="-100 0.577899892610461;550 0.577899892610461"
                            dur="16.666666666666668s"
                            repeatCount="indefinite"
                            begin="-2.4810620817426505s"
                          ></animateTransform>{" "}
                          <path
                            d="M84.717,33.597c0.791-2.503,1.186-5.138,1.186-7.773C85.903,11.594,74.308,0,60.079,0 c-9.881,0-18.445,5.534-22.793,13.702c-1.581-0.527-3.426-0.791-5.138-0.791c-9.486,0-17.128,7.642-17.128,17.128 c0,1.186,0.132,2.372,0.395,3.426C6.719,34.783,0,42.424,0,51.515C0,61.66,8.169,69.829,18.314,69.829h63.373 C91.831,69.829,100,61.66,100,51.515C99.868,42.556,93.281,35.046,84.717,33.597z"
                            fill="#5e9fe3"
                            transform="scale(0.9)"
                          ></path>{" "}
                        </g>
                      </g>{" "}
                    </svg>

                    <div>
                      برای اطلاع از جدیدترین آدرس سایت ، به کانال تلگرام دیجی
                      موویز بپیوندید.
                    </div>

                    <AncerContainer>
                      <Ancer href="#">
                        برای عضویت در کانال اینجا را کلیک کنید
                      </Ancer>
                    </AncerContainer>
                  </CloudDiv>
                </>
              )}

              {index === 1 && (
                <SliderContent>
                  <Swiper
                    breakpoints={{
                      300: {
                        slidesPerView: 2,
                      },

                      768: {
                        slidesPerView: 4,
                      },

                      900: {
                        slidesPerView: 6,
                      },

                      1200: {
                        slidesPerView: 8,
                      },
                    }}
                    spaceBetween={10}
                    loop={true}
                    centeredSlides={true}
                    navigation={{
                      prevEl: ".swiper-button-prev-page",
                      nextEl: ".swiper-button-next-page",
                    }}
                    modules={[Navigation, A11y]}
                    className="swiper_container_page"
                  >
                    {current[0].actorsImage &&
                      current[0].actorsImage.map((image, index) => (
                        <SwiperSlide>
                          {" "}
                          <SlideContainer>
                            <ImageDiv>
                              <img src={image.actor} alt="" />
                            </ImageDiv>
                            <div>{image.name}</div>
                            <div>
                              {" "}
                              <small>{image.act}</small>
                            </div>
                          </SlideContainer>
                        </SwiperSlide>
                      ))}
                    <div className="swiper-button-prev-page">
                      <KeyboardArrowLeftIcon />
                    </div>
                    <div className="swiper-button-next-page">
                      <KeyboardArrowRightIcon />
                    </div>
                  </Swiper>
                </SliderContent>
              )}
              {index === 2 && <NotFound>موردی یافت نشد !</NotFound>}
              {index === 3 && <NotFound>موردی یافت نشد !</NotFound>}
            </DarkInfoBottom>
          </Card>
        ))}
      </PageFooter>
      <Footer />
    </Container>
  );
}

export default Page;
