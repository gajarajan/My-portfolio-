import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  const [openProject, setOpenProject] = useState(null);

  const toggleDescription = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <div className="  pb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h1>

      <div className="flex flex-col items-center space-y-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-full max-w-5xl space-y-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            {/* Project Header */}
            <div className="flex flex-col lg:flex-row items-center w-full space-y-4 lg:space-y-0 lg:space-x-8 pr-2">
              {/* Project Image */}
              <div className="flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <button
                  onClick={() => toggleDescription(index)}
                  className="mt-2 rounded bg-purple-800 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
                >
                  {openProject === index ? "Hide Details" : "View Details"}
                </button>

                {/* Dropdown Content */}
                {openProject === index && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="list-disc pl-5 text-neutral-400 mt-4 space-y-2"
                  >
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </motion.ul>
                )}

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
