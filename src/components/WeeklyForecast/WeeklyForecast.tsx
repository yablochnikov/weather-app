import { FC } from 'react';
import dayjs from 'dayjs';

import { IWeekForecast } from '../../types/types';

import {
  StyledWeeklyForecast,
  WeeklyForecastItem,
} from './WeeklyForecastStyles';

interface WeeklyForecastProps {
  weekWeatherData: IWeekForecast;
  hourlyOrWeekly: string;
}

const WeeklyForecast: FC<WeeklyForecastProps> = ({
  weekWeatherData,
  hourlyOrWeekly,
}) => {
  return (
    <StyledWeeklyForecast>
      {hourlyOrWeekly === 'weekly'
        ? weekWeatherData.daily?.slice(0, 7).map((day, i) => {
            return (
              <WeeklyForecastItem key={i}>
                <p>{dayjs(new Date()).add(i, 'day').format('ddd')}</p>
                <img
                  src={`http://openweathermap.org/img/wn/${
                    day.weather && day.weather[0].icon
                  }.png`}
                  alt={day.weather && day.weather[0].description}
                />
                <div>
                  <span>{Math.round(day.temp?.min as number)}&deg;</span>{' '}
                  <span className="maxTemp">
                    {Math.round(day.temp?.max as number)}&deg;
                  </span>
                </div>
              </WeeklyForecastItem>
            );
          })
        : weekWeatherData.hourly?.slice(0, 7).map((hour, i) => {
            return (
              <WeeklyForecastItem key={i}>
                <p>{new Date((hour.dt as number) * 1000).getHours()}:00</p>
                <img
                  src={`http://openweathermap.org/img/wn/${
                    hour.weather && hour.weather[0].icon
                  }.png`}
                  alt={hour.weather && hour.weather[0].description}
                />
                <div>
                  <span className="minTemp">{Math.round(hour.temp)}</span>
                </div>
              </WeeklyForecastItem>
            );
          })}
    </StyledWeeklyForecast>
  );
};

export default WeeklyForecast;
