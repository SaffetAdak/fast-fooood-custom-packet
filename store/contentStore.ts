import type { ContentStore } from "@/lib/types";
import { create } from "zustand";

// Store to manage the content of products in the cart and a clear state . The store contains three packets with their products.
export const contentStore = create<ContentStore>()((set) => ({
  packet: {
    title: "Hamburger",
    products: [
      { name: "Standard Hamburger", count: 0, price: 25.84 },
      { name: "Super Hamburger", count: 0, price: 30.4 },
      { name: "Super+ Hamburger", count: 0, price: 35.03 },
    ],
  },
  packet2: {
    title: "Pizza",
    products: [
      { name: "Classic Pizza", count: 0, price: 200.59 },
      { name: "Super Pizza", count: 0, price: 230.23 },
    ],
  },
  packet3: {
    title: "Drinks",
    products: [
      { name: "Cold Drinks", count: 0, price: 35.74 },
      { name: "Hot Drinks", count: 0, price: 32.88 },
      { name: "Super Drinks", count: 0, price: 40.74 },
    ],
  },

  setPacket: (packet: any) => set({ packet }),
  setPacket2: (packet2: any) => set({ packet2 }),
  setPacket3: (packet3: any) => set({ packet3 }),

  clear: false,
  setClear: (clear: boolean) => set({ clear }),
}));
