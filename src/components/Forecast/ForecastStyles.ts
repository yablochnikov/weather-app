import styled from 'styled-components';

interface StyledForecastProps {
  hourlyOrWeekly: string;
}

export const StyledForecast = styled.div<StyledForecastProps>`
  width: 100%;
  min-height: 100px;
  height: 100px;
  margin-top: 10px;
  justify-content: space-between;
  display: ${(props) => (props.hourlyOrWeekly === 'weekly' ? 'flex' : 'block')};
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  white-space: nowrap;
  @media (max-width: 900px) {
    margin: 10 auto;
    display: block;
  }
`;
