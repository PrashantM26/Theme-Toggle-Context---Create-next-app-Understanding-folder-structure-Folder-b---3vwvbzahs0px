'use client'
import React from 'react';
import { useTheme } from './components/ThemeProvider';


const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
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
