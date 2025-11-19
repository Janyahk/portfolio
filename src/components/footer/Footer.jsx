
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr className="border-gray-700" />

      <footer className="w-full bg-gray-900 text-gray-300 py-8 px-6 md:px-20 mt-2">

        {/* Name & Title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl md:text-2xl font-semibold">© 2025 Janya HK</h2>
          <p className="text-sm md:text-base text-gray-400">Full Stack Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mt-4 text-xl">
          <a 
            href="https://github.com/janyahk" 
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
          </a>

          <a 
            href="https://www.linkedin.com/in/janyahk/" 
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>

        {/* Footer text */}
        <div className="text-center pt-5">
          <p className="text-xs md:text-sm text-gray-500 font-medium">
            Built with React + TailwindCSS · Let’s build something amazing 🚀
          </p>
        </div>

      </footer>
    </>
  );
};

export default Footer;
