import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import profilePic from "../assets/profile.png";
import bannerPic from "../assets/banner.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AboutPage = () => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      src: photo1,
      caption: "Northern Lights at Vancouver",
    },
    {
      src: photo2,
      caption: "Somewhere above Vancouver",
    },
    {
      src: photo3,
      caption: "Graduation Ceremony",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleScroll = () => {
      const paragraphs = document.querySelectorAll(".intro-paragraph");
      paragraphs.forEach((p) => {
        const rect = p.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
          p.style.color = "#e5e5e5"; // Highlight text
        } else {
          p.style.color = "#404040"; // Reset color
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="bg-inherit text-white">
      <div className="max-w-xl mx-auto border-b border-neutral-900 pt-16 lg:pt-24 pb-16 lg:pb-24 px-4 sm:px-6">
        {/* Banner Section */}
        <div className="relative mb-8">
          <img
            src={bannerPic}
            alt="Banner"
            className="rounded-lg object-cover w-full h-32 sm:h-50 lg:h-70"
            loading="lazy"
          />
          <img
            src={profilePic}
            alt="Profile"
            className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 lg:w-30 lg:h-30 rounded-full border-4 border-neutral-900 shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-2xl sm:text-3xl pt-5 lg:text-4xl font-medium mb-5 text-center lg:text-left">
            About Me
          </h1>
          {[
            "Hey there! I’m Suhail (pronounced 'Su-hail') - a tech enthusiast with a curiosity for exploring the world around me. Whether I’m building the next cool project, discovering a new game, or picking up a new skill, I’m always in the middle of doing something that excites me.",
            "In the tech world, I’m currently exploring the power of cloud technologies, AI, and cybersecurity. I’m excited about how these fields are transforming industries, and I’m always looking to leverage new tools and frameworks to innovate and solve real-world problems.",
            "Recently, I’ve been diving into the world of anime, finding inspiration in stories and creativity that stretch the imagination. I’ve also taken a leap into fitness, hitting the gym and challenging myself to be stronger, both mentally and physically. And when I’m not doing any of that, you can catch me chilling with my friends.",
            "For me, it’s all about the journey - exploring, learning, and building something meaningful along the way. I believe that growth happens when you step out of your comfort zone, whether that’s mastering a new piece of technology or trying out something completely different. And I’m always looking for ways to push boundaries and collaborate with others who share the same drive for innovation and creativity.",
            "Let’s make something awesome together - it’s all about combining curiosity with action and creating things that inspire.",
          ].map((paragraph, index) => (
            <p
              key={index}
              className="intro-paragraph text-gray-400 text-sm sm:text-base leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Bucket List Section */}
        <div className="mt-16">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">
            Bucketlist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <IoMdCheckboxOutline className="text-neutral-400 w-5 h-5" />
                <span className="text-neutral-400 text-sm sm:text-base">Visit Vancouver</span>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdCheckboxOutline className="text-neutral-400 w-5 h-5" />
                <span className="text-neutral-400 text-sm sm:text-base">
                  Trekking at Centennial Ridges trail
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdCheckboxOutline className="text-neutral-400 w-5 h-5" />
                <span className="text-neutral-400 text-sm sm:text-base">Work in a Startup</span>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MdOutlineCheckBoxOutlineBlank className="text-white w-5 h-5" />
                <span className="text-white text-sm sm:text-base">Own a Porsche 911</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdOutlineCheckBoxOutlineBlank className="text-white w-5 h-5" />
                <span className="text-white text-sm sm:text-base">Go to Japan</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdOutlineCheckBoxOutlineBlank className="text-white w-5 h-5" />
                <span className="text-white text-sm sm:text-base">Build a startup</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Photo Carousel (Mobile Only) */}
      <div className="sm:hidden mt-12 px-4 pb-20">
        <h2 className="text-lg font-semibold mb-4 text-left">Photos</h2>
        <div className="relative flex flex-col items-center">
          {/* Current Photo */}
          <img
            src={photos[currentIndex].src}
            alt={`Photo ${currentIndex + 1}`}
            className="w-full h-60 object-cover"
            loading="lazy"
          />
          <p className="text-gray-400 text-xs mt-2 text-left">
            {photos[currentIndex].caption}
          </p>
          {/* Navigation Buttons */}
          <div className="flex gap-6 mt-4">
            <button
              onClick={handlePrev}
              className="bg-neutral-900 p-3 rounded-full text-white hover:bg-neutral-800 transition"
              aria-label="Previous Photo"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-neutral-900 p-3 rounded-full text-white hover:bg-neutral-800 transition"
              aria-label="Next Photo"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Photo Grid for Larger Screens */}
      <div className="hidden sm:block mt-12 px-4 sm:px-8 py-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-center">
          Memories
        </h2>
        <div className="flex overflow-x-scroll sm:overflow-hidden space-x-4 scrollbar-hide lg:flex-wrap lg:justify-center">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 sm:w-1/3 lg:w-1/4"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full sm:h-80 object-cover"
                loading="lazy"
              />
              <p className="text-gray-400 text-sm mt-2 text-left">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
