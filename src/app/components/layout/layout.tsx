import React from "react";
import { People as PeopleIcon, List as ListIcon } from "@mui/icons-material";

import { VerticalNav } from "../nav/nav";
import { Header } from "../header/header";
import type { NavItem } from "../nav/types";
import { endpoints } from "@/shared/api/endpoints";
import { Container } from "./layout.styled";
import { Logo } from "../logo/logo";
import { Box } from "@mui/material";

const navItems: readonly NavItem[] = [
  {
    label: "app.menu.users",
    icon: <PeopleIcon />,
    children: [{ label: "app.menu.list", to: `${endpoints.users}`, icon: <ListIcon /> }],
  },
] as const;

export function AppLayout({ children }: { children?: React.ReactNode }) {
  return (
    <VerticalNav
      items={navItems}
      header={
        <Box
          style={{ width: "100%", height: 60 }}
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <Logo />
        </Box>
      }
    >
      <Header />
      <Container>{children}</Container>
    </VerticalNav>
  );
}
