import { useState } from "react";
import { motion } from "framer-motion";
import { SiUdemy, SiCisco } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa"; // Placeholder for EC-Council

const certificates = [
  {
    platform: "Udemy",
    title: "PL-300",
    icon: <SiUdemy className="text-4xl text-orange-500" />,
    link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate/",
  },
  {
    platform: "Cisco",
    title: "Cisco Certified Network Associate",
    icon: <SiCisco className="text-4xl text-green-500" />,
    link: "https://www.linkedin.com/learning/machine-learning-fundamentals/",
  },
  {
    platform: "Cisco",
    title: "Data Analytics Essentials",
    icon: <SiCisco className="text-4xl text-green-500" />,
    link: "https://www.credly.com/badges/08d0d414-bd13-420b-a3f2-55fa83d3b08b/linked_in_profile",
  },
  {
    platform: "EC-Council",
    title: "Certified Ethical Hacker (CEH)",
    icon: <FaShieldAlt className="text-4xl text-blue-500" />,
    link: "https://www.linkedin.com/learning/machine-learning-fundamentals/",
  },
];

// Certificate Card Component
const CertificateCard = ({ cert }) => (
  <motion.div
    className="flex flex-col items-center justify-between rounded-xl p-6 border-2 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer h-72"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-4">{cert.icon}</div>
    <h3 className="text-lg font-semibold text-center group-hover:text-blue-500 transition-colors duration-300">
      {cert.title}
    </h3>
    <p className="text-sm text-center text-gray-500">{cert.platform}</p>
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg text-sm hover:bg-blue-600 focus:bg-blue-700 transition-colors"
    >
      View Certificate
    </a>
  </motion.div>
);

// Certificate and Badges Component
const CertificateAndBadges = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCertificates = () => setIsOpen(!isOpen);

  return (
    <div className="pb-8">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-6 text-center text-4xl font-semibold"
      >
        Certifications & Badges
      </motion.h1>

      {/* Desktop View */}
      <motion.div
        className="hidden sm:grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center items-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} />
        ))}
      </motion.div>

      {/* Mobile Toggle */}
      <motion.p
        className="text-center text-sm text-gray-500 sm:hidden mb-4 cursor-pointer hover:underline"
        onClick={toggleCertificates}
        title={isOpen ? "Hide certificates" : "View certificates"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isOpen ? "Click to hide certificates" : "Click to view certificates"}
      </motion.p>

      {/* Mobile View */}
      <motion.div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden grid grid-cols-1 gap-6 px-4 justify-center items-center`}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} />
        ))}
      </motion.div>
    </div>
  );
};

export default CertificateAndBadges;
