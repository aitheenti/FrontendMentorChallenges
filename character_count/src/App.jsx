import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import Input from "./components/Input";
import Card from "./components/Card";
import LetterDensity from "./components/LetterDensity";
import CharacterProvider from "./context/CharacterContextProvider";
function App() {
  return (
    <div className="flex flex-col flex-wrap p-5">
      <CharacterProvider>
        <HeaderSection />
        <HeroSection />
        <Input />
        <Card />
        <LetterDensity />
      </CharacterProvider>
    </div>
  );
}

export default App;
