import { FC } from 'react';

import { IWeather, IWeekForecast } from '../../types/types';

import SidebarInfo from './SidebarInfo';
import SidebarSearch from './SidebarSearch';
import { StyledSidebar } from './SidebarStyles';

interface SidebarProps {
  weather: IWeather;
  setWeather: (weather: IWeather) => void;
  setWeekWeatherData: (weather: IWeekForecast) => void;
  weekWeatherData: IWeekForecast;
  units: string;
}

const Sidebar: FC<SidebarProps> = ({
  units,
  weather,
  setWeather,
  setWeekWeatherData,
  weekWeatherData,
}) => {
  return (
    <StyledSidebar>
      <SidebarSearch
        units={units}
        setWeather={setWeather}
        setWeekWeatherData={setWeekWeatherData}
      />
      <SidebarInfo
        weather={weather}
        weekWeatherData={weekWeatherData}
        units={units}
      />
    </StyledSidebar>
  );
};

export default Sidebar;
