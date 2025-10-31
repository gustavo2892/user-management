import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { isActive } from "../../utils";
import type { NavLeaf } from "../../types";
import { useI18n } from "@/shared/i18n";

export function NestedLeafItem({ item }: { item: NavLeaf }) {
  const location = useLocation();
  const navigate = useNavigate();
  const active = isActive(item.to, location.pathname);
  const { translate } = useI18n();

  return (
    <ListItemButton
      onClick={() => navigate(item.to)}
      selected={active}
      sx={{ pl: 6 }}
      aria-current={active ? "page" : undefined}
      aria-label={item.ariaLabel ?? translate(item.label)}
      disabled={item.disabled}
    >
      {item.icon && <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>}
      <ListItemText primary={translate(item.label)} />
    </ListItemButton>
  );
}
