"use client";
import { iconedLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import CustomMenu from "./CustomMenu";
import Links from "./Links";
import { activeLinkStore } from "@/store/activeLinkStore";
import CustomPopover from "./CustomPopover";

// Component to render the header of the website.
export default function Header() {
  const { setMenuAnchorEl, menuOpen, setMenuOpen } = activeLinkStore();
  // Function to handle the click event of the menu button that appears on mobile devices.
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-[999] bg-[#F5f5f5]">
      <header className="mx-auto xl:w-[72rem] p-7">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="fast fooood logo"
                width={60}
                height={60}
                quality={100}
              />
            </Link>
          </li>
          {/* Render Links and CustomPopover on bigger devices */}
          <div className="hidden md:block">
            <Links />
            <CustomPopover />
          </div>
          {/* CustomMenu on mobile or smaller devices when menu opened */}
          {menuOpen && <CustomMenu />}
          <div className="flex items-center gap-2">
            <div className="flex gap-4 text-gray-600">
              {iconedLinks.map((link) => (
                <Link key={link.id} href={link.url}>
                  {link.icon}
                </Link>
              ))}
            </div>
            <div className="block md:hidden ml-2 pt-2 text-gray-600">
              <button onClick={handleClick}>
                {menuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6h18M3 12h18M3 18h18"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </ul>
      </header>
    </div>
  );
}
