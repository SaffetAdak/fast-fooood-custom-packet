export type SectionHeadingProps = {
  children: React.ReactNode;
};

export type TabProps = {
  label: string;
  value: string;
};

export type CustomSliderProps = {
  maxNumber?: number;
  header: string;
};

export type ActiveCategoryStore = {
  activeCategory: string;
  setActiveCategory: (activeCategory: string) => void;
};

export type ContentStore = {
  packet: {
    title: string;
    products: { name: string; count: number; price: number }[];
  };
  packet2: {
    title: string;
    products: { name: string; count: number; price: number }[];
  };
  packet3: {
    title: string;
    products: { name: string; count: number; price: number }[];
  };
  setPacket: (packet: any) => void;
  setPacket2: (packet2: any) => void;
  setPacket3: (packet3: any) => void;
  clear: boolean;
  setClear: (clear: boolean) => void;
};

export type SummaryBoxProps = {
  title: string;
  contents: string[];
};

export type ActiveLinkStore = {
  activeLink: null | string;
  setActiveLink: (activeLink: null | string) => void;
  anchorEl: null | HTMLElement;
  setAnchorEl: (anchorEl: null | HTMLElement) => void;
  menuAnchorEl: null | HTMLElement;
  setMenuAnchorEl: (menuAnchorEl: null | HTMLElement) => void;
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};
