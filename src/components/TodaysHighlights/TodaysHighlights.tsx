import { FC } from 'react';

import { IWeekForecast } from '../../types/types';

import {
  StyledHeading,
  TodayHighlightsWrapper,
} from './Styles.todayHighlights';
import TodayHighlightsInfo from './TodayHighlightsInfo';

interface TodaysHighlightsProps {
  weekWeatherData: IWeekForecast;
  visibility: number;
  units: string;
}

const TodaysHighlights: FC<TodaysHighlightsProps> = ({
  weekWeatherData,
  visibility,
  units,
}) => {
  return (
    <TodayHighlightsWrapper>
      <StyledHeading>Today’s Highlights</StyledHeading>
      <TodayHighlightsInfo
        weekWeatherData={weekWeatherData}
        visibility={visibility}
        units={units}
      />
    </TodayHighlightsWrapper>
  );
};

export default TodaysHighlights;
