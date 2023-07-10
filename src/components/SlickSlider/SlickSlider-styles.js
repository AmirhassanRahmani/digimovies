import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
`;

export const SliderContainer = styled.div`
  max-width: 85%;
  /* max-width: 75%; */
  margin: 0 auto;
  .slick-prev::before {
    display: none;
  }
  .slick-next::before {
    display: none;
  }

  @media (max-width: 880px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const ArrowRight = styled.div`
  background-color: ${(props) => (props.darkMode ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 1rem;
  right: 0rem;
  z-index: 3;
  > * {
    color: #ccc;
  }
  @media (max-width: 880px) {
    /* right: 4rem; */
    right: 0rem;
  }
`;

export const ArrowLeft = styled.div`
  background-color: ${(props) => (props.darkMode ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 1rem;
  left: 0rem;
  z-index: 3;
  > * {
    color: #ccc;
  }
  @media (max-width: 880px) {
    /* left: 2rem; */
    left: 0rem;
  }
`;
