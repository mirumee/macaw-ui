import type { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import ButtonBase from "@material-ui/core/ButtonBase";
import clsx from "clsx";
import React from "react";

import useStyles from "./styles";

export const LayoutButton: React.FC<ButtonBaseProps> = React.forwardRef(
  ({ className, children, ...rest }, ref) => {
    const classes = useStyles();

    return (
      <ButtonBase className={clsx(classes.root, className)} ref={ref} {...rest}>
        {children}
      </ButtonBase>
    );
  }
);
LayoutButton.displayName = "LayoutButton";
