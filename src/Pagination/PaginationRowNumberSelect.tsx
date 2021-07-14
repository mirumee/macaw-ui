import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export type PaginationRowNumberSelectLabels = Record<"noOfRows", string>;
export interface PaginationRowNumberSelectProps {
  choices: number[];
  className?: string;
  labels: PaginationRowNumberSelectLabels;
  rowNumber: number;
  onChange?: (value: number) => void;
}

export const PaginationRowNumberSelect: React.FC<PaginationRowNumberSelectProps> = ({
  className,
  choices,
  labels,
  rowNumber,
  onChange,
}) => {
  const classes = useStyles({});

  return (
    <div className={clsx(classes.rowNumber, className)}>
      <span className={classes.rowNumberLabel}>{labels.noOfRows}</span>
      {onChange ? (
        <Select
          data-test-id="PaginationRowNumberSelect"
          inputProps={{
            className: classes.rowNumberSelectLabel,
          }}
          className={classes.rowNumberSelect}
          value={rowNumber}
          onChange={(event) => onChange(event.target.value as number)}
        >
          {choices.length > 0 &&
            choices.map((choice) => (
              <MenuItem
                value={choice}
                key={choice}
                data-test-id="rowNumberOption"
              >
                {choice}
              </MenuItem>
            ))}
        </Select>
      ) : (
        ` ${rowNumber}`
      )}
    </div>
  );
};
PaginationRowNumberSelect.displayName = "PaginationRowNumberSelect";
