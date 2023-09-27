interface OptionsAccordionBoxProps {
  id: string;
  href: string;
  name: string;
}

export interface AccordionBoxProps {
  accordions: {
    id: string;
    title: string;
    options: OptionsAccordionBoxProps[];
  }[];
  setShowAside: React.Dispatch<React.SetStateAction<boolean>>;
}
