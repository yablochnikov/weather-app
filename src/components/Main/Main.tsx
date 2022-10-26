import { FC } from 'react';

import Forecast from '../Forecast/Forecast';
import TodaysHighlights from '../TodaysHighlights/TodaysHighlights';

import MainHeader from './MainHeader';
import { StyledMain } from './Styles.main';

const Main: FC = () => {
  return (
    <StyledMain>
      <MainHeader />
      <Forecast />
      <TodaysHighlights />
    </StyledMain>
  );
};

export default Main;
