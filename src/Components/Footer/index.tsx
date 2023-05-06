import React from "react";
import logo from "../../assets/Logo.png";
const Footer: React.FC = () => {
  return (
    <section className="w-full bg-primary-100 mt-10 ">
      <article className="mx-auto w-5/6 justify-between space-y-20 md:space-y-0 md:gap-20 py-20 md:flex">
        <div className="w-4/6 space-y-6">
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            vel officia, quos dicta quo rem nesciunt nulla odit assumenda et!
            Nam commodi corrupti doloremque! Repellat praesentium vitae
            voluptate obcaecati iure perferendis? Quisquam, maxime nulla ullam
            nobis corporis mollitia porro repellat consequatur dolorem.
          </p>
          <p>&copy; 4cub3 all right reserved</p>
        </div>
        <div className="space-y-6 ">
          <h3 className="font-bold">Links</h3>
          <ul className=" list-none">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
        <address className="space-y-6 ">
          <h3 className="font-bold">ContactUs</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            officia!
          </p>
          <p>(+234)-813-345-5234</p>
        </address>
      </article>
    </section>
  );
};
export default Footer;
