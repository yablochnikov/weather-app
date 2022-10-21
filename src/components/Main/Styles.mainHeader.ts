import styled from 'styled-components';

interface TimeProps {
  hourlyOrWeekly: string;
  time: string;
}

interface MetricProps {
  units: string;
  selectedUnits: string;
}

export const StyledButtonDays = styled.button<TimeProps>`
  font-weight: 600;
  font-size: 22px;
  color: ${(props) =>
    props.hourlyOrWeekly === props.time
      ? `${props.theme.active}`
      : `${props.theme.additionalGray}`};
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const StyledButtonMetric = styled.button<MetricProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  background-color: ${(props) =>
    props.units === props.selectedUnits
      ? `${props.theme.active}`
      : `${props.theme.sidebarBg}`};
  color: ${(props) =>
    props.units === props.selectedUnits
      ? `${props.theme.sidebarBg}`
      : `${props.theme.active}`};
`;

export const StyledMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledDaysChange = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

export const StyledMetricChange = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
`;
