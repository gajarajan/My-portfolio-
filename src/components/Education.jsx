import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { educationData } from "../constants";

// Framer Motion Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Animates children sequentially
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

const iconVariant = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Education = () => {
  return (
    <motion.div
      className="min-h-screen  py-16 px-4"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Education Timeline
      </h1>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

        {/* Timeline Items */}
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-center md:flex-row ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } mb-16`}
            variants={itemVariant}
          >
            {/* Timeline Icon */}
            <motion.div
              className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center z-10 shadow-md p-2"
              variants={iconVariant}
            >
              <FaGraduationCap size={20} />
            </motion.div>

            {/* Timeline Content */}
            <div
              className={`bg-white rounded-lg shadow-lg p-6 max-w-md w-full ${
                index % 2 === 0
                  ? "md:ml-8 text-left"
                  : "md:mr-8 text-left md:order-last"
              } hover:shadow-xl transition-shadow duration-300`}
            >
              <h2 className="text-xl font-bold text-blue-600 mb-2">
                {item.degree}
              </h2>
              <p className="text-gray-800 font-medium">{item.institution}</p>
              <p className="text-sm text-gray-500 italic mb-4">{item.year}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
