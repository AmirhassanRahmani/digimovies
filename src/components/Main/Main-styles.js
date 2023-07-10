import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 9rem;
`;

export const FilmSectionContainer = styled.div`
  max-width: 85%;
  /* max-width: 75%; */
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  @media (max-width: 900px) {
    max-width: 96%;
    margin: 0 auto;
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;

export const RightContainer = styled.div`
  flex-basis: 75%;
`;

export const LeftContainer = styled.div`
  flex-basis: 25%;
`;

export const LeftFirstCol = styled.div`
  background: ${(props) => (props.darkMode ? "#242424" : "#fff")};
  border-radius: 0.8rem;
  padding: 2rem 0.8rem 0.1rem 0.8rem;
`;

export const TitrSlider = styled.section`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  margin-top: 1rem;
  > :last-child {
    font-size: 00.8rem;
  }
`;

export const TopLeftSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 1rem;
  > :first-child {
    color: #eb8307;
    font-size: 2rem !important;
  }
`;

export const LeftSlider = styled.div`
  background: ${(props) => (props.darkMode ? "#242424" : "#fff")};
  border-radius: 0.8rem;
  margin-top: 1.5rem;
  position: relative;
  margin-bottom: 1.5rem;
`;

export const FilmCategories = styled.div`
  background: ${(props) => (props.darkMode ? "#242424" : "#fff")};
  border-radius: 0.8rem;
  margin: 1.5rem 0;
`;

export const SerialCategory = styled.div`
  background: ${(props) => (props.darkMode ? "#242424" : "#fff")};
  border-radius: 0.8rem;
  padding: 0.8rem 0.3rem;
`;

export const Divide = styled.div`
  margin-top: 1rem;
  > * {
    color: ${(props) => (props.darkMode ? "white" : "black")};
  }
`;

export const TopCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  > section {
    color: white;
    > :last-child {
      font-size: 0.8rem;
    }
  }
`;

export const BottomCategory = styled.div`
  padding: 0.8rem 0.3rem;
`;

export const ItemCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const ItemTop = styled.div`
  display: flex;
  align-items: center;
  > :first-child {
    display: flex;
  }
  > * {
    color: ${(props) => (props.darkMode ? "#bebebe" : "black")};
    font-size: 0.85rem;
  }
  cursor: pointer;
  &:hover {
    > :last-child {
      transition: color 0.1s ease;
      color: #eb8307;
    }
  }
`;

export const ItemBottom = styled.div`
  color: #bebebe !important;
  font-size: 0.85rem;
`;

export const CardMovie = styled.div`
  display: flex;
  background: ${(props) => (props.darkMode ? "#242424" : "#fff")};
  box-shadow: 0 0 10px rgba(200, 200, 200, 0.2);
  padding: 1.25rem 1.25rem 0;
  gap: 1rem;
  margin-bottom: 3rem;
  border-radius: 0.8rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Right = styled.div`
  width: 25%;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const RightImage = styled.div`
  width: 100%;
`;

export const ImageSection = styled.img`
  border-radius: 0.625rem;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const SpanLeft = styled.span`
  width: 70%;
  text-align: center;
  font-size: 00.8rem;
  color: ${(props) => (props.darkMode ? "white" : "#000")};
  @media (max-width: 900px) {
    padding: 0.5rem 1rem;
    width: 100%;
  }
`;

export const SpanRight = styled.span`
  display: grid;
  place-items: center;
  width: 30%;
  text-align: center;
  background-color: ${(props) => (props.darkMode ? "#1a1a1a" : "#f2f2f2")};
  padding: 1rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: -2.1rem;
    width: 100px;
    height: 100%;
    background-color: ${(props) => (props.darkMode ? "#1a1a1a" : "#f2f2f2")};
    transform: rotate(-70deg);
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 900px) {
    display: none;
  }
  > * {
    color: #eb8307;
    z-index: 10;
    font-size: 1.5rem !important;
  }
`;

export const RightBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.darkMode ? "#2d2d2d" : "#ccc")};
  overflow: hidden;
  margin: 1rem 0;
  border-radius: 0.625rem;
  cursor: pointer;
  &:hover {
    ${SpanLeft} {
      transition: color 0.2s ease;
      color: #eb8307;
    }
    ${SpanRight} {
      background-color: #eb8307;
      &::before {
        background-color: #eb8307;
      }
      > * {
        color: white !important;
      }
    }
  }
`;

export const Left = styled.div`
  width: 75%;
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Topic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const HeaderFilm = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "#000")};
  font-size: 1.2rem;
  @media (max-width: 900px) {
    margin: 2rem 0;
  }
`;

export const SpanSideIcon = styled.span`
  > :first-child {
    color: #eb8307;
    margin-left: 0.2rem;
  }
`;

