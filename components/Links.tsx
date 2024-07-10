import { functionalLinks, staticLinks } from "@/lib/data";
import { activeLinkStore } from "@/store/activeLinkStore";
import Link from "next/link";
import React from "react";
// Component to render the links in the header for the bigger devices.
export default function Links() {
  const { setAnchorEl, setActiveLink } = activeLinkStore();
  // Function to handle the popover open event
  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    linkName: string
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveLink(linkName);
  };
  return (
    <div className="flex gap-8">
      {functionalLinks.map((link) => (
        <li
          className="flex items-center justify-center relative hover:underline underline-offset-8 cursor-pointer"
          key={link.name}
          onMouseEnter={(e) => handlePopoverOpen(e, link.name)}
        >
          <p className="text-lg">{link.name}</p>
        </li>
      ))}

      {staticLinks.map((link) => (
        <li
          className="flex items-center justify-center relative  hover:underline underline-offset-8 cursor-pointer text-lg"
          key={link.name}
        >
          <Link href={link.url}>{link.name}</Link>
        </li>
      ))}
    </div>
  );
}
