import { FC } from 'react';

import { IWeekForecast } from '../../types/types';

import { StyledHeading1 } from './Styles.sidebarTemp';

interface SidebarTempProps {
  weekWeatherData: IWeekForecast;
  units: string;
  temp: number;
}

const SidebarTemp: FC<SidebarTempProps> = ({ units, temp }) => {
  return (
    <StyledHeading1>
      {Math.round(units === 'imperial' ? (temp * 9) / 5 + 32 : temp)}&deg;
      <span>{units === 'metric' ? 'C' : 'F'}</span>
    </StyledHeading1>
  );
};

export default SidebarTemp;
