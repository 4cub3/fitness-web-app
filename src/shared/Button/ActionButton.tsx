import React, { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types/types";
interface ActionButtonProps {
  children: ReactNode;
  setSelectedPage: (selectedPage: SelectedPage) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
setSelectedPage,
  children,
}) => {

  return (
    <AnchorLink href={'#'+ SelectedPage.contactus} onClick={()=>{setSelectedPage(SelectedPage.contactus)}}>
      <span className="rounded-md bg-secondarry-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
        {children}
      </span>
    </AnchorLink>
  );
};

export default ActionButton;
