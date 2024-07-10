import { SummaryBoxProps } from "@/lib/types";
import { contentStore } from "@/store/contentStore";
import { Button } from "@mui/material";
import React from "react";

// Component to render the summary box of the selected products in the cart.
export default function SummaryBox({ title, contents }: SummaryBoxProps) {
  const {
    setPacket,
    setPacket2,
    setPacket3,
    packet,
    packet2,
    packet3,
    setClear,
  } = contentStore();
  // Function to handle the clear button click event. It sets the clear state to true and resets the count of the products in the packet.
  const handleClear = () => {
    setClear(true);
    switch (title) {
      case "hamburger":
        setPacket({
          title: "hamburger",
          products: packet.products.map((product) => ({
            ...product,
            count: 0,
          })),
        });
        break;
      case "pizza":
        setPacket2({
          title: "pizza",
          products: packet2.products.map((product) => ({
            ...product,
            count: 0,
          })),
        });
        break;
      case "drinks":
        setPacket3({
          title: "drinks",
          products: packet3.products.map((product) => ({
            ...product,
            count: 0,
          })),
        });
        break;
    }
  };
  return (
    <div className="rounded-lg shadow-md">
      <div className="p-6">
        <h1 className="pb-2 font-bold text-lg">{title}</h1>
        <ul>
          {contents.map((content, index) => (
            <li className="text-sm text-gray-700/80" key={index}>
              {content}
            </li>
          ))}
        </ul>
        <Button
          className=" mt-4 font-bold text-black normal-case shadow-md rounded-xl w-full h-12 transition bg-white/50 hover:bg-white/70 hover:shadow-lg"
          onClick={handleClear}
        >
          Discard
        </Button>
      </div>
    </div>
  );
}
