import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Brenden O'Flaherty |{" "}
            <a
              href="https://brendenoflaherty.dev"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              brendenoflaherty.dev
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/boflaherty3"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/brendenoflaherty"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:brendenoflaherty@gmail.com"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;