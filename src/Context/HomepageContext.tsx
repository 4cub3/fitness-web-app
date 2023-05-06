import React, { useState, useEffect } from "react";
import { SelectedPage } from "../shared/types/types";

interface HomePageContextProps {
  children: React.ReactNode;
}

interface ContextType {
  selectedPage?: SelectedPage;
  isTopOfPage: boolean;
  setSelectedPage: (a: SelectedPage) => void;
}

export const HomepageCont = React.createContext<ContextType>({
  selectedPage: SelectedPage.home,
  setSelectedPage: () => {},
  isTopOfPage: true,
});

const HomepageContext: React.FC<HomePageContextProps> = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsTopOfPage]);

  const handleSelectedPage = (a:SelectedPage = SelectedPage.home) =>{
    setSelectedPage(a)
  }

  const values = {
    selectedPage,
    isTopOfPage,
    setSelectedPage: handleSelectedPage,
  };

  return (
    <HomepageCont.Provider value={values}>{children}</HomepageCont.Provider>
  );
};

export default HomepageContext;
