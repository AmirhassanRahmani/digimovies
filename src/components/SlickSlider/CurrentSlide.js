import React from "react";
import { styled } from "styled-components";

function CurrentSlide({ item, index }) {
  return (
    <Container>
      <Right>
        <img src={item.right} alt="" />
      </Right>
      <Middle>
        <img src={item.middle} alt="" />
      </Middle>
      <Left>
        <img src={item.left} alt="" />
      </Left>
    </Container>
  );
}

export default CurrentSlide;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Right = styled.div`
  flex-basis: 18%;
  height: 19rem;
  > img {
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media (max-width: 521px) {
    flex-basis: 30%;
    height: 13rem;
  }
`;

const Middle = styled.div`
  flex-basis: 65%;
  height: 30rem;
  transform: scale(1.01);
  z-index: 5;
  > img {
    border-radius: 0.8rem;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media (max-width: 521px) {
    flex-basis: 55%;
    height: 20rem;
  }
`;

const Left = styled.div`
  flex-basis: 18%;
  height: 19rem;
  > img {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media (max-width: 521px) {
    flex-basis: 30%;
    height: 13rem;
  }
`;
