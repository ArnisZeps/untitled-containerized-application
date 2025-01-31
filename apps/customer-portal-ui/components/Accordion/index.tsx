import { forwardRef } from "react";
import IAccordionProps from "@/interfaces/IAccordionProps";

const AccordionItem = forwardRef<HTMLDetailsElement, IAccordionProps>(
  ({ title, description }, ref) => {
  return (
    <details ref={ref} className="group border px-4">
      <summary className="flex items-center cursor-pointer">
        <span className="transition-transform group-open:rotate-90  text-blue-500">{" > "}</span>
        <span className="text-lg font-semibold  text-blue-500 pl-4">{title}</span>
      </summary>
      <p className="mt-2">{description}</p>
    </details>
  );
}
);

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
