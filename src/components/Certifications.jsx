import { motion } from "framer-motion";
import { CERTS } from "../data/certifications.js";

const Certs = () => {
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
      id="certs"
      className="max-w-7xl mx-auto border-b border-neutral-900 pt-12 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-8 lg:px-32 xl:px-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.div className="text-left mb-12" variants={item}>
        <h2 className="text-3xl sm:text-3xl lg:text-5xl font-medium text-white mb-3 text-left lg:text-left">Certifications</h2>
        <p className="text-lg sm:text-sm lg:text-3xl font-sm text-neutral-400 mb-3 text-left lg:text-left">
        Accredited Milestones in My Journey
        </p>
      </motion.div>

      {CERTS.map((cert, index) => (
        <motion.div
          key={index}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 mb-12"
          variants={item}
        >
          <motion.div
            className="w-full lg:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded-xl max-w-xs"
              loading="lazy" // Lazy loading
            />
          </motion.div>

          <motion.div
            className="w-full lg:w-2/3 text-center lg:text-left pl-5"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={item}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              {cert.title}
            </h3>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                <span className="rounded bg-neutral-800 px-3 py-1 text-xs sm:text-sm font-medium text-blue-400">
                    {cert.provider}
                 </span>
            </div>

            <a
              href={cert.credUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 sm:px-6 sm:py-3 bg-neutral-900 text-white font-medium rounded-md hover:bg-neutral-800 transition-all duration-200 shadow-md"
            >
              Show Credential →
            </a>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Certs;
