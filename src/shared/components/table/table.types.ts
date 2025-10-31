type ColKey<T> = Extract<keyof T, string | number>;

export type Column<T, K extends keyof T = keyof T> = {
  field: string & ColKey<T>;
  label: string;
  render?: (value: T[K], row: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  filterType?: "text" | "select";
  width?: number;
  maxWidth?: number;
};

export type TableProps<T> = {
  data: T[];
  columns: readonly Column<T>[];
  tableLabel?: string;
  onDelete?: (row: T) => void;
  onUpdate?: (id: T) => void;
};

export type Order = "asc" | "desc";
