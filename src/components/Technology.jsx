import {
  SiNextdotjs,
  SiMongodb,
  SiPowerbi,
  SiTableau,
  SiApachekafka,
  SiSnowflake,
  SiApachehadoop,
  SiApacheairflow,
  SiAzuredevops,
  SiGooglecloud,
  SiMicrosoftazure,
  SiDatabricks,
  SiApachespark,
  SiPostgresql,
  SiTerraform,
  SiReact,
  SiGraphql,
  SiOracle
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaPython, FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

const Technology = () => {
  const technologies = [
    { icon: <TbSql className="text-5xl text-blue-600" />, name: "SQL" },
    { icon: <FaPython className="text-5xl text-yellow-500" />, name: "Python" },
    { icon: <SiPostgresql className="text-5xl text-blue-500" />, name: "PostgreSQL" },
    { icon: <FaAws className="text-5xl text-orange-400" />, name: "AWS" },
    { icon: <SiMicrosoftazure className="text-5xl text-blue-500" />, name: "Microsoft Azure" },
    { icon: <SiGooglecloud className="text-5xl text-cyan-400" />, name: "Google Cloud" },
    { icon: <SiDatabricks className="text-5xl text-red-500" />, name: "Databricks" },
    { icon: <SiApachespark className="text-5xl text-orange-600" />, name: "Apache Spark" },
    { icon: <SiApachehadoop className="text-5xl text-green-500" />, name: "Apache Hadoop" },
    { icon: <SiApacheairflow className="text-5xl text-blue-400" />, name: "Apache Airflow" },
    { icon: <SiApachekafka className="text-5xl text-purple-500" />, name: "Apache Kafka" },
    { icon: <SiSnowflake className="text-5xl text-blue-300" />, name: "Snowflake" },
    { icon: <SiTerraform className="text-5xl text-indigo-500" />, name: "Terraform" },
    { icon: <SiPowerbi className="text-5xl text-yellow-600" />, name: "Power BI" },
    { icon: <SiTableau className="text-5xl text-orange-500" />, name: "Tableau" },
    { icon: <SiAzuredevops className="text-5xl text-blue-600" />, name: "Azure DevOps" },
    { icon: <SiReact className="text-5xl text-blue-600" />, name: "React" },
    { icon: <SiNextdotjs className="text-5xl text-cyan-400" />, name: "Next.js" },
    { icon: <SiMongodb className="text-5xl text-green-500" />, name: "MongoDB" },
    { icon: <SiGraphql className="text-5xl text-pink-500" />, name: "GraphQL" },
    { icon: <SiOracle className="text-5xl text-orange-500" />, name: "Oracle" }
  ];

  return (
    <div className="pb-2">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 px-4"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ y: -10 }}
            animate={{
              y: [10, -10],
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="rounded-2xl p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
          >
            {tech.icon}
            <p className="mt-2 text-center text-lg font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technology;
