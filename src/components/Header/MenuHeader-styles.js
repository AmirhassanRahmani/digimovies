import { styled } from "styled-components";

export const MenuIcon = styled.div`
  display: flex;
  > * {
    color: #eb8307;
    font-size: 1.8rem !important;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    ${MenuIcon} {
      transform: scale(1.2);
    }
  }
`;

export const MenuInfo = styled.div``;

export const Top = styled.div`
  font-size: 0.75rem;
  display: flex;
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export const Bottom = styled.div`
  font-size: 0.75rem;
  color: #eb8307;
  display: flex;
`;
