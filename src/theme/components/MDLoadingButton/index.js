

import { forwardRef, useContext } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDButton
import MDLoadingButtonRoot from "theme/components/MDLoadingButton/MDLoadingButtonRoot";

// Material Dashboard 2 React contexts
import { MaterialUI } from "theme/context/themeContext";

const MDLoadingButton = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => {
    const { darkMode } = useContext( MaterialUI );

    return (
      <MDLoadingButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === "gradient" ? "contained" : variant}
        size={size}
        ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
      >
        {children}
      </MDLoadingButtonRoot>
    );
  }
);

// Setting default values for the props of MDButton
MDLoadingButton.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: false,
  iconOnly: false,
};

// Typechecking props for the MDButton
MDLoadingButton.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
  color: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default MDLoadingButton;
