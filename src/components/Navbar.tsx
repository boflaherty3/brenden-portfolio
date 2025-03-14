import { NavLink } from "react-router-dom";
import { useState } from "react"; 
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">Brenden O’Flaherty</NavLink>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
          >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        <ul className={`${isOpen ? "block" : "hidden"} md:flex md:space-x-6 absolute md:static top-16 right-4 bg-gray-900 md:bg-transparent p-4 md:p-0 rounded-lg shadow-md md:shadow-none w-48 md:w-auto transition-all duration-300`}>
          <li className="mb-2 md:mb-0"><NavLink to="/" className={({ isActive }) => `block text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`}>Home</NavLink></li>
          <li className="mb-2 md:mb-0"><NavLink to="/about" className={({ isActive }) => `block text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`} onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li className="mb-2 md:mb-0"><NavLink to="/skills" className={({ isActive }) => `block text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`} onClick={() => setIsOpen(false)}>Skills</NavLink></li>
          <li className="mb-2 md:mb-0"><NavLink to="/projects" className={({ isActive }) => `block text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`} onClick={() => setIsOpen(false)}>Projects</NavLink></li>
          <li className="mb-2 md:mb-0"><NavLink to="/experience" className={({ isActive }) => `block text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`} onClick={() => setIsOpen(false)}>Experience</NavLink></li>
          <li className="mb-2 md:mb-0"><NavLink to="/contact" className={({ isActive }) => `block text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`} onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;