import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import TuneIcon from "@mui/icons-material/Tune";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import chaarity1 from "../public/charity1.jpeg";
import chaarity2 from "../public/charity2.png";
import chaarity3 from "../public/charity3.png";
import custom from "../public/custom.jpeg";
import packet1 from "../public/packet1.jpeg";
import packet2 from "../public/packet2.jpeg";
import packet3 from "../public/packet3.jpeg";
import packet4 from "../public/packet4.jpeg";
import packet5 from "../public/packet5.jpeg";
import product1 from "../public/product1.jpeg";
import product2 from "../public/product2.jpeg";
import product3 from "../public/product3.jpeg";
import product4 from "../public/product4.jpeg";
import product5 from "../public/product5.jpeg";
import who1 from "../public/who1.jpeg";
import who2 from "../public/who2.jpeg";
import who3 from "../public/who3.jpeg";
import who4 from "../public/who4.jpeg";
import who5 from "../public/who5.jpeg";
import troy from "../public/troy.svg";
import masterCard from "../public/master.svg";
import visa from "../public/visa.svg";
import americanExpress from "../public/amEx.svg";

// Functional links to be displayed in the header. Each link has a name, title, and sublinks.
export const functionalLinks = [
  {
    name: "Products",
    title1: "Products",
    title2: "Packets",
    title3: "All Packets",
    url: "/packets",
    products: [
      {
        icon: React.createElement(ShoppingBagIcon),
        image: product1,
        name: "Standard Hamburger",
        url: "/product/standard-hamburger",
      },
      {
        icon: React.createElement(ShoppingBagIcon),
        image: product2,
        name: "Super Hamburger",
        url: "/product/super-hamburger",
      },
      {
        icon: React.createElement(ShoppingBagIcon),
        image: product3,
        name: "Super+ Hamburger",
        url: "/product/super-plus-hamburger",
      },
      {
        icon: React.createElement(ShoppingBagIcon),
        image: product4,
        name: "Drinks",
        url: "/product/drinks",
      },
      {
        icon: React.createElement(ShoppingBagIcon),
        image: product5,
        name: "Pizza",
        url: "/product/pizza",
      },
    ],
    packets: [
      {
        icon: React.createElement(ShoppingBasketIcon),
        image: packet1,
        name: "Burger Bliss Bundle",
        url: "/packets/bbb",
      },
      {
        icon: React.createElement(ShoppingBasketIcon),
        image: packet2,
        name: "Classic Combo Pack",
        url: "/packets/ccp",
      },
      {
        icon: React.createElement(ShoppingBasketIcon),
        image: packet3,
        name: "Triple Treat Feast",
        url: "/packets/ttf",
      },
      {
        icon: React.createElement(ShoppingBasketIcon),
        image: packet4,
        name: "Grill & Sip Combo",
        url: "/packets/gsc",
      },
      {
        icon: React.createElement(ShoppingBasketIcon),
        image: packet5,
        name: "Pizza Party Pack",
        url: "/product/ppp",
      },
    ],
    customPacket: [
      {
        icon: React.createElement(TuneIcon),
        image: custom,
        name: "Custom Packet",
        url: "/custom-packet",
      },
    ],
  },
  {
    name: "Know Us",
    title: "Know Us",
    subLinks: [
      {
        image: who1,
        name: "Why Us?",
        url: "/know-us/why-us",
      },
      {
        image: who2,
        name: "How It Works?",
        url: "/know-us/how-it-works",
      },
      {
        image: who3,
        name: "Price Policy",
        url: "/know-us/price-policy",
      },
      {
        image: who4,
        name: "FAQs",
        url: "/know-us/faqs",
      },
      {
        image: who5,
        name: "All Materials We Use",
        url: "/know-us/all-materials",
      },
    ],
  },
  {
    name: "Charity",
    title: "Charity",
    subLinks: [
      {
        image: chaarity1,
        name: "Donation Culture",
        url: "/donation-culture",
      },
      {
        image: chaarity2,
        name: "Donation",
        url: "/product/donation",
      },
      {
        image: chaarity3,
        name: "Charity",
        url: "/charity",
      },
    ],
  },
] as const;

// Static links to be displayed in the header. Each link has a name and a URL.
export const staticLinks = [
  {
    name: "Hunger Test!",
    url: "/quiz",
  },
  {
    name: "Custom Packet",
    url: "/custom-packet",
  },
] as const;

// Iconed links to be displayed in the header. Each link has an icon and a URL.
export const iconedLinks = [
  {
    id: 1,
    icon: React.createElement(ShoppingCartOutlinedIcon),
    url: "/cart",
  },
  {
    id: 2,
    icon: React.createElement(PermIdentityOutlinedIcon),
    url: "/auth/login",
  },
] as const;

// Footer links to be displayed in the footer. Each link has a name and a URL.
export const footerLinks = [
  { name: "Standard Hamburger", url: "product/standard-hamburger" },
  { name: "Super Hamburger", url: "product/super-hamburger" },
  { name: "Drinks", url: "product/drinks" },
  { name: "Pizza", url: "product/pizza" },
  { name: "FAQs", url: "know-us/faqs" },
  { name: "Charity", url: "/charity" },
  { name: "Know Us", url: "know-us/why-us" },
  { name: "Hunger Test", url: "/quiz" },
] as const;

// Social links to be displayed in the footer. Each link has an icon, a name, and a URL.
export const socialLinks = [
  {
    icon: React.createElement(FacebookIcon),
    name: "Facebook",
  },
  {
    icon: React.createElement(InstagramIcon),
    name: "Instagram",
  },
  {
    icon: React.createElement(XIcon),
    name: "X",
  },
  {
    icon: React.createElement(LinkedInIcon),
    name: "Linkedin",
  },
] as const;

// Info links to be displayed in the footer. Each link has a name and a URL.
export const InfoLinks = [
  {
    name: "Membership Agreement",
    url: "/know-us/membership-agreement",
  },
  {
    name: "Privacy Policy",
    url: "/know-us/privacy",
  },
  {
    name: "Cookies Policy",
    url: "/know-us/cookies",
  },
  {
    name: "Test Results",
    url: "/know-us/test-results",
  },
] as const;

// Payment partners to be displayed in the footer. Each partner has a name and an icon.
export const paymentPartners = [
  {
    name: "Troy",
    icon: troy,
  },
  {
    name: "MasterCard",
    icon: masterCard,
  },
  {
    name: "Visa",
    icon: visa,
  },
  {
    name: "American Express",
    icon: americanExpress,
  },
] as const;
