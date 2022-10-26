import { FC } from 'react';

import cloud from '../../assets/icons/cloud.png';
import infoIcon from '../../assets/icons/infoIcon.svg';
import { useAppSelector } from '../../hooks/useTypedSelector';
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

const Sidebar: FC = () => {
  const { weather, weekWeather, units } = useAppSelector(
    (state) => state.weatherReducer,
  );
  const image = `http://openweathermap.org/img/wn/${
    weather.weather?.[0].icon || ''
  }@4x.png`;
  return (
    <Content>
      <SidebarHeader units={units} />
      <SidebarInfo>
        <StyledSidebarImage
          src={image}
          alt={weather.weather?.[0].description || ''}
        />
        <SidebarTemp
          units={units}
          temp={Math.round(weather.main?.temp as number)}
        />

        <StyledLocation>
          {weather.name} <span>,{weather.sys?.country}</span>
        </StyledLocation>

        <SidebarDay weekWeather={weekWeather} />

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
