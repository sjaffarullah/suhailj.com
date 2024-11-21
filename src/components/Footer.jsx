import { FaArrowUp, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-neutral-800 py-8 flex flex-col items-center justify-center space-y-6 text-neutral-400 text-sm pb-16">
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to Top"
        className="flex items-center justify-center gap-2 text-white bg-neutral-900 hover:bg-neutral-800 transition-all rounded-full px-4 py-2 shadow-md hover:shadow-lg focus:outline-none"
      >
        <FaArrowUp className="w-4 h-4" />
        Back to Top
      </button>

      {/* Social Media Icons */}
      <div className="flex gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/suhailjaffarullah/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-neutral-400 hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sjaffarullah"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-neutral-400 hover:text-white transition duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Footer Text */}
      <div className="text-center">
        <p>© 2024 Suhail Jaffarullah. All rights reserved.</p>
      </div>

      {/* Tools Description */}
      <div className="text-center text-xs text-neutral-500 max-w-lg px-2">
        <p>
          Built with <span className="text-white">React.js</span>, styled using{" "}
          <span className="text-white">TailwindCSS</span>, and deployed on{" "}
          <span className="text-white">Vercel</span>. Icons provided by{" "}
          <span className="text-white">React Icons</span>. Special thanks to all
          the amazing open-source libraries that made this project possible.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
