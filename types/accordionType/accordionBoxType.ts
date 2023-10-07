interface childrenOption {
  id: string ;
  childName : string;
  href: string
}

interface OptionsAccordionBoxProps {
  id: string;
  href: string;
  name: string;
  childOption?: childrenOption[] | undefined
}

export interface AccordionBoxProps {
  accordions: {
    id: string;
    title: string;
    options: OptionsAccordionBoxProps[];
  }[];
  setShowAside: React.Dispatch<React.SetStateAction<boolean>>;
  className: string
}
