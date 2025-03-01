import React, { useState } from "react";
import CharacterContext from "./CharacterContext";
const CharacterProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [characterLimit, setCharacterLimit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [letterDensitySet, setLetterDensitySet] = useState([]);
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [displayAllLetterDensities, setDisplayAllLetterDensities] =
    useState(false);
  const [state, setState] = useState({
    totalCharacterCount: 0,
    sentenceCount: 0,
    wordCount: 0,
  });
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    getLetterDensity(value);
    getUpdatedCharacterInfo(value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const getUpdatedCharacterInfo = (text) => {
    if (text.trim() === "") {
      setState({
        ...state,
        totalCharacterCount: 0,
        wordCount: 0,
        sentenceCount: 0,
      });
      return;
    }

    const excludeSpacesText = text.split(/\s+/).join("");
    setState({
      ...state,
      totalCharacterCount: excludeSpaces
        ? excludeSpacesText.length
        : text.length,
      wordCount: text?.trim().split(" ").length,
      sentenceCount: text?.trim().split(". ").length,
    });
  };

  const getLetterDensity = (text) => {
    const matchedTextToArray = text.match(/[a-zA-Z0-9]/g);
    if (!matchedTextToArray) {
      setLetterDensitySet([]);
      return [];
    }

    const letterDensitySet = matchedTextToArray?.reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1;
      return acc;
    }, {});

    const getLetterDensityArray = Object.entries(letterDensitySet)?.map(
      (key, value) => {
        const count = value;
        const percentage =
          ((count / matchedTextToArray.length) * 100).toFixed(2) + "%";
        return {
          letter: key,
          count,
          percentage,
        };
      }
    );

    setLetterDensitySet(getLetterDensityArray);
    return getLetterDensityArray;
  };

  return (
    <CharacterContext.Provider
      value={{
        state,
        setState,
        darkMode,
        characterLimit,
        inputValue,
        letterDensitySet,
        displayAllLetterDensities,
        excludeSpaces,
        setExcludeSpaces,
        setDisplayAllLetterDensities,
        getLetterDensity,
        setInputValue,
        handleInputChange,
        setCharacterLimit,
        toggleDarkMode,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
