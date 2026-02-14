import { create } from "zustand";
import { IconComponent } from "../layout/Content";
import { IconVariant } from "../interfaces";

type DataState = {
  variants: IconVariant;
  searchQuery: string;
  sizeIcon: number;
  colorIcon: string;
  selectedIcon: { name: string; Icon: IconComponent } | null;
  category: string;

  setVariants: (variant: IconVariant) => void;
  setSearchQuery: (query: string) => void;
  setSizeIcon: (size: number) => void;
  setColorIcon: (color: string) => void;
  setSelectedIcon: (icon: { name: string; Icon: IconComponent } | null) => void;
  setCategory: (category: string) => void;

  handleReset: () => void;
};

const useData = create<DataState>((set) => ({
  variants: "all",
  category: "all",
  searchQuery: "",
  sizeIcon: 24,
  colorIcon: "#D4AF37",
  selectedIcon: null,

  setVariants: (variant) => set({ variants: variant }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSizeIcon: (size) => set({ sizeIcon: size }),
  setColorIcon: (color) => set({ colorIcon: color }),
  setSelectedIcon: (icon) => set({ selectedIcon: icon }),
  setCategory: (category) => set({ category }),

  handleReset: () =>
    set({
      variants: "all",
      searchQuery: "",
      sizeIcon: 24,
      colorIcon: "#D4AF37",
      selectedIcon: null,
      category: "all",
    }),
}));

export default useData;
