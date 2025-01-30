import IAccordionProps from "@/interfaces/IAccordionProps";

const AccordionItem = ({ title, description }: IAccordionProps) => {
  return (
    <details className="group border  p-4 mb-2">
      <summary className="flex items-center cursor-pointer">
        <span className="transition-transform group-open:rotate-90  text-blue-500">{" > "}</span>
        <span className="text-lg font-semibold  text-blue-500 pl-4">{title}</span>
      </summary>
      <p className="mt-2 text-blue-500">{description}</p>
    </details>
  );
};

export default AccordionItem;
