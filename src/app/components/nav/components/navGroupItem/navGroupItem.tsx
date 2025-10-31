import * as React from "react";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

import { isActive, isGroup } from "../../utils";
import { NestedLeafItem } from "../nestedLeafItem/nestedLeafItem";
import type { NavGroup } from "../../types";

export function NavGroupItem({ item }: { item: NavGroup }) {
  const location = useLocation();
  const matched = item.children.some((child) => !isGroup(child) && isActive(child.to, location.pathname));
  const [open, setOpen] = React.useState<boolean>(matched);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={item.ariaLabel ?? item.label}
        selected={matched}
      >
        {item.icon && <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.map((child, idx) =>
            isGroup(child) ? (
              <NavGroupItem key={`group-${idx}-${child.label}`} item={child} />
            ) : (
              <NestedLeafItem key={`leaf-${child.to}`} item={child} />
            )
          )}
        </List>
      </Collapse>
    </>
  );
}