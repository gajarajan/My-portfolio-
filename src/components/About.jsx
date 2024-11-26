import aboutImg from "../assets/data.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-section pb-16 lg:pb-20">
      {/* Title Section */}
      <h2 className="my-10 text-center text-4xl lg:text-5xl font-semibold text-white">
        About <span className="text-neutral-400">Me</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center lg:justify-between px-6 lg:px-12">
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 lg:p-8 flex justify-center mb-10"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="about-image w-80 h-auto lg:w-96 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            src={aboutImg}
            alt="About Gajarajan"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
        >
          <p className="about-text max-w-xl leading-relaxed text-neutral-200 text-m lg:text-m">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
