import React from "react";
import { SelectedPage } from "../../shared/types/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
interface BenefitProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  setSelectedPage: (a: SelectedPage) => void;
}

const Benefit: React.FC<BenefitProps> = ({
  title,
  icon,
  description,
  setSelectedPage,
}) => {
    const childVariant = {
        hidden: {opacity: 0, scale:0.9},
        visible: {opacity: 1, scale:1},
    }
  return (
    <motion.article className="mt-8 flex flex-col items-center gap-8 border border-gray-500 p-8 text-center" variants={childVariant}>
      <span className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-100">
        {icon}
      </span>
      <p>{title}</p>
      <p>{description}</p>
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.contactus)}
        href={`#${SelectedPage.contactus}`}
      >
        <p className="text-lg font-bold text-primary-500 underline hover:text-secondarry-500">
          learn more
        </p>
      </AnchorLink>
    </motion.article>
  );
};

export default Benefit;
