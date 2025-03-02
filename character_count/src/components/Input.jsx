import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";

const Input = () => {
  const {
    characterLimit,
    excludeSpaces,
    inputValue,
    handleInputChange,
    setExcludeSpaces,
    setCharacterLimit,
  } = useContext(CharacterContext);

  return (
    <div className="flex flex-col flex-wrap content-center w-full mt-5 mb-5 p-2">
      <textarea
        className="w-full p-4 border border-black-300 rounded focus:border-blue-500 h-40 bg-[#d9d9d9] "
        maxLength={characterLimit ? 1000 : null}
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
      <div className="flex w-full justify-between pt-2">
        <div className="flex ">
          <div className="p-2">
            <input
              name="excludeSpaces"
              type="checkbox"
              onClick={() => setExcludeSpaces(!excludeSpaces)}
              className="mr-1"
            />
            <label for="excludeSpaces">Exclude Spaces</label>
          </div>
          <div className="p-2">
            <input
              name="characterLimit"
              type="checkbox"
              className="mr-1"
              onClick={() => setCharacterLimit(!characterLimit)}
            />
            <label for="characterLimit">Set Character Limits</label>
          </div>
        </div>
        <div>Approx reading time - 1 minute</div>
      </div>
    </div>
  );
};

export default Input;
