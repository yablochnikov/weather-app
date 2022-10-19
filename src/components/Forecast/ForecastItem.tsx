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
}

const ForecastItem: FC<ForecastItemProps> = ({
  dayname,
  img,
  alt,
  minTemp,
  maxTemp,
}) => {
  return (
    <StyledForecastItem>
      <p>{dayname}</p>
      <img src={img} alt={alt} />
      <StyledTemperatures className="min__temp">
        {minTemp ? (
          <>
            <StyledMinTemp>{minTemp}&deg;</StyledMinTemp>
            <StyledMaxTemp>{maxTemp}&deg;</StyledMaxTemp>
          </>
        ) : (
          <StyledMaxTemp>{maxTemp}&deg;</StyledMaxTemp>
        )}
      </StyledTemperatures>
    </StyledForecastItem>
  );
};

export default ForecastItem;
