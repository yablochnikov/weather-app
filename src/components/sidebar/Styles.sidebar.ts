import styled from 'styled-components';

export const Content = styled.aside`
  width: 25%;
  background: ${(props) => props.theme.sidebarBg};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.1);
  padding: 30px 25px 40px 25px;
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
`;

export const StyledSidebarDivider = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.additionalGray};
`;

export const StyledSidebarWeatherStatus = styled.div`
  img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const StyledLocation = styled.h2`
  margin-top: 16px;
  font-weight: 500;
  font-size: 28px;
`;
