import React from "react";
import Accordion from "./accordion";
import { AccordionBoxProps } from "@/types/accordionType/accordionBoxType";

export default function AccordionBox({ accordions }: AccordionBoxProps) {
  

  return (
    <div className="w-full h-max mt-8 last:border-b-2 ">
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.id}
          title={accordion.title}
          options={...accordion.options}
        />
      ))}
    </div>
  );
}
