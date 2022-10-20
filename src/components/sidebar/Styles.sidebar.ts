import styled from 'styled-components';

export const Content = styled.aside`
  background: ${(props) => props.theme.sidebarBg};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.1);
  padding: 30px 25px 40px 25px;
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 100px;
    height: 170px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
    height: auto;
  }
`;

export const SidebarInfo = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
  }
  @media (max-width: 768px) {
    justify-content: inherit;
  }
  @media (max-width: 425px) {
    width: 30%;
  }
`;

export const StyledWeatherStatus = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const StyledSidebarInfo = styled.div`
  margin-top: 50px;
`;

export const StyledSidebarImage = styled.img`
  display: block;
  margin: 65px auto 0px;
  -webkit-filter: drop-shadow(0px 0px 10px #000);
  filter: drop-shadow(0px 0px 10px #000);
  @media (max-width: 1025px) {
    margin: 0;
    width: 100px;
    filter: none;
  }
  @media (max-width: 768px) {
    width: 60px;
  }
`;

export const StyledSidebarDivider = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.additionalGray};
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledSidebarWeatherStatus = styled.div`
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StyledLocation = styled.h2`
  margin-top: 16px;
  font-weight: 500;
  font-size: 28px;
  @media (max-width: 1024px) {
    margin-top: 0;
    font-size: 1em;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;
