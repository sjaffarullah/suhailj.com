import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [messageLength, setMessageLength] = useState(0); // Track message character count
  const [status, setStatus] = useState(null); // Track submission status

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mvgoqwba", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success"); // Set success status
        e.target.reset(); // Reset the form
        setMessageLength(0); // Reset character count
      } else {
        setStatus("error"); // Set error status
      }
    } catch (error) {
      setStatus("error"); // Set error status
    }
  };

  return (
    <motion.div
      id="contact"
      className="max-w-7xl mx-auto border-t border-neutral-900 pt-10 lg:pt-20 pb-10 lg:pb-24 px-4 sm:px-6 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      {/* Section Heading */}
      <motion.h2
        className="text-3xl lg:text-5xl font-medium text-center text-white mb-6"
        variants={item}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-center text-sm lg:text-lg mb-8"
        variants={item}
      >
        Let’s build something awesome.
      </motion.p>

      {/* Contact Form with Window Design */}
      <motion.div
        className="bg-[#101010] rounded-lg shadow-lg max-w-lg mx-auto"
        variants={item}
      >
        {/* Window Header */}
        <div className="bg-[#181818] px-4 py-2 rounded-t-lg flex items-center justify-between">
          {/* Traffic Light Buttons */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          {/* Title */}
          <p className="text-neutral-400 text-xs lg:text-sm font-medium flex-1 text-center -translate-x-4">
            New Message
          </p>
        </div>

        {/* Form */}
        <div className="p-4 lg:p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <motion.div variants={item}>
              <label
                htmlFor="email"
                className="block text-xs lg:text-sm text-neutral-400 mb-1"
              >
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full bg-[#101010] border-b border-neutral-700 px-0 py-2 text-xs lg:text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </motion.div>

            {/* Name */}
            <motion.div variants={item}>
              <label
                htmlFor="name"
                className="block text-xs lg:text-sm text-neutral-400 mb-1"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full bg-[#101010] border-b border-neutral-700 px-0 py-2 text-xs lg:text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </motion.div>

            {/* Subject */}
            <motion.div variants={item}>
              <label
                htmlFor="subject"
                className="block text-xs lg:text-sm text-neutral-400 mb-1"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                required
                className="w-full bg-[#101010] border-b border-neutral-700 px-0 py-2 text-xs lg:text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={item}>
              <label
                htmlFor="message"
                className="block text-xs lg:text-sm text-neutral-400 mb-1"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                maxLength={300}
                required
                className="w-full bg-[#181818] text-xs lg:text-sm text-white px-3 py-2 lg:px-4 lg:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24 lg:h-32"
                onChange={(e) => setMessageLength(e.target.value.length)} // Update message length
              ></textarea>
              <div className="text-right text-xs lg:text-sm text-neutral-500 mt-1">
                {messageLength}/300
              </div>
            </motion.div>

            {/* Send Button */}
            <motion.div
              className="flex justify-center lg:justify-end mt-4 lg:mt-6"
              variants={item}
            >
              <button
                type="submit"
                className="px-6 py-2 bg-[#181818] text-neutral-400 text-xs lg:text-sm font-medium rounded-md hover:bg-[#222222] hover:text-white transition-all duration-200 shadow-md"
              >
                Send
              </button>
            </motion.div>
          </form>

          {/* Status Message */}
          {status === "success" && (
            <p className="text-blue-400 text-center mt-4">
              Thank you! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center mt-4">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
