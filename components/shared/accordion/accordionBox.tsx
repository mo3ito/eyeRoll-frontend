import React from "react";
import Accordion from "./accordion";
import { AccordionBoxProps } from "@/types/accordionType/accordionBoxType";
export default function AccordionBox({ accordions , setShowAside , className , setIsShowImportPassword}: AccordionBoxProps) {
  

  return (
    <div className={className}>
  
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.id}
          title={accordion.title}
          options={...accordion.options}
          setShowAside={setShowAside}
          setIsShowImportPassword={setIsShowImportPassword}
        />
      ))}
    </div>
  );
}