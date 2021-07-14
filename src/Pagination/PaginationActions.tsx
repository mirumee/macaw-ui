import ButtonBase from "@material-ui/core/ButtonBase";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import classNames from "classnames";
import React from "react";

import { useTheme } from "../theme";
import useStyles from "./styles";

export interface PaginationActionsProps {
  className?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextIconButtonProps?: any;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

export const PaginationActions: React.FC<PaginationActionsProps> = ({
  className,
  hasNextPage,
  hasPreviousPage,
  nextIconButtonProps,
  onNextPage,
  onPreviousPage,
  ...other
}) => {
  const classes = useStyles();

  const { direction, themeType } = useTheme();

  const isDark = themeType === "dark";

  return (
    <div className={classNames(classes.actions, className)} {...other}>
      <ButtonBase
        className={classNames(classes.actionsButton, {
          [classes.dark]: isDark,
          [classes.actionsButtonDisabled]: !hasPreviousPage,
        })}
        onClick={onPreviousPage}
        disabled={!hasPreviousPage}
        data-test="button-pagination-back"
      >
        {direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
      </ButtonBase>

      <ButtonBase
        className={classNames(classes.actionsButton, {
          [classes.dark]: isDark,
          [classes.actionsButtonDisabled]: !hasNextPage,
        })}
        onClick={onNextPage}
        disabled={!hasNextPage}
        data-test="button-pagination-next"
        {...nextIconButtonProps}
      >
        {direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
      </ButtonBase>
    </div>
  );
};

PaginationActions.displayName = "PaginationActions";
