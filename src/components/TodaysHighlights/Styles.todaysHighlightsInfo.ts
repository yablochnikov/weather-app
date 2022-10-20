import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardLabel = styled.h3`
  font-weight: 600;
  font-size: 14px;

  color: ${(props) => props.theme.additionalGray};
`;

interface imageProps {
  height?: number;
  marginTop?: number;
  width?: number;
  marginRight?: number;
}

export const CardImg = styled.img<imageProps>`
  display: block;
  margin-right: ${(props) => props.marginRight}px;
  margin-top: ${(props) => props.marginTop}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const DayInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: inherit;
  width: 200px;
  height: 140px;
  box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.sidebarBg};
  padding: 12px;

  @media (max-width: 1336px) {
  }
  @media (max-width: 1024px) {
    margin-right: 10px;
  }
`;

export const DayInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  justify-content: space-between;
  @media (max-width: 1336px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    justify-content: space-around;
  }
`;

export const MapWrapper = styled.div`
  width: 300px;
  div {
    border-radius: 12px;
  }
  @media (max-width: 1336px) {
    width: 100%;
    height: 300px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  div {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    span {
      font-size: 36px;
      line-height: 42px;
    }
  }
`;

export const ProgressBarWrapper = styled.div`
  background-color: ${(props) => props.theme.sidebarBg};
  width: 100%;
  border: 1px solid ${(props) => props.theme.additionalGray};
  border-radius: 15px;
  padding: 2%;
  margin-top: 15px;
`;

interface ProgressBarProps {
  percent?: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  background-color: ${(props) => props.theme.progressBar};
  width: ${(props) => props.percent}%;
  padding: 5%;
  text-align: right;
  font-size: 20px;
  border-radius: 15px;
`;
