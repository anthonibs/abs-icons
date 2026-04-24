import { useDeferredValue, useMemo } from "react";
import useData from "../store/useData";

import * as Icons from "../../ui/icons";

const ICON_ENTRIES = Object.entries(Icons) as [string, any][];

const useListIcons = () => {
  const searchQuery = useData((state) => state.searchQuery);
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const variant = useData((state) => state.variants);
  const sizeIcon = useData((state) => state.sizeIcon);
  const colorIcon = useData((state) => state.colorIcon);
  const category = useData((state) => state.category);

  const icons = useMemo(() => {
    const query = deferredSearchQuery.trim().toLowerCase();

    return ICON_ENTRIES.filter(([name, component]) => {
      const isIcon = typeof component === "function" || component?.metadata;
      if (!isIcon) return false;

      const matchesSearch =
        query.length === 0 || name.toLowerCase().includes(query);
      const matchesVariant =
        variant === "all" ||
        (variant === "solid"
          ? name.includes("Solid")
          : name.includes("Outline"));
      const matchesCategory =
        category === "all" || component.metadata?.category === category;

      return matchesSearch && matchesVariant && matchesCategory;
    });
  }, [deferredSearchQuery, variant, category]);

  return {
    icons,
    sizeIcon,
    colorIcon,
  };
};

export default useListIcons;
