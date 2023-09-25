'use client'
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext);
};


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

    return (
        <React.Fragment>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              {children}
            </ThemeContext.Provider>
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}





/*import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;*/
