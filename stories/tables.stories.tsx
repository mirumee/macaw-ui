import {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { storiesOf } from "@storybook/react";
import React from "react";

import { ResponsiveTable, TablePagination } from "../src";
import { makeStyles } from "../src/theme";
import { Decorator, GuideDecorator } from "../src/utils/Decorator";
import useGuideStyles from "./guideStyles";

const useStyles = makeStyles((theme) => ({
  colCalories: {
    width: 180,
  },
}));

interface TableDataRow {
  name: string;
  calories: number;
}
const data: TableDataRow[] = [
  {
    name: "Baked Potato",
    calories: 93,
  },
  {
    name: "French Fries",
    calories: 312,
  },
  {
    name: "Cheddar",
    calories: 403,
  },
  {
    name: "Brie",
    calories: 334,
  },
  {
    name: "Feta",
    calories: 264,
  },
  {
    name: "Ricotta",
    calories: 264,
  },
];

const Default: React.FC = () => {
  const classes = useStyles();
  const guideClasses = useGuideStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  const hasNextPage = (page + 1) * rowsPerPage < data.length;
  const hasPreviousPage = page > 0;

  return (
    <div>
      <Typography className={guideClasses.headline} variant="h1">
        Tables
      </Typography>
      <Typography className={guideClasses.paragraph} component="p">
        Tables play a huge part in creating dashboards. If you're building a
        Saleor Extension, it's probably what you're going to use for displaying
        tabular data. In Saleor Dashboard, we build our tables like this:
      </Typography>

      <ResponsiveTable>
        <colgroup>
          <col />
          <col className={classes.colCalories} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Calories (per 100g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((dataRow) => (
              <TableRow>
                <TableCell>{dataRow.name}</TableCell>
                <TableCell>{`${dataRow.calories} kcal`}</TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TablePagination
            choices={[1, 2, 3]}
            onRowNumberUpdate={(rows) => {
              setRowsPerPage(rows);
              setPage(0);
            }}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            labels={{ noOfRows: "No. of rows:" }}
            onNextPage={() => setPage(page + 1)}
            onPreviousPage={() => setPage(page - 1)}
            rowNumber={rowsPerPage}
            colSpan={2}
          />
        </TableFooter>
      </ResponsiveTable>

      <Typography className={guideClasses.paragraph} component="p">
        When our data is not ready, either calculating or fetching, we display{" "}
        <Typography className={guideClasses.code}>
          &lt;Skeleton /&gt;
        </Typography>{" "}
        component that indicates its loading status:
      </Typography>
      <ResponsiveTable>
        <colgroup>
          <col />
          <col className={classes.colCalories} />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Calories (per 100g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton />
            </TableCell>
            <TableCell>
              <Skeleton />
            </TableCell>
          </TableRow>
        </TableBody>
      </ResponsiveTable>
    </div>
  );
};

storiesOf("Tables", module)
  .addDecorator(Decorator)
  .addDecorator(GuideDecorator)
  .add("default", () => <Default />);
