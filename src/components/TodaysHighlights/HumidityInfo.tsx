import { FC } from 'react';

interface HumidityInfoProps {
  data?: number;
  children?: JSX.Element;
}

const HumidityInfo: FC<HumidityInfoProps> = ({ data, children }) => {
  return (
    <div>
      <span>{data}</span>%{children}
    </div>
  );
};

export default HumidityInfo;
