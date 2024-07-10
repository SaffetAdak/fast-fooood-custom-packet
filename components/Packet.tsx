"use client";
import Link from "next/link";
import Heading from "./Heading";
import Category from "./Category";
import CustomSlider from "./CustomSlider";
import { activeCategoryStore } from "@/store/activeCategoryStore";

// Component to render the packet section that contains the category and sliders.
export default function Packet() {
  const { activeCategory } = activeCategoryStore();
  return (
    <div className="flex-1 w-full">
      <div className="flex justify-between items-center mb-6">
        <Heading>Custom Packet</Heading>
        <Link className="h-5" href="/know-us/how-it-works">
          How It Works?
        </Link>
      </div>
      <p className="text-wrap mb-20">
        Let us create a special package for you from the products and quantities
        you choose.{" "}
      </p>
      <Category />
      {/* Render sliders according to activeCategory */}
      {activeCategory === "hamburger" && (
        <>
          <CustomSlider header="Standard Hamburger" />
          <CustomSlider header="Super Hamburger" />
          <CustomSlider header="Super+ Hamburger" />
        </>
      )}

      {activeCategory === "pizza" && (
        <>
          <CustomSlider header="Classic Pizza" maxNumber={100} />
          <CustomSlider header="Super Pizza" maxNumber={100} />
        </>
      )}
      {activeCategory === "drinks" && (
        <>
          <CustomSlider header="Cold Drinks" />
          <CustomSlider header="Hot Drinks" />
          <CustomSlider header="Super Drinks" />
        </>
      )}
    </div>
  );
}
