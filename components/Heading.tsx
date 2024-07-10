import { SectionHeadingProps } from "@/lib/types";
//Component to render the heading of the sections.
export default function Heading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-semibold capitalize text-start">{children}</h2>
  );
}
