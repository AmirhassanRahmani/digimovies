import { styled } from "styled-components";

export const Container = styled.div`
  background: ${(props) => (props.darkMode ? "#1e1e1e" : "#f3f3f3")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
  position: relative;
  z-index: 100;
  cursor: pointer;
`;

export const SliderContainer = styled.div`
  width: 40%;
  align-self: start;
  @media (max-width: 910px) {
    width: 100%;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
  z-index: 100;
  @media (max-width: 1010px) {
    width: 96%;
  }
  @media (max-width: 910px) {
    flex-direction: column-reverse;
    width: 100%;
    padding: 1rem;
  }
`;

export const Center = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    cursor: pointer;
    font-size: 0.8rem;
    color: ${(props) => (props.darkMode ? "white" : "black")};
    width: 50%;
    margin-bottom: 0.45rem;
    &:hover {
      transition: color 0.4s ease;
      color: #eb8307;
    }

    @media (max-width: 910px) {
      text-align: right;
      margin-bottom: 0.5rem;
    }
  }
  @media (max-width: 910px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

export const Right = styled.div`
  width: 28%;
  cursor: pointer;
  @media (max-width: 910px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.darkMode ? "#151515" : "#ccc")};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  max-width: 20rem;
  @media (max-width: 910px) {
    max-width: 100%;
  }
`;

export const CardRight = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  > * {
    color: #eb8307;
  }
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0.2rem;
    width: 1px;
    height: 2rem;
    background: #323232;
    transform: rotate(10deg);
  }
`;

export const CardLeft = styled.div`
  width: 70%;
  display: grid;
  place-items: center;
  > :first-child {
    color: white;
    font-size: 0.9rem;
    text-align: center;
  }
  > :last-child {
    color: #eb8307;
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const Warning = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  font-size: 0.8rem;
  width: 90%;
  margin: 0 auto;
`;
