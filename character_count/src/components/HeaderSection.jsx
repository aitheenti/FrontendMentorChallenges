import Logo from "../assets/images/logo-light-theme.svg";
import DarkModeToggleButton from "../assets/images/icon-moon.svg";
import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
const HeaderSection = () => {
  const { toggleDarkMode } = useContext(CharacterContext);

  return (
    <div className="flex justify-between ">
      <img src={Logo} />
      <button onClick={toggleDarkMode}>
        <img src={DarkModeToggleButton} />
      </button>
    </div>
  );
};

export default HeaderSection;
