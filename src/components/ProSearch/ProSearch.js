import { useContext, useState } from "react";
import listRow from "../../utils/listRow";
import {
  CheckSection,
  Choose,
  Container,
  FilmExpressInfo,
  FirstRow,
  ForthRow,
  Icon,
  Info,
  InfoContent,
  InputCheck,
  InputField,
  InputSection,
  ItemCheck,
  LogoContainer,
  Make,
  OptionCell,
  OptionSection,
  ParaFilm,
  ParaSerial,
  RowContainer,
  SearchBox,
  SearchContainer,
  SecondRow,
  Select,
  SelectSection,
  ShowNum,
  SliderSection,
  Status,
  ThirdRow,
  Title,
  TitleSection,
  Type,
  YearMake,
} from "./ProSearch-syles";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ReactSlider from "react-slider";
import listSecondRow from "../../utils/listSecondRow";
import listThirdRow from "../../utils/listThirdRow";
import listForthRow from "../../utils/listForthRow";
import SearchIcon from "@mui/icons-material/Search";
import { Mode } from "../../App";

function ProSearch() {
  const [value, setValue] = useState([]);
  const [valueTwo, setValueTwo] = useState([]);
  const [select, setSelect] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);
  const { darkMode } = useContext(Mode);

  const handleFilm = () => {
    setSelectTwo(false);
    setSelect(true);
  };

  const handleSerial = () => {
    setSelect(false);
    setSelectTwo(true);
  };
  return (
    <Container>
      <FilmExpressInfo darkMode={darkMode}>
        <LogoContainer darkMode={darkMode}>
          <Icon darkMode={darkMode}>
            <TravelExploreIcon />
          </Icon>
          <SearchBox darkMode={darkMode}>جستجو</SearchBox>
          <Status>حرفه ای</Status>
        </LogoContainer>
        <RowContainer>
          <FirstRow>
            <Type>
              <Info darkMode={darkMode}>نوع</Info>
              <Select darkMode={darkMode}>
                <ParaFilm onClick={handleFilm} select={select} darkMode={darkMode}>
                  فیلم
                </ParaFilm>
                <ParaSerial onClick={handleSerial} selectTwo={selectTwo} darkMode={darkMode}>
                  سریال
                </ParaSerial>
              </Select>
            </Type>
            {listRow.map((item, index) => (
              <Choose key={index}>
                <Title darkMode={darkMode}>{item.title}</Title>
                <InputSection
                  placeholder={item.placeholder}
                  darkMode={darkMode}
                />
              </Choose>
            ))}

            <SliderSection>
              <ShowNum>
                <Make>سال ساخت</Make>
                <YearMake>
                  <div>{value[0]}</div>
                  <div>{value[1]}</div>
                </YearMake>
              </ShowNum>
              {darkMode ? (
                <ReactSlider
                  className="horizontal-slider "
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[1888, 2023]}
                  min={1888}
                  max={2023}
                  onChange={(value) => setValue(value)}
                />
              ) : (
                <ReactSlider
                  className="horizontal-slider "
                  thumbClassName="example-thumb"
                  trackClassName="example-track-light"
                  defaultValue={[1888, 2023]}
                  min={1888}
                  max={2023}
                  onChange={(value) => setValue(value)}
                />
              )}
            </SliderSection>
          </FirstRow>
          <SecondRow>
            {listSecondRow.map((item, index) => (
              <SelectSection>
                <TitleSection darkMode={darkMode}>{item.title}</TitleSection>
                <OptionSection darkMode={darkMode}>
                  {item.options.map((option, index) => (
                    <OptionCell>{option}</OptionCell>
                  ))}
                </OptionSection>
              </SelectSection>
            ))}

            <SliderSection>
              <ShowNum>
                <Make>امتیاز</Make>
                <YearMake>
                  <div>{valueTwo[0]}</div>
                  <div>{valueTwo[1]}</div>
                </YearMake>
              </ShowNum>
              {darkMode ? (
                <ReactSlider
                  className="horizontal-sliderTwo"
                  thumbClassName="example-thumbTwo"
                  trackClassName="example-trackTwo"
                  defaultValue={[1, 10]}
                  min={1}
                  max={10}
                  onChange={(valueTwo) => setValueTwo(valueTwo)}
                  darkMode={darkMode}
                />
              ) : (
                <ReactSlider
                  className="horizontal-sliderTwo"
                  thumbClassName="example-thumbTwo"
                  trackClassName="example-trackTwo-light"
                  defaultValue={[1, 10]}
                  min={1}
                  max={10}
                  onChange={(valueTwo) => setValueTwo(valueTwo)}
                  darkMode={darkMode}
                />
              )}
            </SliderSection>
          </SecondRow>
          <ThirdRow>
            {listThirdRow.map((item, index) => (
              <SelectSection>
                <TitleSection darkMode={darkMode}>{item.title}</TitleSection>
                <OptionSection darkMode={darkMode}>
                  {item.options.map((option, index) => (
                    <OptionCell>{option}</OptionCell>
                  ))}
                </OptionSection>
              </SelectSection>
            ))}
          </ThirdRow>
          <ForthRow>
            <InfoContent>
              {listForthRow.map((item, index) => (
                <CheckSection>
                  <InputCheck type="checkbox" name="" id="" />
                  <ItemCheck darkMode={darkMode}>{item}</ItemCheck>
                </CheckSection>
              ))}
            </InfoContent>
            <SearchContainer darkMode={darkMode}>
              <InputField placeholder="جستجو" darkMode={darkMode} />
              <SearchIcon darkMode={darkMode} />
            </SearchContainer>
          </ForthRow>
        </RowContainer>
      </FilmExpressInfo>
    </Container>
  );
}
export default ProSearch;
