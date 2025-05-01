import { useEffect, useState } from "react";
import "./index.css";
import extensionsCardData from "./data.json";

const ExtCategories = {
  All: "all",
  Active: "active",
  Inactive: "inactive",
};

function App() {
  const [listData, setListData] = useState(extensionsCardData.data);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [category, setCategory] = useState("all");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
    const darkModeStatus = localStorage.getItem("extensionsTheme");
    if (darkModeStatus === "dark") {
      localStorage.setItem("extensionsTheme", "dark");
    } else {
      localStorage.setItem("extensionsTheme", "light");
    }
  };
  const handleRemoveExtension = (id) => {
    setListData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleToggleExtension = (extensionId) => {
    setListData((prevState) =>
      prevState.map((item) => {
        if (item.id === extensionId) {
          return { ...item, isActive: !item.isActive };
        }
        return item;
      })
    );
  };

  const handleFilterCategory = (filter) => {
    setCategory(filter);
  };

  useEffect(() => {
    setListData(listData);
  }, [listData]);

  return (
    <div className={`appContainer ${isDarkMode ? "dark" : ""}`}>
      <div className="logo-section">
        <img className={`logo`} src={"../assets/images/logo.svg"} alt="logo" />
        <button
          className={`stateButton ${isDarkMode ? "dark" : ""}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <img src="../assets/images/icon-sun.svg" alt="sun" />
          ) : (
            <img src="../assets/images/icon-moon.svg" alt="moon" />
          )}
        </button>
      </div>

      <div className={`completionStates ${isDarkMode ? "dark" : ""}`}>
        <h2>Extension List</h2>
        <div>
          <button
            className={`stateButton ${isDarkMode ? "dark" : ""}`}
            onClick={() => handleFilterCategory(ExtCategories.All)}
          >
            All
          </button>
          <button
            className={`stateButton ${isDarkMode ? "dark" : ""}`}
            onClick={() => handleFilterCategory(ExtCategories.Active)}
          >
            Active
          </button>
          <button
            className={`stateButton ${isDarkMode ? "dark" : ""}`}
            onClick={() => handleFilterCategory(ExtCategories.Inactive)}
          >
            Inactive
          </button>
        </div>
      </div>

      <div className="extensionsListContainer">
        <ul id="extensionsList">
          {listData.length > 0 ? (
            listData
              .filter((item) => {
                if (category === "all") return true;
                if (category === "active") return item.isActive;
                if (category === "inactive") return !item.isActive;
              })
              .map((item) => (
                <div className="extensionCard" key={item.id}>
                  <div className="extensionCardBody">
                    <img src={`${item.logo}`} alt={`image-${item.name}`} />
                    <div
                      className={`extensionCardText ${
                        isDarkMode ? "dark" : ""
                      }`}
                    >
                      <div className="extensionCardHeaderText">{item.name}</div>
                      {item.description}
                    </div>
                  </div>

                  <div className="extensionCardFooter">
                    <button
                      className={`stateButton ${isDarkMode ? "dark" : ""}`}
                      onClick={() => handleRemoveExtension(item.id)}
                    >
                      Remove
                    </button>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={item.isActive}
                        onClick={() => handleToggleExtension(item.id)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              ))
          ) : (
            <h2>No extensions found</h2>
          )}
        </ul>
      </div>

      <div className={`attribution ${isDarkMode ? "dark" : ""}`}>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">NK</a>.
      </div>
    </div>
  );
}

export default App;
