import { FC, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import homeIcon from '../../assets/icons/homeIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.png';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import useWeatherService from '../../services/weatherService';
import { fetchWeather } from '../../store/actionCreators';
import { getPosition } from '../../utils/position';
import NoCityMatch from '../Toast/NoCityMatch';

import SidebarInputSuggestions from './SidebarInputSuggestions';
import {
  StyledHeaderButton,
  StyledHeaderInput,
  StyledSidebarHeader,
} from './Styles.sidebarHeader';

const SidebarHeader: FC = () => {
  const [location, setLocation] = useState('');
  const { units } = useAppSelector((state) => state.weatherReducer);
  const { getWeatherByCity } = useWeatherService();
  const dispatch = useAppDispatch();
  const [noMatch, setNomatch] = useState(false);

  const renderErrorMessage = () => {
    setTimeout(() => {
      setNomatch(false);
    }, 6300);
    return <>{noMatch && <NoCityMatch />}</>;
  };
  return (
    <StyledSidebarHeader>
      {renderErrorMessage()}

      <PlacesAutocomplete
        value={location}
        onChange={setLocation}
        onSelect={() =>
          getWeatherByCity(location, units).then((res) => {
            res
              ? dispatch(
                  fetchWeather({
                    lat: res?.coord?.lat as number,
                    lon: res?.coord?.lon as number,
                  }),
                )
              : setNomatch(true);
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
          getPosition(dispatch);
        }}
      >
        <img src={homeIcon} alt="home" />
      </StyledHeaderButton>
    </StyledSidebarHeader>
  );
};

export default SidebarHeader;
