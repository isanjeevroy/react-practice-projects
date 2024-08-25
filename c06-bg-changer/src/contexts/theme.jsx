import { createContext, useContext, useState, useEffect } from "react"

// creation
export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => { },
  lightMode: () => { }
})


// provider
export function ThemeContextProvider({ children }) {

  const [themeMode, setThemeMode] = useState("light");

  const lightMode = () => {
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);

  }, [themeMode])

  const value = { themeMode, lightMode, darkMode }


  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// custom hook t context
export default function useTheme() {
  return useContext(ThemeContext)
}