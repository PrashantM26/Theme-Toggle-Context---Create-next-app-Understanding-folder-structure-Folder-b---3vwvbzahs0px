/*'use client'
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext()

/*export const useTheme = () => {
  return useContext(ThemeContext);
};*


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

export {ThemeProvider,ThemeContext}*/




















/*"use client";
import React, { useState } from "react";

const initialTheme = { isLight: true };
// this is called a hoc
const ThemeContext = React.createContext(initialTheme);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };*/








//Alok

'use client'
import React,{useState} from 'react';

const ThemeContext = React.createContext({
    theme: true,
    setTheme : ()=>{}
})
const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState(true);

    function handleTheme(){
        setTheme(!theme)
    }
    return (
        <ThemeContext.Provider value={{theme:theme, setTheme: handleTheme}}>
            <React.Fragment>
                {children}
            </React.Fragment>
        </ThemeContext.Provider>
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
