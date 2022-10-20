import { FC } from 'react';
import { Suggestion } from 'react-places-autocomplete';

interface SidebarInputSuggestionsProps {
  suggestions: ReadonlyArray<Suggestion>;
}

const SidebarInputSuggestions: FC<SidebarInputSuggestionsProps> = ({
  suggestions,
}) => {
  return (
    <div className="inputSuggestions">
      <datalist id="places">
        {suggestions.map((suggestion) => {
          return (
            <option
              key={suggestion.index}
              value={suggestion.formattedSuggestion.mainText}
            />
          );
        })}
      </datalist>
    </div>
  );
};

export default SidebarInputSuggestions;
