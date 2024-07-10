"use client";
import * as React from "react";
import { Tab, Tabs } from "@mui/material";
import { activeCategoryStore } from "@/store/activeCategoryStore";

// Component to render the category tabs for selecting the category of the sliders.
export default function Category() {
  const { activeCategory, setActiveCategory } = activeCategoryStore();
  // Function to change the active category
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveCategory(newValue);
  };

  return (
    <div className="flex justify-center">
      <Tabs
        value={activeCategory}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          width: "100%",
          paddingBottom: "2rem",
          ".MuiTabs-indicator": {
            backgroundColor: "#212121",
          },
          ".MuiTab-root": {
            color: "#757575",
            fontWeight: 600,
          },
          ".Mui-selected": {
            color: "#212121 !important",
          },
        }}
      >
        <Tab
          sx={{
            width: "33.3333%",
            textTransform: "none",
          }}
          label="hamburger"
          value={"hamburger"}
        />
        <Tab
          sx={{
            width: "33.3333%",
            textTransform: "none",
          }}
          label="pizza"
          value={"pizza"}
        />
        <Tab
          sx={{
            width: "33.3333%",
            textTransform: "none",
          }}
          label="drinks"
          value={"drinks"}
        />
      </Tabs>
    </div>
  );
}
