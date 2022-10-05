import styled from 'styled-components';

const StyledSidebarInfo = styled.div`
  margin-top: 65px;
`;

const StyledSidebarInfoImage = styled.img`
  height: 188px;
  width: 212px;
  display: block;
  margin: auto;
`;

const StyledSidebarInfoLocation = styled.div`
  margin-top: 39px;
  h1 {
    font-weight: 300;
    font-size: 72px;
    position: relative;
    span {
      font-size: 58px;
      position: absolute;
      top: 0;
    }
  }
  h2 {
    margin-top: 16px;
    font-weight: 500;
    font-size: 28px;
  }
  p {
    margin-top: 15px;

    font-weight: 400;
    font-size: 18px;
    span {
      color: #b9b9b9;
      font-weight: 500;
    }
  }
`;

const StyledSidebarInfoDivider = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 1px;
  background-color: #b9b9b9;
`;

const StyledSidebarInfoWeatherStatus = styled.div`
  div {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: start;
    img {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
  }
`;

export const styles = {
  StyledSidebarInfo,
  StyledSidebarInfoImage,
  StyledSidebarInfoLocation,
  StyledSidebarInfoDivider,
  StyledSidebarInfoWeatherStatus,
};
