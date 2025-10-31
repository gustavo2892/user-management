import { Fragment } from "react";

import { isGroup } from "../../utils";
import { NavGroupItem } from "../navGroupItem/navGroupItem";
import { NavLeafItem } from "../navLeafItem/navLeafItem";
import type { NavItem } from "../../types";

export function NavList({ items }: { items: readonly NavItem[] }) {
  return (
    <Fragment>
      {items.map((item, idx) =>
        isGroup(item) ? (
          <NavGroupItem key={`group-${idx}-${item.label}`} item={item} />
        ) : (
          <NavLeafItem key={`leaf-${item.to}`} item={item} />
        )
      )}
    </Fragment>
  );
}