import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";

const Input = () => {
  const { characterLimit, inputValue, handleInputChange } =
    useContext(CharacterContext);

  return (
    <div className="flex flex-col flex-wrap content-center w-full">
      <textarea
        maxLength={characterLimit ? 1000 : null}
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
      <div className="flex w-full justify-between">
        <div>
          <input name="excludeSpaces" type="checkbox" />
          <label for="excludeSpaces">Exclude Spaces</label>
          <input name="characterLimit" type="checkbox" />
          <label for="characterLimit">Set Character Limits</label>
        </div>
        <div>Approx reading time - 1 minute</div>
      </div>
    </div>
  );
};

export default Input;
