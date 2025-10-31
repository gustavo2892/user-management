import { Box, Drawer, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavList } from "./components";
import type { VerticalNavProps } from "./types";

const DRAWER_WIDTH = 260;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: theme.mixins.toolbar.minHeight,
  padding: theme.spacing(0, 2),
}));

export function VerticalNav({ items, header, width = DRAWER_WIDTH, children }: VerticalNavProps) {
  const drawerContent = (
    <Box role="navigation" sx={{ width, display: "flex", flexDirection: "column", height: "100%" }}>
      <DrawerHeader>{header ?? <Box sx={{ fontWeight: 700 }} />}</DrawerHeader>
      <List sx={{ py: 0, flex: 1, overflowY: "auto" }}>
        <NavList items={items} />
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          "& .MuiDrawer-paper": { width, boxSizing: "border-box", overflowX: "hidden" },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}>
        {children}
      </Box>
    </Box>
  );
}