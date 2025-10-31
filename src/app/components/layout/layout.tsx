import React from "react";
import {
  Home as HomeIcon,
  People as PeopleIcon,
  List as ListIcon,
  Add as AddIcon,
} from "@mui/icons-material";

import { VerticalNav } from "../nav/nav";
import { Header } from "../header/header";
import type { NavItem } from "../nav/types";
import { endpoints } from "@/shared/api/endpoints";
import { Container } from "./layout.styled";
import { Logo } from '../logo/logo';

const navItems: readonly NavItem[] = [
  { label: "app.menu.home", to: "/", icon: <HomeIcon /> },
  {
    label: "app.menu.users",
    icon: <PeopleIcon />,
    children: [
      { label: "app.menu.list", to: `${endpoints.users}`, icon: <ListIcon /> },
      { label: "app.menu.create", to: `${endpoints.users}/new`, icon: <AddIcon /> },
    ],
  },
] as const;

export function AppLayout({ children }: { children?: React.ReactNode }) {
  return (
    <VerticalNav items={navItems} header={<Logo />} >
      <Header />
      <Container>
        {children}
      </Container>
    </VerticalNav>
  );
}