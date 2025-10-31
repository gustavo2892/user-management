import { useMemo, useState } from "react";
import {
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  TextField,
  Box,
  TablePagination,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";

import type { TableProps, Order } from "./table.types";
import { useI18n } from "@/shared/i18n";
import { ConfirmDialog } from "../confirmDialog/confirmDialog";

const styleCell = {
  width: 100,
  maxWidth: 100,
  overflow: "hidden",
  textOverflow: "ellipsis",
  borderStyle: "border-box",
};

export function Table<T extends { id?: number | string }>({
  data,
  columns,
  tableLabel = "Tabela de dados",
  onDelete,
  onUpdate,
}: TableProps<T>) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof T | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<T | null>(null);
  const { translate } = useI18n();

  const distinctValues = useMemo(() => {
    const map: Record<string, string[]> = {};
    columns.forEach((col) => {
      const values = Array.from(new Set(data.map((row) => String(row[col.field]))));
      if (values.length <= 8) {
        map[col.field as string] = values;
      }
    });
    return map;
  }, [data, columns]);

  const handleSort = (field: keyof T) => {
    const isAsc = orderBy === field && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(field);
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    setPage(0);
  };

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      columns.every((col) => {
        const filterValue = filters[col.field as string];
        if (!filterValue) return true;

        const value = row[col.field];

        if (col.filterType === "select") {
          return String(value) === filterValue;
        }

        return String(value ?? "")
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      }),
    );
  }, [data, filters, columns]);

  const sortedData = useMemo(() => {
    if (!orderBy) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];
      return order === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [filteredData, orderBy, order]);

  const paginatedData = useMemo(() => {
    const start = page * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, page, rowsPerPage]);

  const handleOpenDialog = (row: T) => {
    setItemToDelete(row);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setItemToDelete(null); // Clear the itemToDelete state
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      onDelete?.(itemToDelete);
      handleCloseDialog();
    }
  };

  return (
    <Paper aria-label={tableLabel} sx={{ p: 1 }}>
      <TableContainer>
        <MUITable>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={String(col.field)} style={styleCell}>
                  {col.sortable ? (
                    <TableSortLabel
                      active={orderBy === col.field}
                      direction={orderBy === col.field ? order : "asc"}
                      onClick={() => handleSort(col.field)}
                    >
                      {translate(col.label)}
                      {orderBy === col.field && (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc" ? "ordenado decrescente" : "ordenado crescente"}
                        </Box>
                      )}
                    </TableSortLabel>
                  ) : (
                    translate(col.label)
                  )}
                </TableCell>
              ))}
              {(onDelete || onUpdate) && (
                <TableCell style={styleCell}>{translate("users.table.actions")}</TableCell>
              )}
            </TableRow>

            {/* Filters */}
            <TableRow>
              {columns.map((col) => {
                if (!col.filterable) return <TableCell key={col.field} style={styleCell} />;

                const isSelect = col.filterType === "select";

                return (
                  <TableCell key={col.field} style={styleCell}>
                    {isSelect ? (
                      <FormControl fullWidth size="small">
                        <InputLabel>{translate(col.label)}</InputLabel>
                        <Select
                          label={col.label}
                          value={filters[col.field as string] ?? ""}
                          onChange={(e) => handleFilterChange(col.field as string, e.target.value)}
                        >
                          <MenuItem value="">{translate("users.table.all")}</MenuItem>
                          {distinctValues[col.field as string]?.map((val) => (
                            <MenuItem key={val} value={val}>
                              {val}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    ) : (
                      <TextField
                        fullWidth
                        size="small"
                        placeholder={`${translate(col.label)}`}
                        value={filters[col.field as string] ?? ""}
                        onChange={(e) => handleFilterChange(col.field as string, e.target.value)}
                      />
                    )}
                  </TableCell>
                );
              })}

              {(onDelete || onUpdate) && <TableCell />}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row, idx) => (
              <TableRow key={row.id ?? idx} hover>
                {columns.map((col) => (
                  <TableCell key={String(col.field)}>
                    {col.render ? col.render(row[col.field], row) : String(row[col.field] ?? "")}
                  </TableCell>
                ))}

                {(onDelete || onUpdate) && (
                  <TableCell>
                    {onUpdate && (
                      <IconButton onClick={() => onUpdate(row)}>
                        <EditIcon />
                      </IconButton>
                    )}
                    {onDelete && (
                      <IconButton color="error" onClick={() => handleOpenDialog(row)}>
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </MUITable>

        <ConfirmDialog
          handleCloseDialog={handleCloseDialog}
          handleConfirmDelete={handleConfirmDelete}
          titleConfirm="users.table.delete.title"
          textConfirm="users.table.delete.text"
          openDialog={openDialog}
        />
      </TableContainer>

      <TablePagination
        component="div"
        count={sortedData.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, p) => {
          return setPage(p);
        }}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
  );
}
