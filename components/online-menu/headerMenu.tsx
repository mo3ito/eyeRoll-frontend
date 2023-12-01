import React from "react";

export default function HeaderMenu({ content }: { content: string }) {
  return (
    <div className="flex  items-center pb-2 sm:pb-4  px-2 ">
      <hr className="flex-grow border-t border-fuchsia-400 mr-4" />
      <p className="text-fuchsia-400 max-xs:text-xs  text-sm break-words max-xs:max-w-[100px] max-w-[200px] sm:max-w-4xl lg:max-w-7xl sm:text-base md:text-lg lg:text-xl">
        {content}
      </p>
      <hr className="flex-grow border-t border-fuchsia-400 ml-4" />
    </div>
  );
}
