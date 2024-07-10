import { Button } from "@mui/material";
import React from "react";
// Component to render the language button in the footer. It should handle language change logic in the actual app.
export default function LanguageButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Button className="font-semibold text-sm text-[#959595] focus:text-white hover:bg-transparent">
        {children}
      </Button>
    </div>
  );
}
