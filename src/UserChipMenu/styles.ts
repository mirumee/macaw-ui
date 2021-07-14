import { makeStyles } from "../theme";

const avatarSize = 36;
const mobileAvatarSize = 42;

const useStyles = makeStyles(
  (theme) => ({
    avatar: {
      "&&": {
        [theme.breakpoints.down("sm")]: {
          height: mobileAvatarSize,
          width: mobileAvatarSize,
        },
        height: avatarSize,
        width: avatarSize,
      },
      backgroundColor: theme.palette.background.paper,
    },
    avatarContainer: {
      padding: 2,
      backgroundColor: theme.palette.background.paper,
      borderRadius: "100%",
    },
    avatarInitials: {
      [theme.breakpoints.down("sm")]: {
        height: mobileAvatarSize,
        width: mobileAvatarSize,
      },
      height: avatarSize,
      width: avatarSize,
      color: theme.palette.primary.contrastText,
    },
    avatarPlaceholder: {
      alignItems: "center",
      background: theme.palette.primary.main,
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
    },
    label: {
      lineHeight: 1.2,
    },
    labelContainer: {
      display: "inline-flex",
      alignItems: "center",
      marginLeft: theme.spacing(1),
    },
    popover: {
      marginTop: theme.spacing(2),
      zIndex: 10,
    },
    userChip: {
      borderRadius: 24,
      color: theme.palette.text.primary,
      display: "flex",
      padding: theme.spacing(0.5),
    },
    userMenuContainer: {
      cursor: "pointer",
      display: "inline-block",
      position: "relative",
    },
  }),
  {
    name: "UserChipMenu",
  }
);

export default useStyles;
