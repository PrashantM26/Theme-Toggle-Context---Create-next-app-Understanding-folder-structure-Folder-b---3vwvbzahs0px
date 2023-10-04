/*'use client'
import React from 'react';
//import { useTheme } from './components/ThemeProvider';
import { ThemeContext } from './components/ThemeProvider';


const ThemeToggleButton = () => {
    //const { theme, toggleTheme } = useTheme();
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    const toggleGlobalTheme = () => {
    toggleTheme();
    };
    
    return (
        <button
          className={`btn btn-${theme} txt-${theme}`}
          id="global-theme-toggler"
          onClick={toggleGlobalTheme}>
          {theme === 'light'
            ? 'Switch to dark theme'
            : 'Switch to light theme'}
        </button>
    )

}
export {ThemeToggleButton}*/













"use client";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <button
      className={`btn ${"btn-" + (theme.isLight ? "light" : "dark")}`}
      onClick={() => {
        setTheme((old) => {
          return { isLight: !old.isLight };
        });
      }}
    >
      Switch to {theme.isLight ? "dark" : "light"} theme
    </button>
  );
};
export { ThemeToggleButton };
