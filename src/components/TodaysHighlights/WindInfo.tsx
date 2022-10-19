import { FC } from 'react';
interface WindInfoProps {
  data?: number;
  units: string;
}

const WindInfo: FC<WindInfoProps> = ({ data, units }) => {
  return (
    <div>
      <span>{data}</span>
      {units === 'metric' ? 'km/h' : 'mp/h'}
    </div>
  );
};

export default WindInfo;
