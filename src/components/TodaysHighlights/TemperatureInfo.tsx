import { FC } from 'react';
import styled from 'styled-components';

import { CardImg } from './Styles.todaysHighlightsInfo';

interface TemperatureInfoProps {
  img: string;
  data?: number;
  units: string;
}

const StyledTemperature = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  p {
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
  }
`;
const TemperatureInfo: FC<TemperatureInfoProps> = ({ img, data, units }) => {
  return (
    <StyledTemperature>
      <CardImg
        src={img}
        alt="temperature"
        width={15}
        height={40}
        marginRight={10}
      />
      <p>
        {Math.round(
          units === 'imperial'
            ? ((data as number) * 9) / 5 + 32
            : (data as number),
        )}
        &deg;
      </p>
    </StyledTemperature>
  );
};

export default TemperatureInfo;
