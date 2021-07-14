import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

import { Pagination, PaginationProps } from "./Pagination";

export interface TablePaginationProps extends PaginationProps {
  colSpan: number;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  colSpan,
  ...paginationProps
}) => (
  <TableRow>
    <TableCell padding="none" colSpan={colSpan}>
      <Pagination {...paginationProps} />
    </TableCell>
  </TableRow>
);
TablePagination.displayName = "TablePagination";
