import type { TUser } from "../../users.types";
import type { Column } from "@/shared/components";

export const columns = [
  {
    field: "name",
    label: "users.table.name",
    sortable: true,
    filterable: true,
    filterType: "text",
  },
  {
    field: "email",
    label: "users.table.email",
    sortable: true,
    filterable: true,
    filterType: "text",
  },
  {
    field: "status",
    label: "users.table.status",
    filterable: true,
    filterType: "select",
    maxWidth: 150,
    render: (value) => (value === "active" ? "🟢 Ativo" : "🔴 Inativo"),
  },
] satisfies readonly Column<TUser>[];
