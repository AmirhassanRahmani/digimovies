import { styled } from "styled-components";
import backHeadOne from "../../images/back_one_head.png";
import backHeadTwo from "../../images/back_two_head.webp";

export const Container = styled.div``;

export const BackHeader = styled.div`
  position: relative;
  display: ${(props) => (props.darkMode ? "flex" : "none")};
`;

export const BackLeft = styled.div`
  position: absolute;
  top: -4.3rem;
  left: -5.5rem;
  right: auto;
  width: 49rem;
  height: 43rem;
  background-image: url(${backHeadOne});
  background-repeat: no-repeat;
`;

export const BackRight = styled.div`
  position: absolute;
  top: -12.5rem;
  right: -50rem;
  left: auto;
  width: 70rem;
  height: 38rem;
  background-image: url(${backHeadTwo});
  background-repeat: no-repeat;
`;

export const HeaderTop = styled.div``;

export const HeaderTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 0.3rem;
    flex-wrap: wrap;
  }
`;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 610px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex-grow: 1;
    justify-content: flex-end;
  }
  @media (max-width: 520px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const TopLeft = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 2rem;
  @media (max-width: 610px) {
    flex-grow: 1;
    order: -1;
  }
  @media (max-width: 520px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${(props) => (props.darkMode ? "#252525" : "white")};
  width: 8rem;
  border-radius: 1.188rem;
  height: 2.375rem;
  > * {
    color: ${(props) => (props.darkMode ? "white" : "black")};
  }
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.darkMode ? "#eb8307" : "")};
  }
`;

export const Icon = styled.div`
  display: flex;
`;

export const Info = styled.div`
  font-size: 0.7rem;
  display: flex;
`;

export const ImageContent = styled.div`
  :first-child {
    display: ${(props) => (props.darkMode ? "none" : "block")};
  }
  :nth-child(2) {
    display: ${(props) => (props.darkMode ? "block" : "none")};
  }
`;

export const BrightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  background: ${(props) => (props.darkMode ? "#252525" : "#ccc")};
  width: 5rem;
  height: 2rem;
  border-radius: 3.125rem;
  position: relative;
  cursor: pointer;
  @media (max-width: 344px) {
    margin-bottom: 2rem;
  }
`;

export const Ball = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  border-radius: 50%;
  top: 3.2px;
  transition: left 0.4s ease;
  left: ${(props) => (props.direction ? "3.1rem" : "4px")};
`;

export const HeaderBottom = styled.div`
  background: rgba(252, 255, 255, 0.9);
  background: ${(props) =>
    props.darkMode ? "rgba(34,34,34,.9);" : "rgba(252, 255, 255, 0.9)"};
  box-shadow: 0px 0px 15px 0px rgba(100, 100, 100, 0.1);
  position: relative;
  z-index: 1000;
`;

export const HeaderBottomContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 0;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
    padding: 1.5rem 0.3rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 881px) {
    flex-direction: column;
    padding: 1rem 0.9rem;
  }

  @media (max-width: 520px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    flex-wrap: nowrap;
  }
`;

export const BottomRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-basis: 55%;
  @media (max-width: 1024px) {
    flex-basis: 60%;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media (max-width: 520px) {
    display: none;
  }
`;

export const BottomMiddle = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  place-items: center;
  background-color: ${(props) => (props.darkMode ? "#000" : "#ccc")};
  border-radius: 0.3rem;
  > * {
    color: white;
  }
  @media (max-width: 520px) {
    display: grid;
  }
`;

export const BottomLeft = styled.div`
  background-color: ${(props) => (props.darkMode ? "#050505" : "#ccc")};
  display: flex;
  align-items: center;
  flex-basis: 28%;
  border-radius: 3rem;
  padding: 0 1rem;
  @media (max-width: 1200px) {
    width: 28%;
    padding: 0.7rem;
  }
  @media (max-width: 1024px) {
    flex-basis: 34%;
    padding: 0 0.3rem;
  }

  @media (max-width: 881px) {
    width: 100%;
    padding: 0.7rem;
    margin-top: 0.3rem;
  }

  @media (max-width: 520px) {
    flex-grow: 1;
  }
`;

export const HoverDiv = styled.div`
  position: absolute;
  top: 3rem;
  right: 0;
  width: 100%;
  overflow: hidden;
`;

export const FilmList = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 0.45rem;
  padding: 3rem 1rem 0 1rem;
  background-color: ${(props) =>
    props.darkMode ? "rgba(32, 32, 32, 0.9) " : "rgba(255, 255, 255, 0.9)"};
`;

export const Right = styled.div`
  margin-top: ${(props) => (props.index === 3 ? "10rem" : "0rem")};
`;

export const BallSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0;
`;

export const RightCell = styled.div`
  font-size: 0.8rem;
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export const RightBall = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: orange;
  border-radius: 0.35rem;
`;

export const Left = styled.div`
  margin-top: ${(props) => (props.index === 3 ? "10rem" : "0rem")};
`;

export const Image = styled.div`
  position: relative;
  top: 0.55rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InputSection = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  flex-grow: 1;
  &::placeholder {
    color: ${(props) => (props.darkMode ? "#898989" : "black")};
    font-family: "IranSans";
    font-size: 0.85rem;
  }
  color: ${(props) => (props.darkMode ? "#898989" : "#000")};
  font-size: 1rem;
`;

export const HeaderSliding = styled.div`
  display: none;
  position: fixed;
  top: 0;
  transition: right 0.4s ease;
  right: ${(props) => (props.slide ? "0" : "-100%")};
  width: 85%;
  height: 85%;
  overflow-y: scroll;
  /* background: #050505; */
  background-color: ${(props) => (props.darkMode ? "#050505" : "#ccc")};
  z-index: 10;
  @media (max-width: 520px) {
    display: block;
  }
`;

export const SlideTop = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: end;
  gap: 2rem;
`;

export const SlideIcon = styled.div`
  position: relative;
  top: -1rem;
  left: 0.3rem;
  > * {
    font-size: 2.5rem !important;
  }
`;

export const SlideBottom = styled.div``;
