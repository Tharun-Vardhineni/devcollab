import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
useEffect(() => {
  const root = document.documentElement;
  if (darkMode) root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
