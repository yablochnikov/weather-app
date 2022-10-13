import { FC, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import homeIcon from '../../assets/icons/homeIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.png';
import useWeatherService from '../../services/weatherService';
import { getPosition } from '../../shared/position';
import { IWeather, IWeekForecast } from '../../types/types';

import {
  SidebarButton,
  SidebarInput,
  StyledSidebarSearch,
} from './SidebarSearchStyles';

interface SidebarSearchProps {
  setWeather: (weather: IWeather) => void;
  setWeekWeatherData: (weather: IWeekForecast) => void;
  units: string;
}

const SidebarSearch: FC<SidebarSearchProps> = ({
  units,
  setWeather,
  setWeekWeatherData,
}) => {
  const [location, setLocation] = useState('');
  const { getWeatherByCity, getWeatherForWeek } = useWeatherService();

  return (
    <StyledSidebarSearch>
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
      >
        {({ getInputProps, suggestions }) => (
          <>
            <SidebarInput
              searchIcon={searchIcon}
              {...getInputProps()}
              list="places"
              type="text"
              placeholder="search for places ..."
            />
            <div>
              <datalist id="places">
                {suggestions.map((suggestion) => {
                  return (
                    <option
                      key={suggestion.id}
                      value={suggestion.formattedSuggestion.mainText}
                    />
                  );
                })}
              </datalist>
            </div>
          </>
        )}
      </PlacesAutocomplete>
      <SidebarButton
        onClick={() => {
          getPosition(setWeather, setWeekWeatherData, units);
        }}
      >
        <img src={homeIcon} alt="home" />
      </SidebarButton>
    </StyledSidebarSearch>
  );
};

export default SidebarSearch;
