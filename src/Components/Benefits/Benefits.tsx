import React, { useContext } from "react";
import Htext from "../../shared/Htext/Htext";
import { SelectedPage } from "../../shared/types/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import { benefits } from "./benefitData";
import { HomepageCont } from "../../Context/HomepageContext";
// import ActionButton from "../../shared/Button/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import ActionButton from "../../shared/Button/ActionButton";

const Benefits: React.FC = () => {
  const ctxHomePage = useContext(HomepageCont);
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() =>{
          ctxHomePage.setSelectedPage(SelectedPage.benefits)
        }
        }
      >
        <motion.article
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>More than just a gym.</Htext>
          <p className="my-5 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            vel error tempora dignissimos rem laborum eveniet nulla placeat
            tempore magnam ducimus ad alias.
          </p>
        </motion.article>

        <motion.section
          className=" grid grid-cols-1 gap-8 md:grid-cols-3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              setSelectedPage={ctxHomePage.setSelectedPage}
            />
          ))}
        </motion.section>

        {/* graphic and description */}
        <section className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <figure className=" ">
            <img
              src={BenefitsPageGraphic}
              alt="benefits-page-graphics"
              className="mx-auto"
            />
          </figure>
          <div className="md:basis-1/2">
            <motion.article
              className="relative before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Htext>
                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary-500">FIT</span>
              </Htext>

              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur quisquam dolorem repellat corporis excepturi dicta
                itaque totam animi perspiciatis dolore, ipsam quae deleniti, eos
                aliquid delectus nulla officia sequi quas soluta ipsa impedit
                iusto voluptates eveniet. Consequatur iure accusantium molestias
                culpa, rem veritatis numquam odit eveniet excepturi eius maxime
                facilis!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                magnam at tenetur temporibus, ullam ipsam cupiditate libero esse
                laboriosam fugit corrupti, minus neque facere doloremque odio.
                Qui quis enim numquam vel voluptates maiores nihil error.
              </p>
            </motion.article>
            <div className="relative mt-16 ">
              <div className=" absolute -bottom-20 right-40 -z-[1] content-sparkles"></div>
              <ActionButton setSelectedPage={ctxHomePage.setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default Benefits;
