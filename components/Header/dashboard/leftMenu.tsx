
import React, { Dispatch } from "react";
import AccordionBox from "@/components/shared/accordion/accordionBox";
import { accordions } from "@/routes/dashboardRoutes/dashboardItem";

interface LeftMenuProps {
  showAside: boolean;
  setShowAside: Dispatch<React.SetStateAction<boolean>>;
}

export default function LeftMenu({ setShowAside, showAside }: LeftMenuProps) {
  
  return (
    <aside
      className={` ${
        showAside ? "left-0" : "-left-96"
      } w-96 h-screen bg-neutral-100 absolute top-0 rounded-r-3xl shadow-lg transition-all`}
    >
      <button onClick={() => setShowAside(false)}>
        <svg
          className="w-6 h-6 absolute right-4 top-4 fill-neutral-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
        </svg>
      </button>
      <AccordionBox accordions={accordions} />
    </aside>
  );
}
