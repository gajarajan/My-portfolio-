import { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDetails = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="border-neutral-900 pb-2">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Experience
      </motion.h1>

      <div className="px-4 lg:px-8">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap items-start lg:items-center lg:justify-center"
          >
            {/* Timeline Section */}
            <motion.div
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1 }}
            >
              <p className="text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            {/* Details Section */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
            >
              <h6 className="mb-2 text-lg font-semibold">
                {experience.role}{" "}
                <span className="text-sm text-purple-400">
                  - {experience.company}
                </span>
              </h6>

              {/* View Details Toggle */}
              <button
                onClick={() => toggleDetails(index)}
                className="mb-4 text-sm text-purple-600 underline"
              >
                {activeIndex === index ? "Hide Details" : "View Details"}
              </button>

              {/* Description */}
              {activeIndex === index && (
                <ul className="mb-4 list-disc pl-5 text-neutral-400">
                  {experience.description
                    .split("\n")
                    .filter((point) => point.trim() !== "")
                    .map((point, idx) => (
                      <li key={idx}>{point.trim().replace("- ", "")}</li>
                    ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
