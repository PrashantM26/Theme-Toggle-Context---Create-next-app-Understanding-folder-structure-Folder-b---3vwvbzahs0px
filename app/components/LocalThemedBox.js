/*'use client'
import React from 'react';
//import { useTheme } from './components/ThemeProvider';
import { ThemeContext } from './components/ThemeProvider';

const LocalThemedBox = () => {

  //const { theme, toggleTheme } = useTheme();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const toggleLocalTheme = () => {
    toggleTheme();
  };
    
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line *}
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

export { LocalThemedBox }*/






/*"use client";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
  const [theme] = useContext(ThemeContext);
  const [innerTheme, setInnerTheme] = useState(theme);
  useEffect(() => {
    setInnerTheme(theme);
  }, [theme]);
  return (
    <div
      style={{ width: "200px", height: "200px", border: "2px solid green" }}
      className={`container ${"bg-" + (innerTheme.isLight ? "light" : "dark")}`}
      id="local-themed-box"
    >
      {/* Write code below this line *}
      <p
        id="themed-text-container"
        className={`${"txt-" + (innerTheme.isLight ? "light" : "dark")}`}
      >
        Hiiii
      </p>
      <button
        className={`btn ${"btn-" + (innerTheme.isLight ? "light" : "dark")}`}
        onClick={() => {
          setInnerTheme((old) => {
            return { isLight: !old.isLight };
          });
        }}
      >
        Toggle local theme to {innerTheme.isLight ? "dark" : "light"}
      </button>
    </div>
  );
};

export { LocalThemedBox };*/










//Alok



'use client'
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';

// export const LocalThemeContext = React.createContext({
//     theme: {value : 0},
//     setTheme : ()=>{}
// })
const LocalThemedBox = () => {

    // const [theme,setTheme] = React.useState({value : 0});
    
    // function handleTheme(){
    //     setTheme((oldTheme)=>{
    //         const newTheme = {...oldTheme};
    //         newTheme.value = newTheme.value === 0 ? 1 : 0;
    //         return newTheme;
    //     })
    // }
        const[value,setValue] = useState(true);
        const{theme} = useContext(ThemeContext)
        useEffect(()=>{
            theme ? setValue(true) : setValue(false)
        },[theme])
return(
    // <LocalThemeContext.Provider value={{theme: theme, setTheme: handleTheme}}>
    <div className={value ? 'bg-light':'bg-dark'} style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
        <p id='local-themed-text-container' className={value ? 'txt-light':'txt-dark'}>Hii</p>
        <button id='local-theme-toggler' className={`btn ${value ? "btn-light txt-light" : "btn-dark txt-dark"}`} onClick={()=>{
            setValue(!value)
        }}>Toggle local theme to {value ? 'dark' : "light"}</button>
       
    </div>
    // </LocalThemeContext.Provider>
)
}

export { LocalThemedBox }
