'use client'
import React from 'react';
//import { useTheme } from './components/ThemeProvider';
const { theme } = React.useContext(ThemeContext);

const LocalThemedBox = () => {

  const { theme, toggleTheme } = useTheme();
  const toggleLocalTheme = () => {
    toggleTheme();
  };
    
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
      <p className={`txt-${theme}`} id="local-themed-text-container">
        Some Text
      </p>
      <button
        className={`btn btn-${theme}`}
        id="local-theme-toggler"
        onClick={toggleLocalTheme}>
        {theme === 'light'
          ? 'Toggle local theme to dark'
          : 'Toggle local theme to light'}
      </button>
        
    </div>
)
}

export { LocalThemedBox }
