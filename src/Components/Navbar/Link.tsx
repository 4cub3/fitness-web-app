import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types/types";
import { HomepageCont } from "../../Context/HomepageContext";
interface Pages {
  page: string;
}

const Link: React.FunctionComponent<Pages> = ({ page }) => {
  const ctxHome = useContext(HomepageCont);
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => {
        ctxHome.setSelectedPage(lowerCasePage);
      }}
    >
      <span
        className={`${
          ctxHome.selectedPage === lowerCasePage ? "text-primary-500" : ""
        } transition-color duration-500 hover:text-primary-500 `}
      >
        {page}
      </span>
    </AnchorLink>
  );
};

export default Link;
