import{ useEffect, useState } from "react";

const useScreen = (screenHeight:number) => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= screenHeight) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
     
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsTopOfPage]);
  return isTopOfPage;
};

export default useScreen;
