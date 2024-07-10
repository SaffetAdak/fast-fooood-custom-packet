import { functionalLinks } from "@/lib/data";
import { Button, Popover } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { activeLinkStore } from "@/store/activeLinkStore";

// Component to render the custom popover opened when the header links are hovered. It renders the links and sublinks according to the active link.
export default function CustomPopover() {
  const { anchorEl, setAnchorEl, activeLink, setActiveLink } =
    activeLinkStore();

  // Function to close the popover
  const handlePopoverClose = () => {
    setAnchorEl(null);
    setActiveLink(null);
  };
  // Boolean to check if the popover is open
  const open = Boolean(anchorEl);

  // Function to render the links according to the given data
  const renderLinks = (links: any) =>
    links.map((link: any) => (
      <div key={link.name}>
        {link.name === "Custom Packet" ? (
          <Link href={link.url}>
            <div className="2xl:w-[158px] 2xl:h-[314px] md:flex-1">
              <Image
                src={link.image}
                alt={link.name}
                width={158}
                height={314}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="my-3 flex justify-between items-center text-gray-500">
              {link.icon} {link.name}
              <ArrowForwardIosIcon className="w-4 h-4" />
            </div>
          </Link>
        ) : (
          <Link href={link.url}>
            <div className="2xl:w-[165px] 2xl:h-[82px] md:flex-1">
              <Image
                src={link.image}
                alt={link.name}
                width={165}
                height={82}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="my-3 flex justify-between items-center text-gray-500">
              {link.icon && link.icon} {link.name}
              <ArrowForwardIosIcon className="w-4 h-4" />
            </div>
          </Link>
        )}
      </div>
    ));
  // Function to render the content according to the active link. If active link is "Products", it will render the products, packets and their links. If active link is "Know Us" or "Charity", it will render the sublinks. If active link is not any of them, it will return "null"
  const renderContent = () => {
    switch (activeLink) {
      case "Products":
        return (
          <>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">
                {functionalLinks[0].title1}
              </h1>
              <div className="flex gap-4 my-8">
                {renderLinks(functionalLinks[0].products)}
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold py-2">
                  {functionalLinks[0].title2}
                </h1>
                <Button className="normal-case text-black font-bold">
                  <Link href={functionalLinks[0].url}>
                    All Packets <ArrowForwardIcon />
                  </Link>
                </Button>
              </div>
              <div className="flex gap-4 my-8">
                {renderLinks(functionalLinks[0].packets)}
              </div>
            </div>
            <div className="flex pt-16 pl-12">
              {renderLinks(functionalLinks[0].customPacket)}
            </div>
          </>
        );
      case "Know Us":
      case "Charity":
        const index = activeLink === "Know Us" ? 1 : 2;
        return (
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">
              {functionalLinks[index].title}
            </h1>
            <div className="flex gap-4 my-8">
              {renderLinks(functionalLinks[index].subLinks)}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Popover
        sx={{ zIndex: 998 }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        onClose={(event, reason) => {
          if (reason === "backdropClick") {
            handlePopoverClose();
          }
        }}
        PaperProps={{
          style: {
            width: "100%",
            boxShadow: "1",
            backgroundColor: "#F5F5F5",
          },
        }}
        disableRestoreFocus
      >
        <div
          className="z-[998] lg:flex mx-4 lg:mx-8 xl:mx-96 pt-24 lg:py-12  bg-[#F5F5F5]"
          onMouseLeave={handlePopoverClose}
          onMouseEnter={() => setAnchorEl(anchorEl)}
        >
          {renderContent()}
        </div>
      </Popover>
    </div>
  );
}
