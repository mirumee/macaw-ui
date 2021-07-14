import Toolbar from "@material-ui/core/Toolbar";
import React from "react";

import { PaginationActions, PaginationActionsProps } from "./PaginationActions";
import {
  PaginationRowNumberSelect,
  PaginationRowNumberSelectProps,
} from "./PaginationRowNumberSelect";
import useStyles from "./styles";

export interface PaginationProps
  extends PaginationActionsProps,
    Omit<PaginationRowNumberSelectProps, "className" | "choices" | "onChange"> {
  choices?: number[];
  rowNumber: number;
  onRowNumberUpdate?: (rowNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  choices = [10, 20, 30, 50, 100],
  hasNextPage,
  hasPreviousPage,
  nextIconButtonProps,
  labels,
  rowNumber,
  onNextPage,
  onPreviousPage,
  onRowNumberUpdate,
  ...other
}) => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar} disableGutters {...other}>
      <div className={classes.spacer}>
        <PaginationRowNumberSelect
          choices={choices}
          labels={labels}
          rowNumber={rowNumber}
          onChange={onRowNumberUpdate}
        />
      </div>
      <PaginationActions
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        nextIconButtonProps={nextIconButtonProps}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
      />
    </Toolbar>
  );
};

Pagination.displayName = "Pagination";
