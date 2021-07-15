import { fade } from "@material-ui/core/styles/colorManipulator";

import { SaleorThemeColors } from "./createSaleorTheme";

export const dark: SaleorThemeColors = {
  alert: {
    paper: {
      error: "#E0444E",
      info: "#2E2F31",
      success: "#5DC292",
      warning: "#E29A2E",
    },
    icon: {
      error: "#FE6E76",
      info: "#FAFAFA",
      success: "#5DC292",
      warning: "#FFB84E",
    },
  },
  highlightInactive: {
    default: "#78797A",
  },
  autofill: "#5D5881",
  background: {
    default: "#1D1E1F",
    paper: "#2E2F31",
  },
  checkbox: {
    default: "#FFFFFF",
  },
  divider: "#252728",
  error: "#C22D74",
  font: {
    button: "#202124",
    default: "#FCFCFC",
    gray: "#9E9D9D",
    textButton: "#FFFFFF",
    textDisabled: "#FCFCFC",
  },
  gray: {
    default: "#202124",
    disabled: "rgba(32, 33, 36, 0.6)",
  },
  input: {
    border: "#9d9d9d",
    default: "#25262A",
    disabled: "#393939",
    disabledBackground: "#292A2D",
    disabledText: "#9D9D9D",
    error: "#8C2054",
    text: "#FCFCFC",
    textHover: "#616161",
  },
  paperBorder: "#252728",
  primary: "#13BEBB",
  secondary: "#21125E",
  success: "#5DC292",
  theme: "dark",
};
export const light: SaleorThemeColors = {
  alert: {
    paper: {
      error: "#FFD6D9",
      info: "#FFFFFF",
      success: "#DFF3E9",
      warning: "#FFF4E4",
    },
    icon: {
      error: "#FE6E76",
      info: "#28234A",
      success: "#5DC292",
      warning: "#FFB84E",
    },
  },
  highlightInactive: {
    default: "#C8C8C8",
  },
  autofill: "#f4f6c5",
  background: {
    default: "#EBF1F6",
    paper: "#FFFFFF",
  },
  checkbox: {
    default: "#616161",
  },
  divider: "#EAEAEA",
  error: "#FE6D76",
  font: {
    button: "#FFFFFF",
    default: "#28234A",
    gray: fade("#28234A", 0.6),
    textButton: "#06847B",
    textDisabled: fade("#28234A", 0.4),
  },
  gray: {
    default: "#C8C8C8",
    disabled: "#C0CFE2",
  },

  input: {
    border: "#BDBDBD",
    default: "#FFFFFF",
    disabled: "#EAEAEA",
    disabledBackground: "#F4F4F4",
    disabledText: "#9D9D9D",
    error: "#8C2054",
    text: "#3D3D3D",
    textHover: "#616161",
  },
  paperBorder: "#EAEAEA",
  primary: "#056DFF",
  secondary: "#FFFFFF",
  success: "#5DC292",
  theme: "light",
};
