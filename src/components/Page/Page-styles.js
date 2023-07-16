import { keyframes, styled } from "styled-components";

export const Container = styled.div`
  z-index: 1;
`;

export const ContentContainer = styled.div`
  display: flex;
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Play = styled.div`
  text-align: center;
  color: white;
  background-color: #eb8307;
  width: 8rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const Tray = styled.div`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1.5rem;
  color: #8f8f8f;
`;

export const PlayIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10px;
  transform: rotate(45deg);
  background-color: #eb8307;
  position: absolute;
  bottom: -0.5rem;
  right: 45%;
  > * {
    color: white;
    font-size: 2rem !important;
    transform: rotate(-45deg);
  }
`;

export const ImageSection = styled.div`
  position: relative;
  height: 80%;
  background-image: linear-gradient(170deg, #eb8307, transparent);
  padding: 4px;
  border-radius: 1rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 1rem;
  }
`;

export const Right = styled.div`
  width: 30%;
  z-index: 10;
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
  font-size: 1.5rem;
  @media (max-width: 900px) {
    margin: 2rem 0;
  }
`;

export const LogoSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoSideRight = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 1.4rem;
  font-weight: bold;
  color: #eb8307;
`;

export const SmallNum = styled.small`
  color: white;
`;

export const LogoSideLeft = styled.div`
  display: grid;
  place-items: center;
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
  gap: 0.4rem;
  width: 50%;
  > span {
    display: flex;
  }
`;

export const InfoFilm = styled.div`
  position: relative;
  /* top: -1.5rem; */
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
`;

export const LeftContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  position: relative;
`;

export const About = styled.div`
  font-size: 00.75rem;
  color: ${(props) => (props.darkMode ? "white" : "#000")};
  position: relative;
  top: -1rem;
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
  top: 50%;
  left: 0rem;
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

export const Left = styled.div`
  width: 70%;
`;

export const PeopleVotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PeopleRate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const NumberDiv = styled.div`
  background: ${(props) => props.disColor};
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Mdiv = styled.div`
  color: white;
  background: #000;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-45deg);
  border: 2px solid yellow;
`;

export const RateDiv = styled.div`
  font-size: 00.8rem;
  color: white;
`;

export const Content = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin-top: 4rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  z-index: -1;
`;

export const PageFooter = styled.div`
  width: 85%;
  margin: 2rem auto;
`;

export const InfoSection = styled.div`
  font-size: 0.85rem;
  color: white;
`;

export const SpanDouble = styled.span`
  display: flex;
  align-items: center;
  > * {
    font-size: 2rem !important;
  }
  > :first-child {
    position: relative;
    left: -1.5rem;
  }
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.toggle ? "rotate(-90deg)" : "0deg")};
`;

export const ArrowSection = styled.div``;

export const DarkInfoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DarkInfoBottom = styled.div`
  color: white;
  background: #262626;
  transition: height 0.5s linear;
  display: ${(props) => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  /* overflow-y: hidden;
  transition: height 0.5s linear;
  height: ${(props) => (props.toggle ? "39rem" : "0rem")}; */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom: ${(props) => props.index === 0 && "7.7rem"};
`;

export const DarkInfo = styled.div`
  background: #1d1d1d;
  padding: 0.8rem 1rem;
  border-right: 4px solid #eb8307;
  border-radius: 10px;
  z-index: 10;
`;

export const RigthDownload = styled.div`
  display: flex;
  align-items: center;
  gap: 00.3rem;
  > * {
    display: flex;
  }
  > span {
    font-size: 0.85rem;
  }
`;

export const DirectLink = styled.div`
  font-size: 00.8rem;
  color: white;
  background: #292929;
  border: 2px solid #292929;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.1rem;
  padding: 0.5rem 0.8rem;
  border-radius: 3rem;
  > :first-child > * {
    font-size: 1.3rem !important;
  }
  > * {
    display: flex;
  }
`;

export const Quality = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid #474747;
  border-radius: 3rem;
  padding: 0.5rem 0.8rem;
  > * {
    display: flex;
  }
  > :first-child > * {
    font-size: 1.3rem;
    color: orange;
  }
  > :last-child {
    font-size: 0.8rem;
  }
`;

export const BlackRight = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BlackLeft = styled.div`
  > :first-child {
    color: orange;
    font-weight: bold;
  }
  > :last-child {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.8rem;
  }
`;

export const Black = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
`;

export const SubDownload = styled.div`
  overflow-y: hidden;
  transition: all 0.5s ease-in-out;
  padding: ${(props) => (props.download ? "1rem" : "0rem")};
  height: ${(props) => (props.download ? "18rem" : "0rem")};
  width: 95%;
  margin: 0 auto;
  background: #292929;
`;

export const Download = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  margin-top: 2rem;
  background: #1d1d1d;
  padding: 1rem;
  border-radius: 10px;
`;

export const LeftDownload = styled.div`
  display: flex;
  align-items: center;
  > * {
    font-size: 2rem !important;
  }
  > :first-child {
    position: relative;
    left: -1.5rem;
  }
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.download ? "rotate(-90deg)" : "0deg")};
`;

export const Card = styled.div`
  margin-bottom: 1rem;
`;

export const OrangeDiv = styled.div`
  background: #ff9800;
  text-align: center;
  font-size: 0.95rem;
  color: black;
  width: 97%;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 10px 15px;
  border-radius: 5px;
  > p > span > a {
    padding: 0 0.2rem;
  }
`;

export const CloudDiv = styled.div`
  position: relative;
  width: 97%;
  margin: 0 auto;
  margin-top: 1rem;

  > svg {
    border: 2px solid #ff9800;
    border-radius: 6px;
    background: #2f2f2f;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  }
  > div {
    color: white;
    z-index: 5;
    position: absolute;
    top: 0.5rem;
    left: 35%;
    font-size: 00.8rem;
    text-align: center;
  }
`;

export const AncerAnima = keyframes`
  0%{
    background-color: #fff;
    color: #2c7cbd;
    padding-right: 20px;
    padding-left: 20px;
  }
  50%{
    background-color: #2c7cbd;
    color: #fff;
    padding-right: 40px;
    padding-left: 40px;
    border-color: #84c8ff;
  }
  100%{
    background-color: #fff;
    color: #2c7cbd;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const Ancer = styled.a`
  display: inline-block;
  position: absolute;
  z-index: 5;
  top: 2rem;
  left: 40%;
  font-size: 1rem;
  animation-name: ${AncerAnima};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  overflow: hidden;
  padding: 8px 20px;
  border-radius: 6px;
  transition: 0.2s ease-in-out;
  border: 1px solid #2196f3;
  white-space: nowrap;
`;

export const ImageDiv = styled.div`
  width: 80%;
  height: 8rem;
  margin: 0.2rem auto;

  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
  }
`;

export const SlideContainer = styled.div`
  background: #292929;
  border-radius: 10px;
  text-align: center;
  width: 8.5rem;
  &:hover {
    cursor: pointer;
    > div {
      transition: color 0.3s ease-in-out;
      color: #eb8306;
    }
  }
`;

export const SliderContent = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const NotFound = styled.div`
  padding: 0.8rem;
  font-size: 0.9rem;
`;
