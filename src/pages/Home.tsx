import { Link } from "react-router-dom";
import headshot from "../assets/brenden_headshot.jpg";

const Home = () => {
    return (
      <section className="flex items-center justify-center bg-gray-900 text-white py-6 md:py-8">
        <div className="text-center mt-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Brenden O’Flaherty</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-3">Software Engineer | Full-Stack Developer</p>
          <p className="text-lg text-gray-400 mb-4">Building responsive, user-focused solutions with modern tech.</p>
          <div className="space-x-4">
            <Link to="/projects" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">View Projects</Link>
            <Link to="/contact" className="inline-block border-2 border-blue-500 text-blue-500 bg-transparent px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors">Contact Me</Link>
          </div>
          <div className="max-w-[240px] mx-auto mt-8">
            <div className="overflow-hidden rounded-full shadow-md hover:shadow-blue-500/50 transition-shadow">
              <img src={headshot} alt="Brenden headshot" className="w-full h-full object-cover object-center aspect-square"/>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;