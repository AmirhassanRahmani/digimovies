import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const FilmExpressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 85%;
  /* max-width: 75%; */
  margin: 0 auto;
  background: ${(props) => (props.darkMode ? "#242424" : "#fff")};
  border-radius: 1rem;
  @media (max-width: 880px) {
    max-width: 96%;
    margin: 0 auto;
  }
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  display: grid;
  place-items: center;
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#f0f0f0")};
  border-bottom-left-radius: 4.6rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 13%;
  padding: 1.25rem;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const RowContainer = styled.div`
  width: 88%;
  padding: 1rem 0.9rem;
  /* padding: 1.2rem 2rem; */
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 880px) {
    flex-wrap: wrap;
  }

  @media (max-width: 524px) {
    display: block;
  }

  .horizontal-slider {
    width: 100%;
    height: 50px;
  }
  .horizontal-slider .example-track {
    top: 20px;
    height: 3.5px;
  }
  .example-track.example-track-0 {
    background: rgba(0, 0, 0, 0.3);
  }

  .example-track.example-track-1 {
    background: black;
  }

  .example-track.example-track-2 {
    background: rgba(0, 0, 0, 0.3);
  }

  .horizontal-slider .example-track-light {
    top: 20px;
    height: 3.5px;
  }
  .example-track-light.example-track-light-0 {
    background: black;
  }

  .example-track-light.example-track-light-1 {
    background: #ccc;
  }

  .example-track-light.example-track-light-2 {
    background: black;
  }

  .horizontal-slider .example-thumb {
    width: 0.8rem;
    height: 0.8rem;
    top: 0.9rem;
    background-color: #eb8307;
    transform: rotate(45deg);
    border-radius: 10%;
  }
`;

export const SecondRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 880px) {
    flex-wrap: wrap;
  }

  @media (max-width: 524px) {
    display: block;
  }

  .horizontal-sliderTwo {
    width: 100%;
    height: 50px;
  }
  .horizontal-sliderTwo .example-trackTwo {
    top: 20px;
    height: 3.5px;
  }
  .example-trackTwo.example-trackTwo-0 {
    background: rgba(0, 0, 0, 0.3);
  }

  .example-trackTwo.example-trackTwo-1 {
    background: black;
  }

  .example-trackTwo.example-trackTwo-2 {
    background: rgba(0, 0, 0, 0.3);
  }
  .horizontal-sliderTwo .example-trackTwo-light {
    top: 20px;
    height: 3.5px;
  }
  .example-trackTwo-light.example-trackTwo-light-0 {
    background: black;
  }

  .example-trackTwo-light.example-trackTwo-light-1 {
    background: #ccc;
  }

  .example-trackTwo-light.example-trackTwo-light-2 {
    background: black;
  }
  .horizontal-sliderTwo .example-thumbTwo {
    width: 0.8rem;
    height: 0.8rem;
    top: 0.9rem;
    background-color: #eb8307;
    transform: rotate(45deg);
    border-radius: 10%;
  }
`;

export const ThirdRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 1rem;
  @media (max-width: 880px) {
    gap: 0;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (max-width: 524px) {
    display: block;
  }
`;

export const ForthRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const Icon = styled.div`
  > * {
    color: ${(props) => (props.darkMode ? "white" : "black")};
    font-size: 5rem !important;
  }
`;

export const SearchBox = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  font-size: 00.8rem;
`;

export const Status = styled.div`
  color: #eb8307;
  font-size: 00.8rem;
`;

export const Info = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  font-size: 0.8rem;
  @media (max-width: 524px) {
    margin: 1rem 0;
    text-align: center;
  }
`;

export const ParaFilm = styled.div`
  font-size: 0.8rem;
  background-color: ${(props) => (props.select ? "#eb8307" : "")};
  border-radius: 1rem;
  padding: 0.4rem 0.6rem;
  color: ${(props) => (props.darkMode ? "white" : "#1c1c1c")};
`;

export const ParaSerial = styled.div`
  font-size: 0.8rem;
  background-color: ${(props) => (props.selectTwo ? "#eb8307" : "")};
  border-radius: 1rem;
  padding: 0.4rem 0.6rem;
  color: ${(props) => (props.darkMode ? "white" : "#1c1c1c")};
`;

export const Select = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#ccc")};
  border-radius: 2rem;
  width: 7.5rem;

  padding: 0.55rem 0.6rem;

  @media (max-width: 524px) {
    width: 100%;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 524px) {
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 524px) {
    display: block;
  }
`;

export const Choose = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 524px) {
    display: block;
  }
`;

export const Title = styled.div`
  font-size: 0.8rem;
  color: ${(props) => (props.darkMode ? "white" : "black")};
  @media (max-width: 524px) {
    margin: 1rem 0;
  }
`;

export const InputSection = styled.input`
  border: none;
  outline: none;
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#ccc")};
  border-radius: 2rem;
  width: 10rem;

  padding: 0.55rem 0.6rem;
  @media (max-width: 524px) {
    width: 100%;
  }
`;

export const SliderSection = styled.div`
  width: 23%;
  @media (max-width: 880px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Make = styled.div`
  font-size: 00.8rem;
`;

export const YearMake = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  > div {
    font-size: 00.8rem;
    color: #eb8307;
  }
`;

export const ShowNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  flex-grow: 1;
`;

export const SelectSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 524px) {
    display: block;
  }
`;

export const TitleSection = styled.div`
  font-size: 00.8rem;
  @media (max-width: 524px) {
    display: block;
    margin: 1rem 0;
  }
  color: ${(props) => (props.darkMode ? "#ccc" : "#1c1c1c")};
`;

export const OptionCell = styled.option`
  color: #646464;
`;

export const OptionSection = styled.select`
  border: none;
  outline: none;
  background: ${(props) => (props.darkMode ? "#1c1c1c" : "#ccc")};
  border-radius: 2rem;
  width: 10rem;
  padding: 0.55rem 0.6rem;
  color: #646464;
  @media (max-width: 524px) {
    width: 100%;
  }
`;

export const CheckSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ItemCheck = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  font-size: 0.8rem;
`;

export const InputCheck = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: #007bff;
    border-color: #007bff;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 11rem;
  border-radius: 3rem;
  padding: 0.5rem;
  background-color: ${(props) => (props.darkMode ? "#050505" : "#eb8307")};
  > :last-child {
    color: ${(props) => (props.darkMode ? "#eb8307" : "#fff")};
  }
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  flex-grow: 1;
  width: 8rem;
  &::placeholder {
    color: ${(props) => (props.darkMode ? "#898989" : "#fff")};
    font-family: "IranSans";
    font-size: 0.85rem;
  }
  color: ${(props) => (props.darkMode ? "#898989" : "#000")};

  font-size: 1rem;
`;
