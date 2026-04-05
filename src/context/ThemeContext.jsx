import { createContext,useContext,useState,useEffect } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({children})=>{
    const [darkMode,setDarkMode] = useState(() => {
  return localStorage.getItem("dark") === "true";
});
    useEffect(()=>{
        if(darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("dark","true");
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("dark","false");
        }
            
    },[darkMode]);
    return (
        <ThemeContext.Provider value = {{darkMode,setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = ()=>useContext(ThemeContext);