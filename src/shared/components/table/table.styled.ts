import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)(() => ({
  maxWidth: 150,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}));
