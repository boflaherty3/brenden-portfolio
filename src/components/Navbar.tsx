import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">Brenden O’Flaherty</NavLink>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className={({ isActive }) => `text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => `text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`}>About</NavLink></li>
          <li><NavLink to="/skills" className={({ isActive }) => `text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => `text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`}>Projects</NavLink></li>
          <li><NavLink to="/experience" className={({ isActive }) => `text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`}>Experience</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => `text-lg ${isActive ? "text-blue-500" : "text-gray-300"} hover:text-blue-500 transition-colors`}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;