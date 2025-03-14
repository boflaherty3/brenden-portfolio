import { Link } from "react-router-dom";
import running from "../assets/running.jpeg";
import brenden from "../assets/brenden_headshot.jpeg";
import castle from "../assets/castle.jpeg";


const About = () => {
  return (
    <section  className="py-12 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          I'm a software engineer with a degree in biomedical engineering from Tufts University, 
          now focused on full-stack web development. I have experience with JavaScript, TypeScript, Python, 
          React, and Node.js among other capabilities. I'm always looking to learn new technologies and improve 
          <Link to="/skills" className="text-blue-500 hover:text-blue-600 transition-colors"> my skills</Link>. 
          I'm passionate about creating clean, efficient, and user-friendly applications. 
          I'm currently seeking new opportunities to grow as a developer and contribute to exciting projects.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          I'm currently based in Boston, MA but I'm looking to move back to NYC.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          When I'm not coding, I enjoy running, playing basketball, and traveling.
        </p>
        <Link to='/contact' className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
          Get in Touch with me</Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-blue-500/50 transition-shadow">
            <img src={running} alt="Brenden running" className="w-full h-88 object-cover object-top" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-blue-500/50 transition-shadow">
            <img src={brenden} alt="Brenden Headshot" className="w-full h-88 object-cover" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-blue-500/50 transition-shadow">
            <img src={castle} alt="Brenden at O'Flaherty Castle" className="w-full h-88 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;