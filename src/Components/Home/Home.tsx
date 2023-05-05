import React, { useContext } from "react";
import useMediaQuery from "../../hooks/mediaQuery";
import HomePageText from "../../assets/HomePageText.png";
import ActionButton from "../../shared/Button/ActionButton";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { HomepageCont } from "../../Context/HomepageContext";
import { SelectedPage } from "../../shared/types/types";


const Home: React.FC = () => {
  const ctxHomepage = useContext(HomepageCont);

  const isABoveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <header id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0  ">
      <motion.section
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => ctxHomepage.setSelectedPage(SelectedPage.home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.article
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <figure className="relative before:absolute before:-left-20 before:-top-20 before:-z-[1] before:hidden before:content-evolvetext md:before:block">
              <img alt="home-page-text" src={HomePageText} />
            </figure>

            <p className="mt-8 text-lg capitalize md:text-start">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the body shapes that you dream of.. Get Your Dream
              Body Now
            </p>
          </motion.article>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={ctxHomepage.setSelectedPage}>
              Join now
            </ActionButton>
            <AnchorLink
              onClick={() =>
                ctxHomepage.setSelectedPage(SelectedPage.contactus)
              }
              href={`#${SelectedPage.contactus}`}
            >
              <p className="text-lg font-bold text-primary-500 underline hover:text-secondarry-500">
                learn more
              </p>
            </AnchorLink>
          </motion.div>
        </div>
        <figure className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <img src={HomePageGraphic} alt="homepage-graphic" />
        </figure>
      </motion.section>
      {/* sponsors */}
      {isABoveMediumScreen ? (
        <section className="h-[150px] w-full bg-primary-100 py-20">
          <div className="mx-auto w-5/6 ">
            <figure className="flex items-center justify-between gap-8">
              <img src={SponsorForbes} alt="forbes-logo" />
              <img src={SponsorRedBull} alt="redbull-logo" />
              <img src={SponsorFortune} alt="fortune-logo" />
            </figure>
          </div>
        </section>
      ) : (
        ""
      )}
    </header>
  );
};

export default Home;
