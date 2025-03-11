import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">Brenden O’Flaherty</NavLink>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:underline">About</NavLink></li>
          <li><NavLink to="/skills" className="hover:underline">Skills</NavLink></li>
          <li><NavLink to="/projects" className="hover:underline">Projects</NavLink></li>
          <li><NavLink to="/experience" className="hover:underline">Experience</NavLink></li>
          <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;