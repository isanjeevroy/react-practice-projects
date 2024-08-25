import { createContext, useContext } from "react"

// creation
export const ThemeContext = createContext({
    themeMode:"light",
    darkMode:()=>{},
    lightMode:()=>{}
})

// provider
export const ThemeContextProvider = ThemeContext.Provider

// custom hook to consume context
export default function useTheme(){
    return useContext(ThemeContext)
}