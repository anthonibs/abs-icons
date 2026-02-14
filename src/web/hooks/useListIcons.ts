import { useMemo } from "react";
import useData from "../store/useData";

import * as Icons from "@anthonibs/abs-icons";

const useListIcons = () => {
  const searchQuery = useData((state) => state.searchQuery);
  const variant = useData((state) => state.variants);
  const sizeIcon = useData((state) => state.sizeIcon);
  const colorIcon = useData((state) => state.colorIcon);
  const category = useData((state) => state.category);

  const icons = useMemo(() => {
    return (Object.entries(Icons) as [string, any][]).filter(
      ([name, component]) => {
        const isIcon = typeof component === "function" || component?.metadata;

        const matchesSearch = name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesVariant =
          variant === "all" ||
          (variant === "solid"
            ? name.includes("Solid")
            : name.includes("Outline"));
        const matchesCategory =
          category === "all" || component.metadata?.category === category;

        return isIcon && matchesSearch && matchesVariant && matchesCategory;
      },
    );
  }, [searchQuery, variant, category]);

  return {
    icons,
    sizeIcon,
    colorIcon,
  };
};

export default useListIcons;
