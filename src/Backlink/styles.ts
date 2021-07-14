import { makeStyles } from "../theme";

const useStyles = makeStyles(
  (theme) => ({
    backArrow: {
      fontSize: 30,
    },
    menuButton: {
      flex: "0 0 auto",
      marginLeft: theme.spacing(-2),
      marginRight: theme.spacing(),
      marginTop: theme.spacing(-2),
    },
    root: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      marginTop: theme.spacing(0.5),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(4, 0, 0, 0),
      },
    },
    skeleton: {
      width: "10rem",
    },
    title: {
      flex: 1,
      marginLeft: theme.spacing(),
    },
  }),
  { name: "AppHeader" }
);

export default useStyles;
