import { motion } from "framer-motion";
import { TECH_STACK_CATEGORIES } from "../data/techstack.js";

const TechStack = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      id="techstack"
      className="max-w-7xl mx-auto border-b border-neutral-900 pt-16 lg:pt-24 pb-16 lg:pb-24 px-6 sm:px-12 lg:px-32 xl:px-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      {/* Section Heading */}
      <motion.div className="text-left mb-5" variants={item}>
        <h2 className="text-3xl sm:text-3xl lg:text-5xl font-medium text-white mb-3 text-left lg:text-left">Tech Stack</h2>
        <p className="text-lg sm:text-sm lg:text-2xl font-sm text-neutral-400 mb-3 text-left lg:text-left">
          Take a look at my tech forte!
        </p>
      </motion.div>

      {/* Categories */}
      {TECH_STACK_CATEGORIES.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          className="mb-12 border-t border-neutral-800 pt-8"
          variants={item}
        >
          {/* Category Title */}
          <motion.h3
            className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-left"
            variants={item}
          >
            {category.title}
          </motion.h3>

          {/* Grid Layout */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-4 lg:justify-items-center"
            variants={container}
          >
            {category.items.map((item, itemIndex) => (
              <motion.a
                key={itemIndex}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-neutral-900 rounded-lg p-4 flex flex-col items-center text-center shadow-md transition-transform max-w-[150px] sm:max-w-[180px] hover:bg-neutral-800 lg:w-full"
                whileHover="hover"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
                }}
              >
                {/* Icon */}
                <motion.img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 transition-transform group-hover:scale-110"
                  variants={{
                    hover: { scale: 1.1, transition: { duration: 0.2 } },
                  }}
                />

                {/* Name */}
                <h4 className="text-white text-sm font-semibold mb-1">
                  {item.name}
                </h4>

                {/* Category */}
                <p className="rounded bg-neutral-800 px-2 py-1 text-xs sm:text-sm font-medium text-neutral-400">
                  {item.category}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
