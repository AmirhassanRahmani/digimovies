import { styled } from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

function SlideItem({ title, dropdown, index, darkMode }) {
  const [id, setId] = useState(null);

  const handleListShow = (index) => {
    if (id === index) {
      return setId(null);
    }
    setId(index);
  };

  return (
    <Container>
      <TopContainer>
        <Right darkMode={darkMode}>{title}</Right>
        {dropdown && (
          <Left onClick={() => handleListShow(index)}>
            <KeyboardArrowDownIcon style={{ color: "orange" }} />
            <KeyboardArrowDownIcon style={{ color: "black" }} />
          </Left>
        )}
      </TopContainer>
      {dropdown && (
        <SubTitle sliding={id === index} darkMode={darkMode}>
          {dropdown.map((cell, index) => (
            <List key={index} darkMode={darkMode}>
              {cell}
            </List>
          ))}
        </SubTitle>
      )}
    </Container>
  );
}

export default SlideItem;

const Container = styled.div``;

const TopContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 3rem;
  /* background-color: black; */
`;

const Right = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  text-indent: 1rem;
`;

const Left = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  width: 3rem;
  height: 100%;
  text-align: center;

  > * {
    font-size: 2rem !important;
  }

  > :first-child {
    position: absolute;
    top: 25%;
    left: 18%;
  }
  > :last-child {
    position: absolute;
    top: 15%;
    left: 18%;
  }
`;

const SubTitle = styled.div`
  display: block;
  width: 100%;
  overflow-y: scroll;
  /* background: rgba(255, 255, 255, 0.1); */
  background: ${(props) =>
    props.darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"};
  z-index: 13;
  transition: height 0.5s ease;
  height: ${(props) => (props.sliding ? "16rem" : "0rem")};
`;

const List = styled.div`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */
  border-bottom: 1px solid
    ${(props) =>
      props.darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0,0,0,.1)"};
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
`;
