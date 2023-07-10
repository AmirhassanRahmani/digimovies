import React, { useContext } from "react";
import {
  Center,
  Container,
  FooterContainer,
  Right,
  Card,
  CardRight,
  CardLeft,
  SliderContainer,
  Warning,
} from "./Footer-styles";
import Slider from "./Slider";
import listCenter from "../../utils/listCenter";
import listRightFooter from "../../utils/listRightFooter";
import { Mode } from "../../App";

function Footer() {
  const { darkMode } = useContext(Mode);
  return (
    <Container darkMode={darkMode}>
      <FooterContainer>
        <SliderContainer>
          <Slider darkMode={darkMode}/>
        </SliderContainer>

        <Center darkMode={darkMode}>
          {listCenter.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </Center>

        <Right>
          {listRightFooter.map((item, index) => (
            <Card darkMode={darkMode}>
              <CardRight>{item.icon}</CardRight>
              <CardLeft>
                <div>{item.title}</div>
                <div>{item.subTilte}</div>
              </CardLeft>
            </Card>
          ))}
        </Right>
      </FooterContainer>
      <Warning darkMode={darkMode}>
        {" "}
        تمامی حقوق مادی و معنوی این وبسایت محفوظ می باشد و کپی برداری به هر نحوه
        پیگرد قانونی خواهد داشت
      </Warning>
    </Container>
  );
}

export default Footer;
