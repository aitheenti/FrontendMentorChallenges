import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import Input from "./components/Input";
import DisplayCount from "./components/DisplayCount";
import LetterDensity from "./components/LetterDensity";
import CharacterProvider from "./context/CharacterContextProvider";
function App() {
  return (
    <div className="flex flex-col flex-wrap p-5">
      <CharacterProvider>
        <HeaderSection />
        <HeroSection />
        <Input />
        <DisplayCount />
        <LetterDensity />
      </CharacterProvider>
    </div>
  );
}

export default App;
