import { FC } from 'react';
import styled from 'styled-components';

import { IWeekForecast } from '../../types/types';
import { addZero } from '../../utils/helpers';
interface SidebarDayNameProps {
  weekWeather: IWeekForecast;
}

const StyledDay = styled.p`
  margin-top: 15px;
  font-weight: 400;
  font-size: 18px;

  span {
    color: ${(props) => props.theme.additionalGray};
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    margin-top: 0;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

const SidebarDay: FC<SidebarDayNameProps> = ({ weekWeather }) => {
  const date = new Date();

  const dayName = date.toLocaleString('en-US', {
    timeZone: weekWeather.timezone,
    weekday: 'long',
  });
  return (
    <StyledDay>
      {dayName},{' '}
      <span>
        {date.toLocaleString('en-US', {
          hour: '2-digit',
          hour12: false,
          timeZone: weekWeather.timezone,
        })}
        :{addZero(date.getUTCMinutes())}
      </span>
    </StyledDay>
  );
};

export default SidebarDay;
