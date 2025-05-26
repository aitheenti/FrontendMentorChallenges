import { useEffect, useState } from "react";

const AppWrapper = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  return (
    <>
      <header className="header fixed z-10 flex justify-between p-6 top-0 w-full dark:bg-[#2b3743] bg-[#fafafa]">
        <h1>Where in the world?</h1>
        <button className="modeSwitcher" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main className="flex-grow pt-35 pb-10 px-15">
        <div className="container mx-auto">{children}</div>
      </main>
    </>
  );
};

export default AppWrapper;
