import { FC } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import GoogleMapReact from 'google-map-react';

import maxTemp from '../../assets/icons/maxTemp.svg';
import minTemp from '../../assets/icons/minTemp.svg';
import sunrise from '../../assets/icons/sunrise.svg';
import sunset from '../../assets/icons/sunset.svg';
import { IWeekForecast } from '../../types/types';
import Map from '../Map/Map';
import UVIndexChart from '../UVIndexChart/UVIndexChart';

import {
  DayInfo,
  DayInfoCard,
  InfoWrapper,
  MapWrapper,
} from './TodaysHighlightsInfoStyles';

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
          <p className="cardLabel">UV Index</p>
          <p className="uv">
            {weekWeatherData.daily &&
              Math.round(weekWeatherData.daily[0].uvi as number)}
          </p>
          <UVIndexChart
            uvIndex={
              weekWeatherData.daily && (weekWeatherData.daily[0].uvi as number)
            }
          />
        </DayInfoCard>
        <DayInfoCard>
          <p className="cardLabel">Wind status</p>
          <p className="cardData">
            {weekWeatherData.daily &&
              Math.round(weekWeatherData.daily[0].wind_speed as number)}
            <span> {units === 'metric' ? 'KM/H' : 'MPH'} </span>
          </p>
        </DayInfoCard>
        <DayInfoCard>
          <p className="cardLabel">Sunrise & Sunset</p>
          <div>
            <img src={sunrise} alt="sunrise" />
            {weekWeatherData.daily &&
              new Date(
                (weekWeatherData.daily[0].sunrise as number) * 1000,
              ).getHours()}
            :
            {weekWeatherData.daily &&
              new Date(
                (weekWeatherData.daily[0].sunrise as number) * 1000,
              ).getMinutes()}
          </div>
          <div>
            <img src={sunset} alt="sunrise" />
            {weekWeatherData.daily &&
              new Date(
                (weekWeatherData.daily[0].sunset as number) * 1000,
              ).getHours()}
            :
            {weekWeatherData.daily &&
              new Date(
                (weekWeatherData.daily[0].sunset as number) * 1000,
              ).getMinutes()}
          </div>
        </DayInfoCard>
        <DayInfoCard>
          <p className="cardLabel">Humidity</p>
          <p className="cardData">
            {weekWeatherData.daily && weekWeatherData.daily[0].humidity}
            <span>%</span>
          </p>
          <ProgressBar
            now={weekWeatherData.daily && weekWeatherData.daily[0].humidity}
          />
        </DayInfoCard>
        <DayInfoCard>
          <p className="cardLabel">Visibility</p>
          <p className="cardData">
            {Math.round(visibility)}
            <span>km/h</span>
          </p>
          <p>{visibility < 3 ? 'Low visibility' : ''}</p>
          <p>{visibility < 6 && visibility > 3 ? 'Medium visibility' : ''}</p>
          <p>{visibility > 6 ? 'High visibility' : ''}</p>
        </DayInfoCard>
        <DayInfoCard>
          <p className="cardLabel">Min & Max temperature</p>
          <div>
            <img src={minTemp} alt="min temperature" />
            <p className="cardData">
              {weekWeatherData.daily &&
                Math.round(weekWeatherData.daily[0].temp?.min as number)}
            </p>
          </div>
          <div>
            <img src={maxTemp} alt="max temperature" />
            <p className="cardData">
              {weekWeatherData.daily &&
                Math.round(weekWeatherData.daily[0].temp?.max as number)}
            </p>
          </div>
        </DayInfoCard>
      </DayInfo>
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBXWOCwPDo2Icl2UrYM0Mgu-Gj1xqcTzlY' }}
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
