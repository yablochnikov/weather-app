import { FC } from 'react';

import cloud from '../../assets/icons/cloud.png';
import infoIcon from '../../assets/icons/infoIcon.svg';
import { addZero, toCapitalize } from '../../shared/string';
import { IWeather, IWeekForecast } from '../../types/types';

import {
  StyledSidebarInfo,
  StyledSidebarInfoDivider,
  StyledSidebarInfoImage,
  StyledSidebarInfoLocation,
  StyledSidebarInfoWeatherStatus,
} from './SidebarInfoStyles';

interface SidebarInfoProps {
  weather: IWeather;
  weekWeatherData: IWeekForecast;
  units: string;
}

const SidebarInfo: FC<SidebarInfoProps> = ({
  weather,
  weekWeatherData,
  units,
}) => {
  const date = new Date();

  const image = `http://openweathermap.org/img/wn/${
    weather.weather?.[0].icon || ''
  }@4x.png`;

  const dayName = date.toLocaleString('en-US', {
    timeZone: weekWeatherData.timezone,
    weekday: 'long',
  });

  return (
    <>
      <StyledSidebarInfo>
        <StyledSidebarInfoImage
          src={image}
          alt={weather.weather?.[0].description || ''}
        />
        <StyledSidebarInfoLocation>
          <h1>
            {Math.round(weather.main?.temp as number)}
            &deg;<span>{units === 'metric' ? 'C' : 'F'}</span>
          </h1>
          <h2>
            {weather.name}, {weather.sys?.country}
          </h2>
          <p>
            {dayName},{' '}
            <span>
              {date.toLocaleString('en-US', {
                hour: '2-digit',
                hour12: false,
                timeZone: weekWeatherData.timezone,
              })}
              :{addZero(date.getUTCMinutes())}
            </span>
          </p>
          <StyledSidebarInfoDivider />

          <StyledSidebarInfoWeatherStatus>
            <div>
              <img src={cloud} alt="cloud" />{' '}
              <span>
                {weather.weather?.[0].main || ''} - {weather.clouds?.all}%
              </span>
            </div>
            <div>
              <img src={infoIcon} alt="info" />{' '}
              <span>
                {toCapitalize(weather.weather?.[0].description || '')}
              </span>
            </div>
          </StyledSidebarInfoWeatherStatus>
        </StyledSidebarInfoLocation>
      </StyledSidebarInfo>
    </>
  );
};

export default SidebarInfo;
