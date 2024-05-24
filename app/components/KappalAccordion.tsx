import { Accordion, AccordionProps } from "@nextui-org/react";

interface KappalAccordionProps extends AccordionProps {
  // Add any additional props you want to expose
  customProp?: string;
}

const KappalAccordion: React.FC<KappalAccordionProps> = ({ customProp, ...props }) => {

  return (
    <Accordion
      {...props}
    />
  );
};

export default KappalAccordion;
