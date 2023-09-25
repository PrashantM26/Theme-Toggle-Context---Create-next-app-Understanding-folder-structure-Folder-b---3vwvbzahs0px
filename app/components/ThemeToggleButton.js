'use client'
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
export {ThemeToggleButton}
