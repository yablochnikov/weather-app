import { FC } from 'react';
interface WindInfoProps {
  data?: number;
  units: string;
}

const WindInfo: FC<WindInfoProps> = ({ data, units }) => {
  return (
    <div>
      <span>
        {Math.round(
          units === 'imperial'
            ? ((data && data) as number) * 1.6
            : ((data && data) as number),
        ) + ''}
      </span>
      {units === 'metric' ? 'km/h' : 'mp/h'}
    </div>
  );
};

export default WindInfo;
