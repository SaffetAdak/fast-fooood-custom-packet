import { functionalLinks, staticLinks } from "@/lib/data";
import { Button, Divider, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { activeLinkStore } from "@/store/activeLinkStore";

// Component to render the custom menu opened when the menu button is clicked in the header on mobile devices. It renders the links and sublinks according to the active link.
export default function CustomMenu() {
  const { menuAnchorEl, setMenuAnchorEl, activeLink, setActiveLink } =
    activeLinkStore();
  // Function to close the menu
  const handleClose = () => {
    setMenuAnchorEl(null);
  };
  // Boolean to check if the menu is open
  const open = Boolean(menuAnchorEl);

  // Function to render the links according to the given data
  const renderLinks = (links: any) =>
    links.map((link: any) => (
      <div key={link.name}>
        <Link href={link.url}>
          <div className="text-black/70">
            {link.icon} {link.name}
          </div>
        </Link>
      </div>
    ));

  // Function to render the content according to the active link. If active link is "Products", it will render the products, packets and their links. If active link is "Know Us" or "Charity", it will render the sublinks. If active link is not any of them, it will return "null"
  const renderContent = () => {
    switch (activeLink) {
      case "Products":
        return (
          <div className="p-4">
            <div className="mx-7 flex flex-col gap-8">
              <Divider />
              <div className="grid grid-cols-1 gap-8">
                {renderLinks(functionalLinks[0].products)}
              </div>
              <Divider />
              <div className="flex justify-between text-lg font-semibold text-black ">
                <h1>{functionalLinks[0].title2}</h1>
                <Button className="normal-case text-black font-bold">
                  <Link href={functionalLinks[0].url}>
                    All packets <ArrowForwardIcon />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {renderLinks(functionalLinks[0].packets)}
              </div>
              <Divider />
            </div>
            <Button className="m-4 normal-case font-bold">
              {renderLinks(functionalLinks[0].customPacket)}
            </Button>
          </div>
        );
      case "Know Us":
      case "Charity":
        const index = activeLink === "Know Us" ? 1 : 2;
        return (
          <div className="p-4 mx-7">
            <Divider />
            <div className="flex mt-8 flex-col gap-8">
              <div className="grid grid-cols-1 gap-8">
                {renderLinks(functionalLinks[index].subLinks)}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Menu
      anchorEl={menuAnchorEl}
      open={open}
      onClose={handleClose}
      className="z-[998]"
      PaperProps={{
        style: {
          width: "100%",
          paddingTop: "25px",
          boxShadow: "1",
          backgroundColor: "#F5F5F5",
        },
      }}
    >
      {activeLink ? (
        <div className="w-full">
          <Button
            onClick={() => setActiveLink(null)}
            className="text-lg font-semibold text-black mt-4 mx-1 normal-case gap-2"
          >
            <ArrowBackIosIcon />
            <h1>{activeLink}</h1>
          </Button>
          {renderContent()}
        </div>
      ) : (
        <>
          {functionalLinks.map((link) => (
            <MenuItem key={link.name} onClick={() => setActiveLink(link.name)}>
              <div className="w-full flex justify-between items-center mb-2 hover:underline underline-offset-8 cursor-pointer text-lg">
                {link.name}
                <ArrowForwardIosIcon className="w-4 h-4 ml-auto" />
              </div>
            </MenuItem>
          ))}
          {staticLinks.map((link) => (
            <MenuItem key={link.name}>
              <Link href={link.url} className="w-full mb-2">
                <span className="flex items-center hover:underline underline-offset-8 cursor-pointer text-lg">
                  {link.name}
                </span>
              </Link>
            </MenuItem>
          ))}
        </>
      )}
    </Menu>
  );
}
