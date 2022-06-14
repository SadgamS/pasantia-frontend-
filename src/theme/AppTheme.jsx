// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// themes 
import themeLight from "./theme-light";
import themeDark from "./theme-dark";

// Context
import { useContext } from "react";
import { MaterialUI } from "./context/themeContext";
import { MaterialUIProvider } from "./context/themeProvider";


export const AppTheme = ({ children }) => {
  const { darkMode } = useContext( MaterialUI );  
  return (
    // <MaterialUIProvider>
      // <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <ThemeProvider theme={themeDark}>
          <CssBaseline />
          { children }
      </ThemeProvider>
    // </MaterialUIProvider>
  )
}
