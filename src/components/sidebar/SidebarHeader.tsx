import { FC, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import homeIcon from '../../assets/icons/homeIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.png';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import useWeatherService from '../../services/weatherService';
import { fetchGeoWeather, fetchWeekWeather } from '../../store/actionCreators';
import { getPosition } from '../../utils/position';

import SidebarInputSuggestions from './SidebarInputSuggestions';
import {
  StyledHeaderButton,
  StyledHeaderInput,
  StyledSidebarHeader,
} from './Styles.sidebarHeader';

interface SidebarHeaderProps {
  units: string;
}

const SidebarHeader: FC<SidebarHeaderProps> = ({ units }) => {
  const [location, setLocation] = useState('');
  const { getWeatherByCity } = useWeatherService();
  const dispatch = useAppDispatch();

  return (
    <StyledSidebarHeader>
      <PlacesAutocomplete
        value={location}
        onChange={setLocation}
        onSelect={() =>
          getWeatherByCity(location, units).then((res) => {
            dispatch(
              fetchWeekWeather(
                res?.coord?.lat as number,
                res?.coord?.lon as number,
                units,
              ),
            );
            dispatch(
              fetchGeoWeather(
                res?.coord?.lat as number,
                res?.coord?.lon as number,
                units,
              ),
            );
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
          getPosition(dispatch, units);
        }}
      >
        <img src={homeIcon} alt="home" />
      </StyledHeaderButton>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;
