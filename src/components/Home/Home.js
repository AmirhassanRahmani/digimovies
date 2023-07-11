import React from "react";
import Header from "../Header/Header";
import SlickSlider from "../SlickSlider/SlickSlider";
import ProSearch from "../ProSearch/ProSearch";
import Main from "../Main/Main";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import { styled } from "styled-components";

function Home() {
  return (
    <Container>
      <Header />
      <SlickSlider />
      <ProSearch />
      <Main />
      <Logo />
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div``;
