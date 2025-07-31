/** @jsxImportSource @emotion/react */
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import styled from "@emotion/styled";
import { FaSearch, FaTimes } from "react-icons/fa";
import { TextField } from "../../atoms/textField/TextField.tsx";

interface SearchBarProps {
  /** Search bar id */
  id?: string;
  /** Text to search */
  searchedText: string;
  /** Placeholder providing indication inside the text field */
  placeholder?: string;
  /** Aria label for the search button */
  ariaLabelSearchButton?: string;
  /** Aria label for the clear button */
  ariaLabelClearButton?: string;
  /** Boolean to determine if the clear text button should be displayed */
  clearable?: boolean;
  /** Callback function to perform to handle search */
  handleSearch: (searchText: string) => void;
  /** In milliseconds, time after which the search is performed after the user stopped typing */
  debounceTime?: number;
}

const EndAdornmentContainer = styled.button(({ theme }) => ({
  cursor: "pointer",
  color: theme.colors.text.secondary,
  border: "none",
  padding: theme.spacing.sm,
  background: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    background: theme.colors.background.hover,
    borderRadius: "50%",
  },
  "&:focus": {
    background: theme.colors.background.hover,
    outline: `3px solid ${theme.colors.stroke.focus}`,
    borderRadius: "50%",
    border: "none",
  },
}));

/**
 * SearchBar lets users search through content. Debounces input for performance.
 */
export const SearchBar = ({
  id,
  searchedText,
  placeholder,
  ariaLabelSearchButton = "Search text",
  ariaLabelClearButton = "Clear input",
  handleSearch,
  clearable = true,
  debounceTime = 500,
}: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(searchedText);
  }, [searchedText]);

  useEffect(() => {
    const handler = setTimeout(() => {
      handleSearch(inputValue);
    }, debounceTime);
    return () => clearTimeout(handler);
  }, [inputValue, handleSearch, debounceTime]);

  const handleClearInput = () => setInputValue("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(inputValue);
    }
  };

  return (
    <div role="search" aria-label={`search-form-${id}`}>
      <TextField
        id={id}
        ref={inputRef}
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        placeholder={placeholder}
        endAdornment={
          <>
            {clearable && inputValue && (
              <EndAdornmentContainer
                aria-label={ariaLabelClearButton}
                onClick={handleClearInput}
              >
                <FaTimes />
              </EndAdornmentContainer>
            )}
            <EndAdornmentContainer
              aria-label={ariaLabelSearchButton}
              onClick={() => handleSearch(inputValue)}
            >
              <FaSearch />
            </EndAdornmentContainer>
          </>
        }
      />
    </div>
  );
};
