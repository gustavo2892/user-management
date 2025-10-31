export type BaseItem = {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
};

export type NavLeaf = BaseItem & {
  to: string;
  children?: never;
};

export type NavGroup = BaseItem & {
  to?: never;
  children: readonly NavItem[];
};

export type NavItem = NavLeaf | NavGroup;

export type VerticalNavProps = {
  items: readonly NavItem[];
  header?: React.ReactNode;
  width?: number;
  children?: React.ReactNode;
};
