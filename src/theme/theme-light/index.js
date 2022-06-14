/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";

// Material Dashboard 2 React base styles
import colors from "theme/theme-light/base/colors";
import breakpoints from "theme/theme-light/base/breakpoints";
import typography from "theme/theme-light/base/typography";
import boxShadows from "theme/theme-light/base/boxShadows";
import borders from "theme/theme-light/base/borders";
import globals from "theme/theme-light/base/globals";

// Material Dashboard 2 React helper functions
import boxShadow from "theme/theme-light/functions/boxShadow";
import hexToRgb from "theme/theme-light/functions/hexToRgb";
import linearGradient from "theme/theme-light/functions/linearGradient";
import pxToRem from "theme/theme-light/functions/pxToRem";
import rgba from "theme/theme-light/functions/rgba";

// Material Dashboard 2 React components base styles for @mui material components
import sidenav from "theme/theme-light/components/sidenav";
import list from "theme/theme-light/components/list";
import listItem from "theme/theme-light/components/list/listItem";
import listItemText from "theme/theme-light/components/list/listItemText";
import card from "theme/theme-light/components/card";
import cardMedia from "theme/theme-light/components/card/cardMedia";
import cardContent from "theme/theme-light/components/card/cardContent";
import button from "theme/theme-light/components/button";
import iconButton from "theme/theme-light/components/iconButton";
import input from "theme/theme-light/components/form/input";
import inputLabel from "theme/theme-light/components/form/inputLabel";
import inputOutlined from "theme/theme-light/components/form/inputOutlined";
import textField from "theme/theme-light/components/form/textField";
import menu from "theme/theme-light/components/menu";
import menuItem from "theme/theme-light/components/menu/menuItem";
import switchButton from "theme/theme-light/components/form/switchButton";
import divider from "theme/theme-light/components/divider";
import tableContainer from "theme/theme-light/components/table/tableContainer";
import tableHead from "theme/theme-light/components/table/tableHead";
import tableCell from "theme/theme-light/components/table/tableCell";
import linearProgress from "theme/theme-light/components/linearProgress";
import breadcrumbs from "theme/theme-light/components/breadcrumbs";
import slider from "theme/theme-light/components/slider";
import avatar from "theme/theme-light/components/avatar";
import tooltip from "theme/theme-light/components/tooltip";
import appBar from "theme/theme-light/components/appBar";
import tabs from "theme/theme-light/components/tabs";
import tab from "theme/theme-light/components/tabs/tab";
import stepper from "theme/theme-light/components/stepper";
import step from "theme/theme-light/components/stepper/step";
import stepConnector from "theme/theme-light/components/stepper/stepConnector";
import stepLabel from "theme/theme-light/components/stepper/stepLabel";
import stepIcon from "theme/theme-light/components/stepper/stepIcon";
import select from "theme/theme-light/components/form/select";
import formControlLabel from "theme/theme-light/components/form/formControlLabel";
import formLabel from "theme/theme-light/components/form/formLabel";
import checkbox from "theme/theme-light/components/form/checkbox";
import radio from "theme/theme-light/components/form/radio";
import autocomplete from "theme/theme-light/components/form/autocomplete";
import container from "theme/theme-light/components/container";
import popover from "theme/theme-light/components/popover";
import buttonBase from "theme/theme-light/components/buttonBase";
import icon from "theme/theme-light/components/icon";
import svgIcon from "theme/theme-light/components/svgIcon";
import link from "theme/theme-light/components/link";
import dialog from "theme/theme-light/components/dialog";
import dialogTitle from "theme/theme-light/components/dialog/dialogTitle";
import dialogContent from "theme/theme-light/components/dialog/dialogContent";
import dialogContentText from "theme/theme-light/components/dialog/dialogContentText";
import dialogActions from "theme/theme-light/components/dialog/dialogActions";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
