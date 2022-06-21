import { useEffect, useContext } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "theme/components/MDBox";

// Material Dashboard 2 React context
import { MaterialUI } from 'theme/context/themeContext';

const DashboardLayout = ({ children }) => {
  const { setLayout, miniSidenav } = useContext( MaterialUI );
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout("dashboard");
  }, [pathname]);
  return (
    <MDBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </MDBox>
  )
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default DashboardLayout