export const SpanInfo = styled.span`
  color: ${(props) => (props.darkMode ? "white" : "#000")};
  font-size: 0.82rem;
`;

export const OrangeIcons = styled.div`
  margin: 1rem 0;
  color: white;
  display: flex;
  align-items: center;
  gap: 00.4rem;
  > span {
    display: flex;
  }
`;

export const InfoFilm = styled.div`
  position: relative;
  top: -1.5rem;
`;

export const About = styled.div`
  font-size: 00.75rem;
  color: ${(props) => (props.darkMode ? "white" : "#000")};
  position: relative;
  top: -1rem;
`;

export const LogoSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoSideLeft = styled.div`
  display: grid;
  place-items: center;
`;

export const LogoSideRight = styled.div`
  display: flex;
  align-items: center;
`;

export const HeartIcon = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border: 1px solid
    ${(props) => (props.darkMode ? "rgba(255, 255, 255, 0.3)" : "#000")};
  border-radius: 50%;
  display: grid;
  place-items: center;
  > * {
    color: ${(props) => (props.darkMode ? "white" : "#000")};
  }
`;

export const Plus = styled.div`
  width: 1rem;
  height: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  background: ${(props) => (props.darkMode ? " #3b3b3b" : "#ccc")};
  display: grid;
  place-items: center;
  position: relative;
  right: 0.45rem;
  > * {
    color: orange;
    font-size: 00.9rem !important;
  }
`;

export const Rank = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  text-align: center;
`;

export const Vote = styled.div`
  color: white;
  direction: ltr;
`;

export const Imdb = styled.div`
  color: white;
  font-weight: bold;
  background-color: #eb8307;
  text-align: center;
  border-radius: 00.3rem;
  padding: 0.1rem 0.5rem;
`;

export const SpanNum = styled.span`
  font-size: 1.1rem;
  color: #eb8307;
`;

export const SmallNum = styled.small`
  color: white;
`;

export const Green = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-color: #8bc34a;
  display: grid;
  place-items: center;
  transform: rotate(45deg);
  border-radius: 00.8rem;
  > * {
    transform: rotate(-45deg);
    font-size: 2rem !important;
  }
  transition: all 0.5s ease;
  z-index: 10;
`;

export const DarkDiv = styled.div`
  background-color: #000;
  color: white;
  width: 10.5rem;
  height: 2rem;
  font-size: 00.8rem;
  white-space: nowrap;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
  position: relative;
  transition: all 0.5s ease;
  left: 0.6rem;
  visibility: hidden;
  padding-left: 1rem;
  text-indent: 00.3rem;
  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    background-color: #000;
    position: absolute;
    top: 00.5rem;
    left: -00.5rem;
    transform: rotate(45deg);
  }
`;

export const GreenContainer = styled.div`
  position: absolute;
  top: 35%;
  left: -2.9rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${Green} {
      box-shadow: 0px 0px 13px 5px rgba(34, 139, 34, 0.7);
    }
    ${DarkDiv} {
      left: 1.5rem;
      visibility: visible;
    }
  }
  @media (max-width: 900px) {
    left: 0rem;
  }
  @media (max-width: 540px) {
    display: none;
  }
`;

export const Svg = styled.svg`
  width: 8rem;
  height: 2rem;
  display: block;
  position: relative;
  top: 0.37rem;
  fill: ${(props) => (props.darkMode ? "#000" : "#f2f2f2")};
`;

export const SpanDownload = styled.span`
  position: relative;
  color: white;
  top: -2.2rem;
  right: 3.3rem;
  font-size: 00.8rem;
  > span {
    color: #eb8307;
  }
`;

export const Download = styled.div`
  z-index: 20;
  background-color: #eb8307;
  width: 2rem;
  height: 2rem;
  border-radius: 00.4rem;
  display: grid;
  place-items: center;
  transform: rotate(45deg);
  > * {
    transform: rotate(-45deg);
  }
`;

export const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -5.6rem;
  top: 1rem;
  z-index: 20;
`;

export const PathIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 540px) {
    justify-content: center;
    position: relative;
    left: 3rem;
    margin-top: 1rem;
  }
`;

export const TopSection = styled.div``;

export const TitrSection = styled.section`
  > :last-child {
    font-size: 0.8rem;
  }
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export const RecentMovies = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
  > :first-child {
    color: #eb8307 !important;
    font-size: 2rem !important;
  }
`;

export const CardImage = styled.div`
  box-shadow: inset 0 -100px 80px -10px rgb(0 0 0/25%);
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const ImagePart = styled.div`
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const CaptionPart = styled.div`
  color: white;
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  padding-bottom: 0.3rem;
  > span {
    width: 1.2rem;
    height: 1.2rem;
    background-color: #eb8307;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: normal;
    margin: 0 0.3rem;
  }
`;
