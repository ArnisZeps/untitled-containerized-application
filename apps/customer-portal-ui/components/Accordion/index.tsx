import IAccordionProps from "@/interfaces/IAccordionProps";

const AccordionItem = ({ title, description }: IAccordionProps) => {
  return (
    <details className="group border px-4">
      <summary className="flex items-center cursor-pointer">
        <span className="transition-transform group-open:rotate-90  text-blue-500">{" > "}</span>
        <span className="text-lg font-semibold  text-blue-500 pl-4">{title}</span>
      </summary>
      <p className="mt-2">{description}</p>
    </details>
  );
};

export default AccordionItem;
