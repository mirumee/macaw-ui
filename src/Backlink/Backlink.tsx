import Portal from "@material-ui/core/Portal";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

import { LayoutButton } from "../LayoutButton";
import { useBacklink } from "./context";
import useStyles from "./styles";

export interface AppHeaderProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Backlink: React.FC<AppHeaderProps> = ({ children, onClick }) => {
  const classes = useStyles();
  const anchor = useBacklink();

  if (!anchor.current) {
    return null;
  }

  return (
    <Portal container={anchor.current}>
      <LayoutButton
        className={classes.root}
        onClick={onClick}
        data-test-id="app-header-back-button"
      >
        <ArrowBackIcon className={classes.backArrow} />
        {children ? (
          <div className={classes.title}>{children}</div>
        ) : (
          <Skeleton className={classes.skeleton} />
        )}
      </LayoutButton>
    </Portal>
  );
};
Backlink.displayName = "Backlink";
