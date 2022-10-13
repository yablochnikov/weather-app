import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DayInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: inherit;
  width: 200px;
  height: 140px;
  box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background-color: #fff;
  padding: 12px;
  .uv {
    font-weight: 600;
    font-size: 36px;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
    position: absolute;
    bottom: 15px;
  }
  .cardLabel {
    font-weight: 600;
    font-size: 14px;

    color: #b9b9b9;
  }
  .cardData {
    font-weight: 400;
    font-size: 36px;
    span {
      font-size: 14px;
      line-height: 16px;
    }
  }
  div {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
    }
  }
  .progress {
    padding: 5px;
    border-radius: 25px;
    border: 1px solid #c4c4c4;
  }
  .progress-bar {
    margin: 0%;
    width: 100%;
    height: 15px;
    border-radius: 15px;
    background-color: #4251d2;
  }
`;

export const DayInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  justify-content: space-between;
`;

export const MapWrapper = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0px 4px 14px -4px rgba(0, 0, 0, 0.25);
  div {
    border-radius: 12px;
  }
`;
