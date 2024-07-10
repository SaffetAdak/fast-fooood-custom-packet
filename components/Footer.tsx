"use client";
import {
  InfoLinks,
  footerLinks,
  paymentPartners,
  socialLinks,
} from "@/lib/data";
import { Button, Divider, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LanguageButton from "./LanguageButton";

// Theme for the footer.
const theme = createTheme({
  palette: {
    secondary: {
      main: "#95959565",
    },
  },
});
// Component to render the footer of the website.
export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <footer className="flex flex-col py-10 px-8 sm:py-20 md:px-36 bg-black/85 text-white">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:pr-0 md:pr-[2rem] lg:pr-[10.5rem]">
            <div className="flex justify-center sm:justify-start">
              <Link href="/">
                <Image
                  src="/logo-white.png"
                  alt="fast fooood logo"
                  width={60}
                  height={50}
                  quality={100}
                />
              </Link>
            </div>

            <div className="text-white/65 py-6">
              <h3 className="font-bold text-center sm:text-left">
                Let`s keep in touch!
              </h3>
              <p className="text-sm text-center sm:text-left">
                Let us inform you about new products and developments at fast
                fooood & subscribe to our monthly e-newsletter cycle!
              </p>
            </div>
            <div>
              <div className="flex flex-col mx-auto sm:flex-row items-center flex-wrap gap-4 pb-4">
                <TextField
                  label="your email address"
                  placeholder="fast@fooood.com"
                  variant="outlined"
                  size="small"
                  color="secondary"
                  sx={{
                    width: "100%",
                    maxWidth: "28rem",

                    "& label ": {
                      color: "#c4c1c1",
                    },
                    "& input": {
                      color: "#c4c1c1",
                    },
                    "& fieldset": {
                      borderColor: "#95959565",
                    },
                  }}
                />
                <Button className="font-semibold text-lg text-black normal-case shadow-md rounded-full py-3 w-full sm:w-auto  sm:px-4 transition bg-white/80 hover:bg-white/10 hover:shadow-lg">
                  Send
                </Button>
              </div>
              <p className="text-xs text-white/65 text-center sm:text-left">
                As a subscriber, I agree to the privacy policy and confirm that
                I want to hear from Fast Fooood.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-12 sm:mt-0">
            <div className="grid grid-cols-2 gap-4 pr-2 sm:pr-4 lg:pr-16 font-semibold text-white/90">
              {footerLinks.map((link) => (
                <div key={link.name} className="pb-5 mx-2 w-full ">
                  <Link href={link.url}>{link.name}</Link>
                </div>
              ))}
            </div>
            <div className="flex flex-row sm:flex-col sm:pt-0 pt-6 text-white/90 justify-center sm:justify-start">
              {socialLinks.map((link) => (
                <div
                  key={link.name}
                  className="sm:pb-5 mx-auto sm:mx-0 sm:pr-0"
                >
                  <Link className="flex items-center gap-2" href={""}>
                    {link.icon}
                    <span className="hidden sm:block">{link.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Divider className="bg-[#959595] my-6" />
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
            <p className="text-sm text-white/65 text-center sm:text-left mb-4 sm:mb-0">
              © 2024 fast fooood. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center">
              {InfoLinks.map((link) => (
                <Link
                  className="text-sm text-white/65 mx-2"
                  key={link.name}
                  href={link.url}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center text-sm mt-4 sm:mt-0">
              <LanguageButton>EN</LanguageButton>
              <Divider className="h-4 w-[0.2rem] bg-[#959595] mx-2" />
              <LanguageButton>TR</LanguageButton>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex gap-2">
              {paymentPartners.map((partner) => (
                <Image
                  key={partner.name}
                  src={partner.icon}
                  alt={partner.name}
                  width={48}
                  height={24}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}
