import type { TUser } from "../../users.types";

import type { Column } from "@/shared/components";

export const columns = [
  {
    field: "name",
    label: "Nome",
    sortable: true,
    filterable: true,
    filterType: "text",
  },
  {
    field: "email",
    label: "E-mail",
    sortable: true,
    filterable: true,
    filterType: "text",
  },
  {
    field: "status",
    label: "Status",
    filterable: true,
    filterType: "select",
    maxWidth: 150,
    render: (value) => (value === "active" ? "🟢 Ativo" : "🔴 Inativo"),
  },
] satisfies readonly Column<TUser>[];
