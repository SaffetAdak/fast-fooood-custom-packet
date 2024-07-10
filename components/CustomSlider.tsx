"use client";
import { CustomSliderProps } from "@/lib/types";
import { activeCategoryStore } from "@/store/activeCategoryStore";
import { contentStore } from "@/store/contentStore";
import { Slider } from "@mui/material";
import { alpha } from "@mui/material/styles";

// Component to render the custom slider for selecting the count of the products.
export default function CustomSlider({
  maxNumber = 60,
  header,
}: CustomSliderProps) {
  // Getting the packet, packet2, packet3 and their set functions from the content store and active category from the active category store.
  const { packet, setPacket, packet2, setPacket2, packet3, setPacket3 } =
    contentStore();
  const { activeCategory } = activeCategoryStore();
  // Function to change the count of the product according to the slider value.
  const handleChange = (event: Event, value: number | number[]) => {
    switch (activeCategory) {
      case "hamburger":
        setPacket({
          ...packet,
          products: packet.products.map((product) => {
            return {
              ...product,
              count: product.name === header ? value : product.count,
            };
          }),
        });
        break;
      case "pizza":
        setPacket2({
          ...packet2,
          products: packet2.products.map((product) => {
            return {
              ...product,
              count: product.name === header ? value : product.count,
            };
          }),
        });
        break;
      case "drinks":
        setPacket3({
          ...packet3,
          products: packet3.products.map((product) => {
            return {
              ...product,
              count: product.name === header ? value : product.count,
            };
          }),
        });
        break;
    }
  };
  // Array to create the marks for the slider according to the max number.
  const marks = [
    {
      value: 0,
      label: "0",
    },
    ...Array.from({ length: maxNumber / 10 }, (_, i) => ({
      value: (i + 1) * 10,
    })),
    {
      value: maxNumber,
      label: maxNumber.toString(),
    },
  ];

  return (
    <div className="mt-8">
      <h3 className="pb-5">{header}</h3>
      <div className="flex justify-center items-center">
        <Slider
          marks={marks}
          max={maxNumber}
          aria-label="Custom marks"
          step={10}
          valueLabelDisplay="auto"
          onChange={handleChange}
          sx={{
            width: 515,
            color: "#212121",
            "& .MuiSlider-thumb": {
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${alpha("#212121", 0.16)}`,
              },
              "&.Mui-active": {
                boxShadow: `0px 0px 0px 14px ${alpha("#212121", 0.16)}`,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
