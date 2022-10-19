// eslint-disable-next-line simple-import-sort/imports
import GoogleMapReact from 'google-map-react';
import { FC } from 'react';

import maxTemp from '../../assets/icons/maxTemp.svg';
import minTemp from '../../assets/icons/minTemp.svg';
import sunrise from '../../assets/icons/sunrise.svg';
import sunset from '../../assets/icons/sunset.svg';
import windIcon from '../../assets/icons/wind-icon.png';
import { IWeekForecast } from '../../types/types';
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

interface TodayHighlightsInfoProps {
  weekWeatherData: IWeekForecast;
  visibility: number;
  units: string;
}

const TodayHighlightsInfo: FC<TodayHighlightsInfoProps> = ({
  visibility,
  weekWeatherData,
  units,
}) => {
  const centerCords = {
    lat: weekWeatherData.lat as number,
    lng: weekWeatherData.lon as number,
  };

  visibility = visibility / 1000;

  return (
    <InfoWrapper>
      <DayInfo>
        <DayInfoCard style={{ position: 'relative' }}>
          <CardLabel>UV Index</CardLabel>
          <CardBody>
            <UVInfo
              data={
                weekWeatherData.daily &&
                (weekWeatherData.daily[0].uvi as number)
              }
            >
              <UVIndexChart
                uvIndex={
                  weekWeatherData.daily &&
                  (weekWeatherData.daily[0].uvi as number)
                }
              />
            </UVInfo>
          </CardBody>
        </DayInfoCard>
        <DayInfoCard>
          <CardLabel>Wind status</CardLabel>
          <CardBody>
            <WindInfo
              data={
                weekWeatherData.daily &&
                Math.round(weekWeatherData.daily[0].wind_speed as number)
              }
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
                weekWeatherData.daily &&
                new Date(
                  (weekWeatherData.daily[0].sunrise as number) * 1000,
                ).getHours()
              }
              minutes={
                weekWeatherData.daily &&
                new Date(
                  (weekWeatherData.daily[0].sunrise as number) * 1000,
                ).getMinutes()
              }
            />
            <SunriseSunsetInfo
              img={sunset}
              alt="sunset"
              hours={
                weekWeatherData.daily &&
                new Date(
                  (weekWeatherData.daily[0].sunset as number) * 1000,
                ).getHours()
              }
              minutes={
                weekWeatherData.daily &&
                new Date(
                  (weekWeatherData.daily[0].sunset as number) * 1000,
                ).getMinutes()
              }
            />
          </CardBody>
        </DayInfoCard>
        <DayInfoCard style={{ position: 'relative' }}>
          <CardLabel>Humidity</CardLabel>
          <CardBody>
            <HumidityInfo
              data={weekWeatherData.daily && weekWeatherData.daily[0].humidity}
            ></HumidityInfo>
            <ProgressBarWrapper>
              <ProgressBar
                percent={
                  weekWeatherData.daily && weekWeatherData.daily[0].humidity
                }
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
              data={
                weekWeatherData.daily &&
                Math.round(weekWeatherData.daily[0].temp?.min as number)
              }
            />
            <TemperatureInfo
              img={maxTemp}
              data={
                weekWeatherData.daily &&
                Math.round(weekWeatherData.daily[0].temp?.max as number)
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
            lat={weekWeatherData.lat as number}
            lng={weekWeatherData.lon as number}
          ></Map>
        </GoogleMapReact>
      </MapWrapper>
    </InfoWrapper>
  );
};

export default TodayHighlightsInfo;
