import React, { createContext, useState } from "react";
// import { useTheme } from "./ThemeContext";
import Sports from "./components/Sports";
import Collection from "./components/Collection";
import SwitchToggle from "./components/SwitchToggle";
import "./App.css";

export const ThemeContext = createContext("light");
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <SwitchToggle func={toggleTheme} name={theme} />
        <Sports className = "Sport"/>
        <br />
        <br />
        <Collection className = "Collection"/>
        {/* <Sample/> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
