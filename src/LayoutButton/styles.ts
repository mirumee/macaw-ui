import { fade } from "@material-ui/core/styles";

import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      "&:hover": {
        color: theme.typography.body1.color,
      },
      background: fade("#FFFFFF", 0.4),
      borderRadius: 4,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: 600,
      height: 48,
      padding: theme.spacing(0.5, 2),
      textAlign: "center",
      textTransform: "uppercase",
      transition: theme.transitions.duration.standard + "ms",
    },
  }),
  { name: "LayoutButton" }
);

export default useStyles;
