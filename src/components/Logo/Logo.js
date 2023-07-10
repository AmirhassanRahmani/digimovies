import React, { useContext } from "react";
import { styled } from "styled-components";
import { Mode } from "../../App";

function Logo() {
  const { darkMode } = useContext(Mode);
  return (
    <Container>
      <SubTopFooter darkMode={darkMode}>
        <svg
          viewBox="0 0 1300 111"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            class="line_2_footer"
            opacity="1.00"
            d=" M 1295.62 0.00 L 1300.00 0.00 L 1300.00 111.00 L 0.00 111.00 L 0.00 104.66 C 108.34 101.74 216.67 98.66 324.97 94.58 C 546.41 86.18 767.86 73.05 987.95 46.68 C 1090.94 34.20 1193.66 19.18 1295.62 0.00 Z"
          ></path>{" "}
        </svg>
      </SubTopFooter>

      <TopFooter darkMode={darkMode}>
        <svg
          viewBox="0 0 1300 74"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            class="line_1_footer"
            opacity="1.00"
            d=" M 991.48 40.69 C 1094.73 30.72 1197.66 17.32 1300.00 0.37 L 1300.00 74.00 L 0.00 74.00 L 0.00 73.00 C 97.66 73.04 195.33 73.00 292.99 72.16 C 526.08 70.14 759.38 63.40 991.48 40.69 Z"
          ></path>{" "}
        </svg>
      </TopFooter>
    </Container>
  );
}

export default Logo;

const Container = styled.div`
  z-index: 5;
  position: relative;
  top: 0.8rem;
  @media (max-width: 1400px) {
    top: 1.3rem;
  }
  @media (max-width: 1240px) {
    top: 1.7rem;
  }
  @media (max-width: 1186px) {
    top: 2.1rem;
  }
  @media (max-width: 1116px) {
    top: 2.8rem;
  }
  @media (max-width: 980px) {
    top: 3.1rem;
  }
  @media (max-width: 910px) {
    display: none;
  }
`;

const TopFooter = styled.div`
  position: absolute;
  top: -5.55rem;
  left: 0;
  width: 100%;
  > svg > :first-child {
    fill: ${(props) => (props.darkMode ? " #1e1e1e" : "#e6e6e6")};
  }
`;
const SubTopFooter = styled.div`
  position: absolute;
  top: -8rem;
  left: 0;
  width: 100%;
  > svg > :first-child {
    fill: ${(props) => (props.darkMode ? "#151515ff" : "#d9d9d9")};
  }
`;
