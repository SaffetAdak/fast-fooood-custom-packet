import type { ActiveLinkStore } from "@/lib/types";
import { create } from "zustand";

// Store to manage the active link in the header and the anchor element for the popover.
export const activeLinkStore = create<ActiveLinkStore>()((set) => ({
  activeLink: null,
  setActiveLink: (activeLink: null | string) => set({ activeLink }),
  anchorEl: null,
  setAnchorEl: (anchorEl: null | HTMLElement) => set({ anchorEl }),
  menuAnchorEl: null,
  setMenuAnchorEl: (menuAnchorEl: null | HTMLElement) => set({ menuAnchorEl }),
  menuOpen: false,
  setMenuOpen: (menuOpen: boolean) => set({ menuOpen }),
}));
