import Logo from "../assets/images/logo-light-theme.svg";
import DarkModeToggleButton from "../assets/images/icon-moon.svg";
const HeaderSection = () => {
  console.log("Header section");
  return (
    <div className="flex justify-between ">
      <img src={Logo} />
      <img src={DarkModeToggleButton} />
    </div>
  );
};

export default HeaderSection;
