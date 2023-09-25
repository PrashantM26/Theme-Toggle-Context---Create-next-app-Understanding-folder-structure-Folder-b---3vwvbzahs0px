'use client'
import React from 'react';
import { useTheme } from './components/ThemeProvider';
import { LocalThemedBox } from './components/LocalThemedBox';
import { ThemeContext } from './components/ThemeProvider';

const Main = () => {
    const { theme } = useTheme();
    const { toggleTheme } = React.useContext(ThemeContext);
    return(
        <div className={`container bg-${theme}`} id="themed-page">
            <p className={`txt-${theme}`} id="themed-text-container">
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn btn-${theme} txt-${theme}`} id="themed-button">Themed Button</button>
            <LocalThemedBox />
            <button className={`btn btn-${theme} txt-${theme}`} id="global-theme-toggler" onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            </button>
        </div>
    )
}

export { Main }
