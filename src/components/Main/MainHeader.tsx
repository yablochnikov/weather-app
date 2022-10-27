import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { weatherSlice } from '../../store/slices/weather';

import {
  StyledButtonDays,
  StyledButtonMetric,
  StyledDaysChange,
  StyledMainHeader,
  StyledMetricChange,
} from './Styles.mainHeader';

const MainHeader: FC = () => {
  const { units, hourlyOrWeekly } = useAppSelector(
    (state) => state.weatherReducer,
  );

  const dispatch = useAppDispatch();

  return (
    <StyledMainHeader>
      <StyledDaysChange>
        <StyledButtonDays
          onClick={() =>
            dispatch(weatherSlice.actions.setHourlyOrWeekly('hourly'))
          }
          hourlyOrWeekly={hourlyOrWeekly}
          time={'hourly'}
        >
          Today
        </StyledButtonDays>
        <StyledButtonDays
          onClick={() =>
            dispatch(weatherSlice.actions.setHourlyOrWeekly('weekly'))
          }
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
          onClick={() => dispatch(weatherSlice.actions.setUnits('metric'))}
        >
          &deg;C
        </StyledButtonMetric>
        <StyledButtonMetric
          units={units}
          selectedUnits={'imperial'}
          onClick={() => dispatch(weatherSlice.actions.setUnits('imperial'))}
        >
          &deg;F
        </StyledButtonMetric>
      </StyledMetricChange>
    </StyledMainHeader>
  );
};

export default MainHeader;
