import { FC } from 'react';
import styled from 'styled-components';

import { IWeekForecast } from '../../types/types';

import TodayHighlightsInfo from './TodayHighlightsInfo';

interface TodaysHighlightsProps {
  weekWeatherData: IWeekForecast;
  visibility: number;
  units: string;
}

const TodayHighlightsWrapper = styled.div`
  margin-top: 50px;
  h1 {
    font-weight: 600;
    font-size: 18px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const TodaysHighlights: FC<TodaysHighlightsProps> = ({
  weekWeatherData,
  visibility,
  units,
}) => {
  return (
    <TodayHighlightsWrapper>
      <h1>Today’s Highlights</h1>
      <TodayHighlightsInfo
        weekWeatherData={weekWeatherData}
        visibility={visibility}
        units={units}
      />
    </TodayHighlightsWrapper>
  );
};

export default TodaysHighlights;
