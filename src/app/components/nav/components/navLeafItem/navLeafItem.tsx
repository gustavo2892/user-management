import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { isActive } from "../../utils";
import type { NavLeaf } from "../../types";

export const NavLeafItem = ({ item }: { item: NavLeaf }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = isActive(item.to, location.pathname);

  return (
    <ListItemButton
      onClick={() => navigate(item.to)}
      selected={active}
      aria-current={active ? "page" : undefined}
      disabled={item.disabled}
      aria-label={item.ariaLabel ?? item.label}
      sx={{
        "&.Mui-selected": {
          bgcolor: (t) => (t.palette.mode === "light" ? "primary.main" : "primary.dark"),
          color: "primary.contrastText",
          "&:hover": { bgcolor: (t) => (t.palette.mode === "light" ? "primary.dark" : "primary.main") },
        },
      }}
    >
      {item.icon && <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>}
      <ListItemText primary={item.label} />
    </ListItemButton>
  );
}