import IAccordionProps from "@/interfaces/IAccordionProps";

const AccordionItem = ({ title, description }: IAccordionProps) => {
  return (
    <details className="group border  p-4 mb-2">
      <summary className="flex items-center justify-between cursor-pointer">
        <span className="transition-transform group-open:rotate-90">{">"}</span>
        <span className="text-lg font-semibold">{title}</span>
      </summary>
      <p className="mt-2 text-gray-700">{description}</p>
    </details>
  );
};

export default AccordionItem;
