import { Button, Typography } from "@material-ui/core";
import { storiesOf } from "@storybook/react";
import React from "react";

import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "./guideStyles";

const useStyles = makeStyles((theme) => ({
  buttonGrid: {
    background: theme.palette.background.default,
    borderRadius: 4,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: theme.spacing(3),
    rowGap: theme.spacing(2),
    padding: theme.spacing(3),
  },
}));

const Default: React.FC = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Buttons
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        In most cases your app will be using one of those three button types:
      </Typography>

      <div className={classes.buttonGrid}>
        <div>Primary</div>
        <div>Secondary</div>
        <div>Text</div>
        <Button variant="contained" color="primary">
          Lorem
        </Button>
        <Button variant="contained" color="secondary">
          Ipsum
        </Button>
        <Button color="primary" variant="text">
          Dolor Sit
        </Button>
      </div>

      <Typography className={guideClasses.paragraph} component="p">
        They are designed to perform most of the actions that you will need to
        add. These buttons can be placed in various places, most notably cards,
        dialogs and forms.
      </Typography>
    </div>
  );
};

storiesOf("Buttons", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />);
