// eslint-disable-next-line simple-import-sort/imports
import GoogleMapReact from 'google-map-react';
import { FC } from 'react';

import maxTemp from '../../assets/icons/maxTemp.svg';
import minTemp from '../../assets/icons/minTemp.svg';
import sunrise from '../../assets/icons/sunrise.svg';
import sunset from '../../assets/icons/sunset.svg';
import windIcon from '../../assets/icons/wind-icon.png';
import { useAppSelector } from '../../hooks/useTypedSelector';
import Map from '../Map/Map';
import UVIndexChart from '../UVIndexChart/UVIndexChart';
import HumidityInfo from './HumidityInfo';
import {
  CardBody,
  CardImg,
  CardLabel,
  DayInfo,
  DayInfoCard,
  InfoWrapper,
  MapWrapper,
  ProgressBar,
  ProgressBarWrapper,
} from './Styles.todaysHighlightsInfo';
import SunriseSunsetInfo from './SunriseSunsetInfo';
import TemperatureInfo from './TemperatureInfo';
import UVInfo from './UVInfo';
import VisibilityInfo from './VisibilityInfo';
import WindInfo from './WindInfo';

const TodayHighlightsInfo: FC = () => {
  const { weather, weekWeather, units } = useAppSelector(
    (state) => state.weatherReducer,
  );
  const centerCords = {
    lat: weekWeather.lat as number,
    lng: weekWeather.lon as number,
  };

  const visibility = (weather.visibility as number) / 1000;

  return (
    <InfoWrapper>
      <DayInfo>
        <DayInfoCard style={{ position: 'relative' }}>
          <CardLabel>UV Index</CardLabel>
          <CardBody>
            <UVInfo
              data={weekWeather.daily && (weekWeather.daily[0].uvi as number)}
            >
              <UVIndexChart
                uvIndex={
                  weekWeather.daily && (weekWeather.daily[0].uvi as number)
                }
              />
            </UVInfo>
          </CardBody>
        </DayInfoCard>
        <DayInfoCard>
          <CardLabel>Wind status</CardLabel>
          <CardBody>
            <WindInfo
              data={weekWeather.daily && weekWeather.daily[0].wind_speed}
              units={units}
            />
            <CardImg src={windIcon} width={40} height={25} marginTop={18} />
          </CardBody>
        </DayInfoCard>
        <DayInfoCard>
          <CardLabel>Sunrise & Sunset</CardLabel>
          <CardBody>
            <SunriseSunsetInfo
              img={sunrise}
              alt="sunrise"
              hours={
                weekWeather.daily &&
                new Date(
                  (weekWeather.daily[0].sunrise as number) * 1000,
                ).getHours()
              }
              minutes={
                weekWeather.daily &&
                new Date(
                  (weekWeather.daily[0].sunrise as number) * 1000,
                ).getMinutes()
              }
            />
            <SunriseSunsetInfo
              img={sunset}
              alt="sunset"
              hours={
                weekWeather.daily &&
                new Date(
                  (weekWeather.daily[0].sunset as number) * 1000,
                ).getHours()
              }
              minutes={
                weekWeather.daily &&
                new Date(
                  (weekWeather.daily[0].sunset as number) * 1000,
                ).getMinutes()
              }
            />
          </CardBody>
        </DayInfoCard>
        <DayInfoCard style={{ position: 'relative' }}>
          <CardLabel>Humidity</CardLabel>
          <CardBody>
            <HumidityInfo
              data={weekWeather.daily && weekWeather.daily[0].humidity}
            ></HumidityInfo>
            <ProgressBarWrapper>
              <ProgressBar
                percent={weekWeather.daily && weekWeather.daily[0].humidity}
              />
            </ProgressBarWrapper>
          </CardBody>
        </DayInfoCard>
        <DayInfoCard>
          <CardLabel>Visibility</CardLabel>
          <CardBody>
            <VisibilityInfo data={visibility} />
          </CardBody>
        </DayInfoCard>
        <DayInfoCard>
          <CardLabel>Min & Max temperature</CardLabel>
          <CardBody>
            <TemperatureInfo
              img={minTemp}
              units={units}
              data={
                weekWeather.daily &&
                Math.round(weekWeather.daily[0].temp?.min as number)
              }
            />
            <TemperatureInfo
              img={maxTemp}
              units={units}
              data={
                weekWeather.daily &&
                Math.round(weekWeather.daily[0].temp?.max as number)
              }
            />
          </CardBody>
        </DayInfoCard>
      </DayInfo>
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY as string,
          }}
          defaultCenter={centerCords}
          center={centerCords}
          defaultZoom={13}
        >
          <Map
            lat={weekWeather.lat as number}
            lng={weekWeather.lon as number}
          ></Map>
        </GoogleMapReact>
      </MapWrapper>
    </InfoWrapper>
  );
};

export default TodayHighlightsInfo;
