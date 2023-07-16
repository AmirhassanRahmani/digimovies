import { styled } from "styled-components";
import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Page from "./components/Page/Page";
export const Mode = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Container darkMode={darkMode}>
      <Mode.Provider value={{ darkMode, setDarkMode }}>
        <BrowserRouter>
          <Routes>
            <Route path="/digimovies" element={<Home />}></Route>
            <Route path={`/page/:id`} element={<Page darkMode={darkMode}/>}></Route>
          </Routes>
        </BrowserRouter>
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
