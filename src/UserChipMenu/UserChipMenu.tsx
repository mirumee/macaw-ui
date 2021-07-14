import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import React from "react";

import { UserChipMenuContext } from "./context";
import useStyles from "./styles";

export interface UserChipProps {
  avatar: string | null;
  initials: string;
  name: string;
  subtext?: string;
}

export const UserChipMenu: React.FC<UserChipProps> = ({
  avatar,
  initials,
  name,
  subtext,
  children,
}) => {
  const classes = useStyles({});
  const [isMenuOpened, setMenuState] = React.useState(false);
  const anchor = React.useRef<HTMLDivElement>(null);

  const closeMenu = () => setMenuState(false);

  return (
    <div className={classes.userMenuContainer}>
      <div
        className={classes.userChip}
        ref={anchor}
        onClick={() => setMenuState(!isMenuOpened)}
        data-test="userMenu"
      >
        <div className={classes.avatarContainer}>
          {avatar ? (
            <Avatar className={classes.avatar} alt="user" src={avatar} />
          ) : (
            <div className={classes.avatarPlaceholder}>
              <div className={classes.avatarInitials}>{initials}</div>
            </div>
          )}
        </div>
        <div className={classes.labelContainer}>
          <Hidden smDown>
            <div>
              <Typography className={classes.label} variant="body2">
                {name}
              </Typography>
              {subtext && (
                <Typography
                  className={classes.label}
                  variant="body2"
                  color="textSecondary"
                >
                  {subtext}
                </Typography>
              )}
            </div>
          </Hidden>
        </div>
      </div>
      <Popper
        className={classes.popover}
        open={isMenuOpened}
        anchorEl={anchor.current}
        transition
        placement="bottom-end"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "right top" : "right bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={closeMenu} mouseEvent="onClick">
                <Menu>
                  <UserChipMenuContext.Provider value={closeMenu}>
                    {children}
                  </UserChipMenuContext.Provider>
                </Menu>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
UserChipMenu.displayName = "UserChip";
