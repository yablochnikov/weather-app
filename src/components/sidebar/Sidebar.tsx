import { FC } from 'react';

import cloud from '../../assets/icons/cloud.png';
import infoIcon from '../../assets/icons/infoIcon.svg';
import { IWeather, IWeekForecast } from '../../types/types';
import { toCapitalize } from '../../utils/helpers';

import SidebarDay from './SidebarDayName';
import SidebarHeader from './SidebarHeader';
import SidebarTemp from './SidebarTemp';
import {
  Content,
  SidebarInfo,
  StyledLocation,
  StyledSidebarDivider,
  StyledSidebarImage,
  StyledSidebarWeatherStatus,
} from './Styles.sidebar';
import WeatherStatusBlock from './WeatherStatusBlock';

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
  const image = `http://openweathermap.org/img/wn/${
    weather.weather?.[0].icon || ''
  }@4x.png`;
  return (
    <Content>
      <SidebarHeader
        units={units}
        setWeather={setWeather}
        setWeekWeatherData={setWeekWeatherData}
      />
      <SidebarInfo>
        <StyledSidebarImage
          src={image}
          alt={weather.weather?.[0].description || ''}
        />
        <SidebarTemp
          units={units}
          weekWeatherData={weekWeatherData}
          temp={Math.round(weather.main?.temp as number)}
        />

        <StyledLocation>
          {weather.name} <span>,{weather.sys?.country}</span>
        </StyledLocation>

        <SidebarDay weekWeatherData={weekWeatherData} />

        <StyledSidebarDivider />

        <StyledSidebarWeatherStatus>
          <WeatherStatusBlock
            img={cloud}
            alt="cloud"
            text={`${weather.weather?.[0].main || ''} - ${
              weather.clouds?.all
            }%`}
          />
          <WeatherStatusBlock
            img={infoIcon}
            alt="info"
            text={`${toCapitalize(weather.weather?.[0].description || '')}`}
          />
        </StyledSidebarWeatherStatus>
      </SidebarInfo>
    </Content>
  );
};

export default Sidebar;
