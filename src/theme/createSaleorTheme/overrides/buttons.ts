import { fade } from "@material-ui/core/styles/colorManipulator";
import type { Overrides } from "@material-ui/core/styles/overrides";

import { SaleorThemeColors } from "../types";

export const buttonOverrides = (colors: SaleorThemeColors): Overrides => {
  const containedPrimaryStates = {
    "&&:active": {
      backgroundColor: fade(colors.primary, 0.4),
    },
    "&&:hover": {
      backgroundColor: fade(colors.primary, 0.6),
    },
  };
  const containedSecondaryStates = {
    "&&:active": {
      backgroundColor: fade(colors.primary, 0.2),
    },
    "&&:hover": {
      backgroundColor: fade(colors.primary, 0.1),
    },
  };

  return {
    MuiButton: {
      contained: {
        "&$disabled": {
          "&$containedPrimary": {
            color: colors.secondary,
            backgroundColor: colors.gray.disabled,
          },
          "&$containedSecondary": {
            background: colors.secondary,
            color: colors.gray.disabled,
          },
        },
        "&:active": {
          boxShadow: "none",
        },
        "&:hover": {
          "@media(hover: none)": {
            boxShadow: "none",
          },
          boxShadow: "none",
        },
        boxShadow: "none",
      },
      containedPrimary: {
        ...containedPrimaryStates,
        "@media(hover: none)": containedPrimaryStates,
      },
      containedSecondary: {
        ...containedSecondaryStates,
        "@media(hover: none)": containedSecondaryStates,
        color: colors.primary,
      },
      label: {
        fontWeight: 600,
      },
      root: {
        "& svg": {
          marginLeft: 8,
        },
        borderRadius: 4,
      },
      text: {
        ...containedSecondaryStates,
        "@media(hover: none)": containedSecondaryStates,
        "&&$disabled": {
          color: colors.gray.disabled,
        },
      },
      textPrimary: {
        "&:not($disabled) span": {
          color: colors.primary,
        },
      },
      textSizeSmall: {
        fontSize: "1.3rem",
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: fade(colors.primary, 0.12),
        },
      },
    },
    MuiSwitch: {
      colorPrimary: {
        "&$checked": {
          color: colors.background.paper,
        },
      },
      root: {
        "&$disabled": {
          "&$switchBase": {
            "& + $thumb": {
              backgroundColor: colors.gray.disabled,
            },
          },
        },
        height: 48,
        width: 72,
      },
      switchBase: {
        "&$checked": {
          transform: "translateX(23px)",
        },
        boxShadow: "none",
        left: 1,
        marginLeft: 4,
        top: 5,
      },
      thumb: {
        boxShadow: "none",
      },
      track: {
        "$colorPrimary$checked + &": {
          backgroundColor: colors.primary,
        },
        backgroundColor: colors.gray.default,
        borderRadius: 12,
        height: 24,
        opacity: [["1"], "!important"] as any,
        width: 48,
      },
    },
  };
};
