import { useEffect, useContext } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "theme/components/MDBox";

// Material Dashboard 2 React context
import { MaterialUI } from 'theme/context/themeContext';

export const PageLayout = ({ background, children }) => {
  const { setLayout } = useContext( MaterialUI );
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout("page");
  }, [pathname]);
  
  return (
    <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </MDBox>
  )
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};
