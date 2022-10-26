import { FC } from 'react';
import dayjs from 'dayjs';

import { useAppSelector } from '../../hooks/useTypedSelector';

import ForecastItem from './ForecastItem';
import { StyledForecast } from './ForecastStyles';

const Forecast: FC = () => {
  const { weekWeather, units, hourlyOrWeekly } = useAppSelector(
    (state) => state.weatherReducer,
  );
  return (
    <StyledForecast hourlyOrWeekly={hourlyOrWeekly}>
      {hourlyOrWeekly === 'weekly'
        ? weekWeather.daily?.map((day, i) => {
            return (
              <ForecastItem
                units={units}
                img={`http://openweathermap.org/img/wn/${
                  day.weather && day.weather[0].icon
                }.png`}
                alt={day.weather && day.weather[0].description}
                dayname={dayjs(new Date()).add(i, 'day').format('ddd')}
                minTemp={Math.round(day.temp?.min as number)}
                maxTemp={Math.round(day.temp?.max as number)}
                key={i}
              />
            );
          })
        : weekWeather.hourly?.slice(0, 24).map((hour, i) => {
            return (
              <ForecastItem
                units={units}
                img={`http://openweathermap.org/img/wn/${
                  hour.weather && hour.weather[0].icon
                }.png`}
                alt={hour.weather && hour.weather[0].description}
                dayname={`${new Date(
                  (hour.dt as number) * 1000,
                ).getHours()}:00`}
                maxTemp={Math.round(hour && (hour.temp as number))}
                key={i}
              />
            );
          })}
    </StyledForecast>
  );
};

export default Forecast;
