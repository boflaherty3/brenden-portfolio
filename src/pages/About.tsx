import { Link } from "react-router-dom";
import running from "../assets/running.jpeg";
import brenden from "../assets/brenden.jpeg";
import castle from "../assets/castle.jpeg";


const About = () => {
  return (
    <section  className="py-12 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-300 mb-6">
        Hello! I’m Brenden O’Flaherty, a passionate Software Engineer and Full-Stack Developer with a unique background
         in biomedical engineering from Tufts University. I specialize in building responsive, user-focused web 
         applications using modern technologies like JavaScript, TypeScript, React, Node.js, and Python. 
         My <Link to="/experience" className="text-blue-500 underline hover:text-blue-600 transition-colors">experience</Link> spans front-end development—crafting clean, intuitive interfaces with React and 
         Tailwind CSS—to back-end development, creating efficient APIs with Node.js. 
          I'm passionate about creating clean, efficient, and user-friendly applications. 
          I'm currently seeking new opportunities to grow as a developer and contribute to exciting projects.
        </p>
        <p className="text-lg text-gray-300 mb-6">
        What sets me apart is my problem-solving mindset, honed through my engineering background, and my commitment to writing clean, maintainable code. I’ve built projects like this portfolio website, complete with an interactive chatbot to assist visitors, showcasing my ability to integrate user-friendly features into full-stack applications. I’m always eager to learn new technologies and tackle challenging problems, whether it’s optimizing performance or designing seamless user experiences.
        </p>
        <p className="text-lg text-gray-300 mb-6">
        I'm currently seeking full-stack and front-end opportunities where I can contribute to impactful projects, collaborate with talented teams, and continue growing as a developer. Let’s connect—I’d love to bring my skills to your next project!
        </p>
        <p className="text-lg text-gray-300 mb-6">
          I'm currently based in Boston, MA but I'm looking to move back to NYC.
        </p>
        <p className="text-lg text-gray-300 mb-6">
          When I'm not coding, I enjoy running, golfing, and traveling.
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