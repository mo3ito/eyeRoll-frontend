
interface OptionsAccordionBoxProps {
  id: string;
  href: string;
  name: string;
  childOption?: childrenOption[] | undefined
}



interface childrenOption {
  id: string ;
  childName : string;
  href: string
}

interface Option {
  id: string;
  href: string;
  name: string;
  childOption: childrenOption[]
}

export interface AccordionProps {
  title: string;
  options: OptionsAccordionBoxProps[];
  setShowAside: React.Dispatch<React.SetStateAction<boolean>>;
}
