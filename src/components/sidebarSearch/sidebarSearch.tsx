import { useState } from 'react';
import styled from 'styled-components';

import homeIcon from '../../assets/icons/homeIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.png';
import useWeatherService from '../../services/weatherService';

const StyledSidebarSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarInput = styled.input`
  width: 240px;
  background: #f3f3f3 url(${searchIcon}) 5% no-repeat;
  border-radius: 15px;
  outline: none;
  border: none;
  padding: 7px;
  padding-left: 32px;
  ::placeholder {
    color: #969696;
    font-weight: 400;
    font-size: 14px;
  }
`;

const SidebarButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

const SidebarSearch = () => {
  const [cityFromInput, setCityFromInput] = useState('');
  const { getWeatherByCity } = useWeatherService();

  return (
    <StyledSidebarSearch>
      <SidebarInput
        type="text"
        placeholder="search for places ..."
        onChange={(e) => {
          setCityFromInput(e.target.value);
        }}
        onKeyPress={(e) => {
          e.key === 'Enter' ? getWeatherByCity(cityFromInput) : null;
        }}
      />
      <SidebarButton>
        <img src={homeIcon} alt="home" />
      </SidebarButton>
    </StyledSidebarSearch>
  );
};

export default SidebarSearch;
