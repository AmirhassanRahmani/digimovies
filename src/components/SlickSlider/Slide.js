import React from "react";
import { styled } from "styled-components";

function Slide({ cell }) {
  return (
    <Container>
      <img src={cell} alt="" />
    </Container>
  );
}

export default Slide;

const Container = styled.div`
  width: 100%;
  height: 20rem;
  margin: 0 auto;
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
