import styled from 'styled-components';

export const StyledWeeklyForecast = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const WeeklyForecastItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  width: 80px;
  height: 100px;
  background-color: #fff;
  border-radius: 15px;
  text-align: center;
  padding-top: 16px;
  img {
    margin: 10px 0 10px 0;
    width: 24px;
    height: 24px;
  }
  .maxTemp {
    color: #b9b9b9;
  }
`;
