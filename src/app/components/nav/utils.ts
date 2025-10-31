import type { NavGroup, NavItem } from "./types";

export function isGroup(item: NavItem): item is NavGroup {
  return (item as NavGroup).children !== undefined;
}

export function isActive(target: string, pathname: string) {
  return pathname === target || pathname.startsWith(`${target}/`);
}
