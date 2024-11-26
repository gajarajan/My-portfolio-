import pic from "../assets/pic.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

// Animation Variants for Motion Components
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const imageVariant = {
  hidden: { scale: 0, rotate: -45, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: 1 },
  },
};

const Hero = () => {
  return (
    <div className="border-neutral-900 pb-4 lg:pb-20 lg:mb-24">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between px-6 lg:px-12 gap-8">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Animated Name Heading */}
            <motion.h1
              className="pb-6 text-4xl font-thin tracking-tight lg:mt-12 lg:text-6xl text-center lg:text-left"
              variants={container(0)}
              initial="hidden"
              animate="visible"
            >
              Gajarajan Appandarajan
            </motion.h1>
            
            {/* Animated Subtitle */}
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight text-3xl lg:text-4xl bg-clip-text text-transparent text-center lg:text-left"
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
            >
              Welcome to my portfolio
            </motion.span>
            
            {/* Animated Description */}
            <motion.p
              className="my-4 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left text-neutral-400"
              variants={container(1)}
              initial="hidden"
              animate="visible"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0 flex justify-center lg:justify-end relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariant}
            className="relative"
          >
            <img
              src={pic}
              alt="Portrait of Gajarajan Appandarajan"
              className="w-40 h-40 lg:w-60 lg:h-60 rounded-2xl shadow-xl"
              loading="lazy"
              width={240} // Adjust width to your needs
              height={240} // Adjust height to your needs
            />
            {/* Decorative Circle */}
            <motion.div
              className="absolute -z-10 w-48 h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 rounded-full opacity-30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              style={{ top: "10%", left: "-20%" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
