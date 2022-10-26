import { FC } from 'react';

import {
  StyledHeading,
  TodayHighlightsWrapper,
} from './Styles.todayHighlights';
import TodayHighlightsInfo from './TodayHighlightsInfo';

const TodaysHighlights: FC = () => {
  return (
    <TodayHighlightsWrapper>
      <StyledHeading>Today’s Highlights</StyledHeading>
      <TodayHighlightsInfo />
    </TodayHighlightsWrapper>
  );
};

export default TodaysHighlights;
