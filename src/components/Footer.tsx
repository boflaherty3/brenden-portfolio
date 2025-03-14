const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © {new Date().getFullYear()} Brenden O'Flaherty |{" "}
            <a
              href="https://brendenoflaherty.dev"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              brendenoflaherty.dev
            </a>
          </p>
          <div className="space-x-4">
            <a
              href="https://github.com/boflaherty3"
              className="text-blue-500 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brendenoflaherty"
              className="text-blue-500 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:brendenoflaherty@gmail.com"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;