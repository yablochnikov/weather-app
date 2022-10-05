import { FC } from 'react';
import styled from 'styled-components';

import { IWeather } from '../../types/types';
import SidebarInfo from '../sidebarInfo/sidebarInfo';
import SidebarSearch from '../sidebarSearch/sidebarSearch';

const StyledSidebar = styled.div`
  width: 330px;
  background: #fff;
  height: 630px;
  box-shadow: 5px 0px 14px rgba(0, 0, 0, 0.1);
  padding: 30px 25px 40px 25px;
`;

interface SidebarProps {
  weather: IWeather;
}

const Sidebar: FC<SidebarProps> = ({ weather }) => {
  return (
    <StyledSidebar>
      <SidebarSearch />
      <SidebarInfo weather={weather} />
    </StyledSidebar>
  );
};

export default Sidebar;
