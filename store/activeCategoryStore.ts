import type { ActiveCategoryStore } from "@/lib/types";
import { create } from "zustand";

// Store to manage the active category selected by the user.
export const activeCategoryStore = create<ActiveCategoryStore>()((set) => ({
  activeCategory: "hamburger",
  setActiveCategory: (activeCategory) => set({ activeCategory }),
}));
