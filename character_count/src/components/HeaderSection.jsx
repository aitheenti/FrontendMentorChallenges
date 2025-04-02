import DarkLogo from "../assets/images/logo-light-theme.svg";
import LightLogo from "../assets/images/logo-dark-theme.svg";
import IconMoon from "../assets/images/icon-moon.svg";
import IconSun from "../assets/images/icon-sun.svg";
import { useContext } from "react";
import CharacterContext from "../context/CharacterContext";
const HeaderSection = () => {
  const { darkMode, toggleDarkMode } = useContext(CharacterContext);

  return (
    <div className="headerSection flex flex-grow justify-between flex-grow-30">
      <img src={darkMode ? LightLogo : DarkLogo} />
      <button onClick={toggleDarkMode} class className="toggleIcon">
        <img src={darkMode ? IconSun : IconMoon} />
      </button>
    </div>
  );
};

export default HeaderSection;
