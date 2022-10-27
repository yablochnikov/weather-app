import { FC } from 'react';

import visibilityIcon from '../../assets/icons/visibility.png';

import { CardImg } from './Styles.todaysHighlightsInfo';
interface VisibilityInfoProps {
  data: number;
}

const VisibilityInfo: FC<VisibilityInfoProps> = ({ data }) => {
  return (
    <div>
      <span>{data ? data : 'Loading...'}</span>
      km/h
      <CardImg src={visibilityIcon} width={40} height={35} marginTop={8} />
    </div>
  );
};

export default VisibilityInfo;
