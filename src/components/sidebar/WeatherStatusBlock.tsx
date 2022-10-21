import { FC } from 'react';

import { StyledWeatherStatus } from './Styles.sidebar';

interface WeatherStatusBlockProps {
  img: string;
  alt: string;
  text: string;
}

const WeatherStatusBlock: FC<WeatherStatusBlockProps> = ({
  img,
  alt,
  text,
}) => {
  return (
    <StyledWeatherStatus>
      <img src={img} alt={alt} /> <span>{text}</span>
    </StyledWeatherStatus>
  );
};

export default WeatherStatusBlock;
