import Image from "next/image";
import Heading from "./Heading";
import CachedIcon from "@mui/icons-material/Cached";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  Button,
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Menu,
} from "@mui/material";
import SummaryBox from "./SummaryBox";
import { contentStore } from "@/store/contentStore";
import React, { useEffect, useState } from "react";
import main from "../public/main.jpeg";

// Component to render the summary of the selected products in the cart.
export default function Summary() {
  // Get the content store to access clear state. If clear state is true, close the menu.
  const { clear, setClear } = contentStore();
  // Get the packets from the content store.
  const { packet, packet2, packet3 } = contentStore();
  const packets = [packet, packet2, packet3];
  // State to check if the summary arrow is rotated or not.
  const [isRotated, setIsRotated] = useState(false);
  // State to check the anchor element of the menu.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // Boolean to check if the menu is open.
  const open = Boolean(anchorEl);

  // Function to handle the click event of the summary button.
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      handleClose();
    } else {
      setAnchorEl(event.currentTarget);
    }
    setIsRotated(!isRotated);
  };
  // Function to handle the close event of the menu.
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Get the theme and check if the screen is small.
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));

  // Calculate the total price of the selected products.
  let total = packets.reduce((acc, packet) => {
    return (
      acc +
      packet.products.reduce((acc, product) => {
        return acc + (product.count / 10) * product.price;
      }, 0)
    );
  }, 0);
  // Use effect to close the menu if the clear state is true.
  useEffect(() => {
    if (clear) {
      handleClose();
      setClear(false);
    }
  }, [clear, setClear]);

  // If the screen is small, render the summary in the bottom app bar.
  if (isScreenSmall) {
    return (
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#F6F5F4", top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <div className="flex-1 flex-col">
            <div hidden={total === 0}>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className="z-[998]"
                PaperProps={{
                  style: {
                    width: "100%",
                    backgroundColor: "#F6F5F4",
                    paddingBottom: "15px",
                    borderRadius: "10px 10px 0px 0px",
                  },
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <div className="flex gap-4 p-3 mt-2 shadow-md rounded-lg">
                  <CachedIcon className="text-gray-400" />
                  <p>Instant delivery</p>
                </div>
                {packets
                  .filter(
                    (packet) =>
                      packet.products.filter((product) => product.count !== 0)
                        .length !== 0
                  )
                  .map((packet) => (
                    <SummaryBox
                      key={packet.title}
                      title={packet.title}
                      contents={packet.products
                        .filter((product) => product.count !== 0)
                        .map((product) => product.count + " " + product.name)}
                    />
                  ))}
              </Menu>
              <div className="flex my-4 justify-between text-black">
                <Button
                  onClick={handleClick}
                  className="normal-case text-black font-bold"
                >
                  Summary{" "}
                  <span className={`${isRotated ? "rotate-180" : ""} `}>
                    <ExpandLessIcon />
                  </span>
                </Button>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
            <Button
              disabled={total === 0}
              className="disabled:bg-gray-300/50 disabled:text-neutral-400 bg-black/80 hover:bg-black text-white text-base font-bold rounded-full flex items-center justify-center my-4 h-12 w-full capitalize"
            >
              Add to cart
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
  return (
    <div className="hidden md:block h-full">
      <div className="lg:ml-24 lg:m-0 m-12 bg-white rounded-2xl shadow-md transition">
        <div className="p-8">
          <Heading>Custom packet</Heading>
          <div className="flex gap-4 p-3 mt-7 shadow-md rounded-lg">
            <CachedIcon className="text-gray-400" />
            <p>Instant delivery</p>
          </div>
          <Image
            className="my-6"
            src={main}
            alt="Descriptive alt text"
            width={402}
            height={180}
          />
          {packets
            .filter(
              (packet) =>
                packet.products.filter((product) => product.count !== 0)
                  .length !== 0
            )
            .map((packet) => (
              <SummaryBox
                key={packet.title}
                title={packet.title}
                contents={packet.products
                  .filter((product) => product.count !== 0)
                  .map((product) => product.count + " " + product.name)}
              />
            ))}

          <Button
            disabled={total === 0}
            className="disabled:bg-gray-300/50 disabled:text-neutral-400 bg-black/80 hover:bg-black text-white text-base font-bold rounded-full flex items-center justify-center my-8 h-12 w-full capitalize"
          >
            Add to cart (${total.toFixed(2)} )
          </Button>
        </div>
      </div>
    </div>
  );
}
