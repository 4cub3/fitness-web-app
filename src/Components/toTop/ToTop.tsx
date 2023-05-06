import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ArrowLongUpIcon } from "@heroicons/react/24/solid";
const ToTop: React.FC = () => {
  return (
    <AnchorLink
      href="#home"
      className="fixed bottom-8 right-8 z-10 flex h-24 w-24 items-center justify-center rounded-full bg-primary-500 p-6 text-white drop-shadow-xl"
    >
      <ArrowLongUpIcon />
    </AnchorLink>
  );
};

export default ToTop;
