import React, { useState, useContext } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/logo.png";
import useMediaQuery from "../../hooks/mediaQuery";
import ActionButton from "../../shared/Button/ActionButton";
import { HomepageCont } from "../../Context/HomepageContext";

const Navbar: React.FC = () => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const ctxHomePageContext = useContext(HomepageCont);
  const navBarBackground = !ctxHomePageContext.isTopOfPage
    ? "bg-primary-100 drop-shadow"
    : "bg-gray-20";

  return (
    <nav>
      <div
        className={`${flexBetween} top-30 fixed z-30 w-full py-6 ${navBarBackground}`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 gap-16 py-6`}>
          <figure>
            <img src={Logo} alt="logo" />
          </figure>
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full gap-8 text-xl`}>
              <div className={`${flexBetween} gap-8`}>
                <Link page="Home" />

                <Link page="Benefits" />

                <Link page="Our Classes" />

                <Link page="Contact Us" />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton
                  setSelectedPage={ctxHomePageContext.setSelectedPage}
                >
                  Become a member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondarry-500 p-2"
              onClick={() => setIsMenuToggled((prev) => !prev)}
            >
              <Bars3Icon className="h-6 w-6 text-white" />{" "}
            </button>
          )}
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 shadow-xl transition-all duration-300">
          <div className="flex justify-end p-12">
            <button
              onClick={() => {
                setIsMenuToggled((prev) => !prev);
              }}
            >
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className={`ml-[33%] flex flex-col gap-10 font-sans text-2xl`}>
            <Link page="Home" />

            <Link page="Benefits" />

            <Link page="Our Classes" />

            <Link page="Contact Us" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
