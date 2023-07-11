import { styled } from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;
`;

export const ImageSection = styled.div`
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
  }
`;

export const Para = styled.div`
  font-size: 00.8rem;
  color: white;
  position: absolute;
  bottom: 2.3rem;
  right: 2rem;
  @media (max-width: 910px) {
    bottom: 3.5rem;
  }
  @media (max-width: 550px) {
    bottom: 2.5rem;
  }
  @media (max-width: 407px) {
    bottom: 2rem;
    font-size: 0.6rem;
  }
`;
