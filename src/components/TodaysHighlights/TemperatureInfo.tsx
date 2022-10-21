import { FC } from 'react';
import styled from 'styled-components';

import { CardImg } from './Styles.todaysHighlightsInfo';

interface TemperatureInfoProps {
  img: string;
  data?: number;
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
const TemperatureInfo: FC<TemperatureInfoProps> = ({ img, data }) => {
  return (
    <StyledTemperature>
      <CardImg
        src={img}
        alt="temperature"
        width={15}
        height={40}
        marginRight={10}
      />
      <p>{data}&deg;</p>
    </StyledTemperature>
  );
};

export default TemperatureInfo;
