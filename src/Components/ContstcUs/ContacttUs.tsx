import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { HomepageCont } from "../../Context/HomepageContext";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types/types";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Htext from "../../shared/Htext/Htext";

const ContacttUs: React.FC = () => {
  const ctxHome = useContext(HomepageCont);
  const inputStyles = `w-full rounded-lg bg-primary-500 px-5 py-3 placeholder:text-white my-6 outline-none`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const submitHandler = async (e: React.FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24 ">
      <motion.div
        onViewportEnter={() => {
          ctxHome.setSelectedPage(SelectedPage.contactus);
        }}
      >
        <motion.article
          className="md:basis-3/5"
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
            <span className="text-primary-500"> JOIN NOW </span> TO GET IN SHAPE
          </Htext>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            sapiente officia architecto molestias ex vero veniam quidem ipsa
            earum expedita exercitationem ipsum commodi facilis totam pariatur,
            aliquid dicta iure! Debitis, perferendis nisi. Ducimus a natus
            consectetur? Suscipit error vitae non!
          </p>
        </motion.article>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={submitHandler}
              method="POST"
              action="https://formsubmit.co/doyin97@gmail.com"
            >
              <input
                type="text"
                placeholder="Name"
                className={inputStyles}
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p>
                  {errors.name.type === "required" && "this field is required."}
                  {errors.name.type === "maxLength" &&
                    "maxLength is 100 character"}
                </p>
              )}
              <input
                type="text"
                className={inputStyles}
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                })}
              />
              {errors.email && (
                <p>
                  {errors.email.type === "required" && "this fiels is required"}
                  {errors.email.type === "pattern" &&
                    "the email format is incorrect"}
                </p>
              )}
              <textarea
                cols={30}
                rows={5}
                className={inputStyles}
                placeholder="your message"
                {...register("message", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.message && (
                <p>
                  {errors.message.type === "required" &&
                    "field must not be empty"}
                  {errors.message.type === "maxLength" &&
                    "maximum characters exceeded"}
                </p>
              )}
              <input
                type="submit"
                value="Send"
                className="rounded-lg bg-secondarry-500 px-10 py-2"
              />
            </form>
          </motion.div>
          <motion.figure
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 2.0, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="before:-bottom-20 before:-right-10 -z-[1] w-full before:absolute md:before:content-evolvetext">
              <img src={ContactUsPageGraphic} alt="" className="w-full" />
            </div>
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
};

export default ContacttUs;
