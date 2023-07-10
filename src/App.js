import { styled } from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";
import SlickSlider from "./components/SlickSlider/SlickSlider";
import ProSearch from "./components/ProSearch/ProSearch";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Logo from "./components/Logo/Logo";
import SwiperSlider from "./components/SwiperSlider/SwiperSlider";

export const Mode = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Container darkMode={darkMode}>
      <Mode.Provider value={{ darkMode, setDarkMode }}>
        <Header />
        <SlickSlider />
        <ProSearch />
        <Main />
        <Logo />
        <Footer />
      </Mode.Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: ${(props) => (props.darkMode ? "#000" : "#f2f2f2")};
  display: flex;
  flex-direction: column;
`;
