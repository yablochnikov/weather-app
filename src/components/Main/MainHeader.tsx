import { FC } from 'react';

import {
  StyledButtonDays,
  StyledButtonMetric,
  StyledDaysChange,
  StyledMainHeader,
  StyledMetricChange,
} from './Styles.mainHeader';

interface MainHeaderProps {
  setUnits: (units: string) => void;
  units: string;
  hourlyOrWeekly: string;
  setHourlyOrWeekly: (value: string) => void;
}

const handleClick = (func: (string: string) => void, string: string) => {
  func(string);
};

const MainHeader: FC<MainHeaderProps> = ({
  setUnits,
  units,
  setHourlyOrWeekly,
  hourlyOrWeekly,
}) => {
  return (
    <StyledMainHeader>
      <StyledDaysChange>
        <StyledButtonDays
          onClick={() => handleClick(setHourlyOrWeekly, 'hourly')}
          hourlyOrWeekly={hourlyOrWeekly}
          time={'hourly'}
        >
          Today
        </StyledButtonDays>
        <StyledButtonDays
          onClick={() => handleClick(setHourlyOrWeekly, 'weekly')}
          time={'weekly'}
          hourlyOrWeekly={hourlyOrWeekly}
        >
          Week
        </StyledButtonDays>
      </StyledDaysChange>
      <StyledMetricChange>
        <StyledButtonMetric
          units={units}
          selectedUnits={'metric'}
          onClick={() => handleClick(setUnits, 'metric')}
        >
          &deg;C
        </StyledButtonMetric>
        <StyledButtonMetric
          units={units}
          selectedUnits={'imperial'}
          onClick={() => handleClick(setUnits, 'imperial')}
        >
          &deg;F
        </StyledButtonMetric>
      </StyledMetricChange>
    </StyledMainHeader>
  );
};

export default MainHeader;
