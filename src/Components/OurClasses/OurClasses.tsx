import React, { useContext } from "react";
import { HomepageCont } from "../../Context/HomepageContext";
import { SelectedPage } from "../../shared/types/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "../../shared/Htext/Htext";

const OurClasses: React.FC = () => {
  const ctxHome = useContext(HomepageCont);
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40 scs">
      <motion.div
        onViewportEnter={() => {
          ctxHome.setSelectedPage(SelectedPage.ourclasses);
        }}
      >
        <motion.div
          className="mx-auto w-5/6 md:flex gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <article className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              nihil eos hic, voluptatibus suscipit blanditiis dolorem adipisci
              officiis quae iure incidunt labore, vitae fugit ratione molestias
              maiores, nam eveniet voluptates eaque recusandae placeat. Iure
              itaque nostrum debitis, exercitationem animi facilis.
            </p>
          </article>
        <figure className="mt-10 flex h-[353px] w-full gap-8 overflow-y-hidden overflow-x-scroll ">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
        </figure>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
