import { FC } from 'react';

import { IWeekForecast } from '../../types/types';
import TodaysHighlights from '../TodaysHighlights/TodaysHighlights';
import WeeklyForecast from '../WeeklyForecast/WeeklyForecast';

import MainHeader from './MainHeader';
import { StyledMain } from './MainStyles';

interface MainProps {
  weekWeatherData: IWeekForecast;
  visibility: number;
  setUnits: (units: string) => void;
  units: string;
  hourlyOrWeekly: string;
  setHourlyOrWeekly: (value: string) => void;
}

const Main: FC<MainProps> = ({
  weekWeatherData,
  visibility,
  setUnits,
  units,
  hourlyOrWeekly,
  setHourlyOrWeekly,
}) => {
  return (
    <StyledMain>
      <MainHeader
        setUnits={setUnits}
        units={units}
        hourlyOrWeekly={hourlyOrWeekly}
        setHourlyOrWeekly={setHourlyOrWeekly}
      />
      <WeeklyForecast
        weekWeatherData={weekWeatherData}
        hourlyOrWeekly={hourlyOrWeekly}
      />
      <TodaysHighlights
        weekWeatherData={weekWeatherData}
        visibility={visibility}
        units={units}
      />
    </StyledMain>
  );
};

export default Main;
