import { Link } from "react-router-dom";

const Home = () => {
    return (
      <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Brenden O’Flaherty</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">Software Engineer | Full-Stack Developer</p>
          <p className="text-lg text-gray-400 mb-8">Building responsive, user-focused solutions with modern tech.</p>
          <div className="space-x-4">
            <Link to="/projects" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">View Projects</Link>
            <Link to="/contact" className="inline-block border-2 border-blue-500 text-blue-500 bg-transparent px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors">Contact Me</Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;