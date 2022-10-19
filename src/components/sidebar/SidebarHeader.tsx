import { FC, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import homeIcon from '../../assets/icons/homeIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.png';
import useWeatherService from '../../services/weatherService';
import { IWeather, IWeekForecast } from '../../types/types';
import { getPosition } from '../../utils/position';

import SidebarInputSuggestions from './SidebarInputSuggestions';
import {
  StyledHeaderButton,
  StyledHeaderInput,
  StyledSidebarHeader,
} from './Styles.sidebarHeader';

interface SidebarHeaderProps {
  setWeather: (weather: IWeather) => void;
  setWeekWeatherData: (weather: IWeekForecast) => void;
  units: string;
}

const SidebarHeader: FC<SidebarHeaderProps> = ({
  units,
  setWeather,
  setWeekWeatherData,
}) => {
  const [location, setLocation] = useState('');
  const { getWeatherByCity, getWeatherForWeek } = useWeatherService();

  return (
    <StyledSidebarHeader>
      <PlacesAutocomplete
        value={location}
        onChange={setLocation}
        onSelect={() =>
          getWeatherByCity(location, units).then((res) => {
            getWeatherForWeek(
              res?.coord?.lat as number,
              res?.coord?.lon as number,
              units,
            ).then((res) => {
              res && setWeekWeatherData(res);
            });
            res ? setWeather(res) : null;
          })
        }
        searchOptions={{ types: ['locality', 'country'] }}
      >
        {({ getInputProps, suggestions }) => (
          <>
            <StyledHeaderInput
              searchIcon={searchIcon}
              {...getInputProps()}
              list="places"
              type="text"
              placeholder="search for places..."
            />

            <SidebarInputSuggestions suggestions={suggestions} />
          </>
        )}
      </PlacesAutocomplete>
      <StyledHeaderButton
        onClick={() => {
          getPosition(setWeather, setWeekWeatherData, units);
        }}
      >
        <img src={homeIcon} alt="home" />
      </StyledHeaderButton>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;
