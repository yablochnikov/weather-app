import { FC } from 'react';

import {
  StyledForecastItem,
  StyledMaxTemp,
  StyledMinTemp,
  StyledTemperatures,
} from './Styles.forecastItem';

interface ForecastItemProps {
  img: string;
  alt?: string;
  dayname: string;
  minTemp?: number;
  maxTemp?: number;
  units: string;
}

const ForecastItem: FC<ForecastItemProps> = ({
  dayname,
  img,
  alt,
  minTemp,
  maxTemp,
  units,
}) => {
  return (
    <StyledForecastItem>
      <p>{dayname}</p>
      <img src={img} alt={alt} />
      <StyledTemperatures className="min__temp">
        {minTemp ? (
          <>
            <StyledMinTemp>
              {Math.round(
                units === 'imperial'
                  ? (minTemp * 9) / 5 + 32
                  : (minTemp as number),
              )}
              &deg;
            </StyledMinTemp>
            <StyledMaxTemp>
              {Math.round(
                units === 'imperial'
                  ? ((maxTemp as number) * 9) / 5 + 32
                  : (maxTemp as number),
              )}
              &deg;
            </StyledMaxTemp>
          </>
        ) : (
          <StyledMaxTemp>
            {units === 'imperial'
              ? Math.round(((maxTemp as number) * 9) / 5 + 32)
              : maxTemp}
            &deg;
          </StyledMaxTemp>
        )}
      </StyledTemperatures>
    </StyledForecastItem>
  );
};

export default ForecastItem;
