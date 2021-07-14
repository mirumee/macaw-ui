import { fade } from "@material-ui/core/styles/colorManipulator";

import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    actions: {},
    actionsButton: {
      "&:last-child": {
        marginLeft: theme.spacing(1.5),
      },
      "& svg": {
        color: theme.palette.text.secondary,
        width: 16,
      },
      border: `2px solid ${theme.palette.text.secondary}`,
      height: 36,
      width: 36,
    },
    actionsButtonDisabled: {
      "& svg": {
        color: theme.palette.text.disabled,
      },
      border: `2px solid ${theme.palette.text.disabled}`,
    },
    dark: {
      "& svg": {
        color: theme.palette.primary.main,
      },
      "&:focus, &:hover": {
        "& > span:first-of-type": {
          backgroundColor: fade(theme.palette.primary.main, 0.2),
        },
      },
    },
    root: {},
    toolbar: {
      justifyContent: "space-between",
    },
    spacer: {},

    rowNumber: {
      fontSize: theme.typography.body2.fontSize,
    },
    rowNumberLabel: {},
    rowNumberSelect: {
      "&:before, &:after": {
        content: "none",
      },
      marginLeft: theme.spacing(1),
    },
    rowNumberSelectLabel: {
      "&": {
        color: theme.palette.primary.main,
      },
    },
  }),
  { name: "Pagination" }
);
export default useStyles;
