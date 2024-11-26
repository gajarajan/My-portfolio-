import logo from '../assets/logo.jpeg';
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaKaggle } from "react-icons/fa6";

/**
 * Reusable component for navigation icons.
 * Props:
 * - IconComponent: React icon component to render.
 * - label: Accessibility label for the icon.
 * - link: URL the icon should link to.
 */
const NavbarIcon = ({ IconComponent, label, link, title }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={title}
    className="hover:text-blue-500 hover:scale-110 transition duration-300"
  >
    <IconComponent size={24} />
  </a>
);

/**
 * Navbar Component
 * Displays a logo and a list of social media icons.
 */
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-4 mb-0">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Gajarajan Appandarajan Logo"
          width={50}
          height={50}
          className="rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Navigation Icons */}
      <ul className="flex gap-6 text-xl ml-8">
        <NavbarIcon
          IconComponent={FaLinkedin}
          label="LinkedIn"
          link="https://www.linkedin.com/in/gajarajan-ap/"
          title="Visit my LinkedIn profile"
        />
        <NavbarIcon
          IconComponent={FaGithub}
          label="GitHub"
          link="https://github.com/gajarajan"
          title="Visit my GitHub repository"
        />
        <NavbarIcon
          IconComponent={SiGmail}
          label="Gmail"
          link="mailto:gajarajan28@gmail.com"
          title="Send me an email"
        />
        <NavbarIcon
          IconComponent={FaKaggle}
          label="Kaggle"
          link="https://www.kaggle.com/raja010"
          title="Check out my Kaggle profile"
        />
        {/* Resume Download Icon */}
        <li>
          <a
            href="/Resumes/Gajarajan_Appandarajan_Resume.docx" // Replace with the actual path to your resume
            download="Gajarajan_Appandarajan_Resume" // Optional: You can specify the default name for the downloaded file
            aria-label="Download Resume"
            title="Download my resume"
            className="hover:text-blue-500 hover:scale-110 transition duration-300"
          >
            <FaDownload size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
