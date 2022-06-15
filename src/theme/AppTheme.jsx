// @mui material components
import { useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// themes 
import themeLight from "./theme-light";
import themeDark from "./theme-dark";

// Context
import { MaterialUI } from "./context/themeContext";

export const AppTheme = ({ children }) => {
  const { darkMode } = useContext( MaterialUI );  
  return (
      <ThemeProvider theme={darkMode ? themeDark: themeLight}>
          <CssBaseline />
          { children }
      </ThemeProvider>
  )
}
