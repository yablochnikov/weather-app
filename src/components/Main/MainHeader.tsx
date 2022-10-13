import { FC } from 'react';

import {
  StyledDaysChange,
  StyledMainHeader,
  StyledMetricChange,
} from './MainHeaderStyles';

interface MainHeaderProps {
  setUnits: (units: string) => void;
  units: string;
  hourlyOrWeekly: string;
  setHourlyOrWeekly: (value: string) => void;
}

const MainHeader: FC<MainHeaderProps> = ({
  setUnits,
  units,
  setHourlyOrWeekly,
  hourlyOrWeekly,
}) => {
  return (
    <StyledMainHeader>
      <StyledDaysChange>
        <button
          onClick={() => setHourlyOrWeekly('hourly')}
          className={hourlyOrWeekly === 'hourly' ? 'active' : ''}
        >
          Today
        </button>
        <button
          onClick={() => setHourlyOrWeekly('weekly')}
          className={hourlyOrWeekly === 'weekly' ? 'active' : ''}
        >
          Week
        </button>
      </StyledDaysChange>
      <StyledMetricChange>
        <button
          onClick={() => setUnits('metric')}
          className={units === 'metric' ? 'active' : ''}
        >
          &deg;C
        </button>
        <button
          onClick={() => setUnits('imperial')}
          className={units === 'imperial' ? 'active' : ''}
        >
          &deg;F
        </button>
      </StyledMetricChange>
    </StyledMainHeader>
  );
};

export default MainHeader;
