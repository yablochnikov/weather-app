import { FC } from 'react';

import cloud from '../../assets/icons/cloud.png';
import infoIcon from '../../assets/icons/infoIcon.svg';
import cloudy from '../../assets/images/cloudy.png';
// import rainy from '../../assets/images/rainy.svg';
// import sunny from '../../assets/images/sunny.svg';
import { IWeather } from '../../types/types';
import { styles } from '../sidebarInfo/sidebarInfoStyles';

interface SidebarInfoProps {
  weather: IWeather;
}

const SidebarInfo: FC<SidebarInfoProps> = ({ weather }) => {
  return (
    <>
      <styles.StyledSidebarInfo>
        <styles.StyledSidebarInfoImage src={cloudy} alt="rain" />
        <styles.StyledSidebarInfoLocation>
          <h1>
            {Math.round(weather.main?.temp as number)}
            &deg;<span>C</span>
          </h1>
          <h2>
            {weather.name}, {weather.sys?.country}
          </h2>
          <p>
            Monday,{' '}
            <span>
              {/* {dateState.getHours()}:{dateState.getMinutes()} */} date
            </span>
          </p>
          <styles.StyledSidebarInfoDivider />

          <styles.StyledSidebarInfoWeatherStatus>
            <div>
              <img src={cloud} alt="cloud" />{' '}
              <span>
                {weather.weather ? weather.weather[0].main : ''} -{' '}
                {weather.clouds?.all}%
              </span>
            </div>
            <div>
              <img src={infoIcon} alt="info" />{' '}
              <span>
                {weather.weather
                  ? weather.weather[0].description[0].toUpperCase() +
                    weather.weather[0].description.slice(1)
                  : ''}
              </span>
            </div>
          </styles.StyledSidebarInfoWeatherStatus>
        </styles.StyledSidebarInfoLocation>
      </styles.StyledSidebarInfo>
    </>
  );
};

export default SidebarInfo;
