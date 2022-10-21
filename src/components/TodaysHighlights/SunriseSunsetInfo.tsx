import { FC } from 'react';
import styled from 'styled-components';

import { addZero } from '../../utils/helpers';

import { CardImg } from './Styles.todaysHighlightsInfo';
interface SunriseSunsetInfoProps {
  img: string;
  alt: string;
  hours?: number;
  minutes?: number;
}

const StyledSunriseSunset = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
`;

const SunriseSunsetInfo: FC<SunriseSunsetInfoProps> = ({
  img,
  alt,
  hours,
  minutes,
}) => {
  return (
    <StyledSunriseSunset>
      <CardImg src={img} alt={alt} marginRight={10} />
      <p>
        {' '}
        {addZero(hours as number)}:{addZero(minutes as number)}
      </p>
    </StyledSunriseSunset>
  );
};

export default SunriseSunsetInfo;
