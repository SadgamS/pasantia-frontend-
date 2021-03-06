import { useReducer } from 'react';
import { MaterialUI } from './themeContext';
import { themeReducer } from './themeReducer';

// Initial State 
const init = () => {
    let darkMode = false;
    if (localStorage.getItem('darkMode') !== undefined && localStorage.getItem('darkMode') === 'true') {
      darkMode = true;
    }
    
    return {
      miniSidenav: false,
      transparentSidenav: false,
      whiteSidenav: false,
      sidenavColor: "info",
      transparentNavbar: false,
      fixedNavbar: false,
      openConfigurator: false,
      layout: "dashboard",
      darkMode: darkMode,
    }
} 


export const MaterialUIProvider = ({children}) => {
  
  const [themeState, dispatch] = useReducer(themeReducer, {},init);

  // Context module functions
    const setMiniSidenav = (value) => {dispatch({ type: "MINI_SIDENAV", value });}
    const setTransparentSidenav = (value) => {dispatch({ type: "TRANSPARENT_SIDENAV", value });}
    const setWhiteSidenav = (value) => {dispatch({ type: "WHITE_SIDENAV", value });}
    const setSidenavColor = (value) => {dispatch({ type: "SIDENAV_COLOR", value });}
    const setTransparentNavbar = (value) => {dispatch({ type: "TRANSPARENT_NAVBAR", value });}
    const setFixedNavbar = (value) => {dispatch({ type: "FIXED_NAVBAR", value });}
    const setOpenConfigurator = (value) => {dispatch({ type: "OPEN_CONFIGURATOR", value });}
    const setLayout = (value) => {dispatch({ type: "LAYOUT", value });}
    const setDarkMode = (value) => {
      localStorage.setItem('darkMode', value);
      dispatch({ type: "DARKMODE", value });
    }
  
    return (
    <MaterialUI.Provider value={{
        ...themeState,
        setMiniSidenav,
        setTransparentNavbar,
        setTransparentSidenav,
        setLayout,
        setFixedNavbar,
        setOpenConfigurator,
        setSidenavColor,
        setWhiteSidenav,
        setDarkMode
    }}>
        { children }
    </MaterialUI.Provider>
  )
}



// // Material Dashboard 2 React context provider
// function MaterialUIControllerProvider({ children }) {

//     const [controller, dispatch] = useReducer(reducer, initialState);
  
//     const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
  
//     return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
//   }