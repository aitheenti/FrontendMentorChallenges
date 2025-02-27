import React, { useState } from "react";
import CharacterContext from "./CharacterContext";
const CharacterProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [characterLimit, setCharacterLimit] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    countCharacters(value);
    getWordCount(value);
    getSentenceCount(value);
  };

  // onChange
  const countCharacters = (text) => {
    setCharacterCount(text.length);
  };

  const getWordCount = (text) => {
    const matchedTextToArray = text.match(/[a-zA-Z0-9]/g);
    return matchedTextToArray.reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1;
      console.log(acc);
      return acc;
    }, {});
  };

  const getSentenceCount = (text) => {
    // console.log("getSentenceCount", text);
  };

  //get word count of each character
  //get sentence count

  //share the data to the Letter Density component
  //map the word count into column

  return (
    <CharacterContext.Provider
      value={{
        characterCount,
        characterLimit,
        inputValue,
        countCharacters,
        setInputValue,
        handleInputChange,
        setCharacterLimit,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
