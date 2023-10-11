
import React, { Dispatch } from "react";
import AccordionBox from "@/components/shared/accordion/accordionBox";
import { accordionItems } from "@/routes/dashboardRoutes/dashboardItem";
import CloseIcon from "@/components/shared/icon/closeIcon";



interface LeftMenuProps {
  showAside: boolean;
  setShowAside: Dispatch<React.SetStateAction<boolean>>;
  leftMenuRef: React.RefObject<HTMLElement>
}

export default function LeftMenu({ setShowAside, showAside , leftMenuRef }: LeftMenuProps) {
 
 
  
  
  return (
    <aside
      ref={leftMenuRef}
      className={` ${
        showAside ? "left-0" : "-left-96"
      } w-96 h-screen   bg-gray-100 border-2 border-fuchsia-300 absolute top-0 rounded-r-3xl shadow-lg transition-all z-50`}
    >
   
      <CloseIcon classNameButton="absolute right-4 top-4  " classNameSvg="w-6 h-6  fill-fuchsia-500  " onClick={() => setShowAside(false)}/>
      <AccordionBox className="w-full h-max mt-16 last:border-b-2 " accordions={accordionItems} setShowAside={setShowAside} />
    </aside>
  );
}
