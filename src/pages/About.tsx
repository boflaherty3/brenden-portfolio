import { Link } from "react-router-dom";

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
      </div>
      {/*<div>
        <img src="../assets/react.svg" alt="running" className="w-1/2 mx-auto my-8 rounded-lg" />
      </div>*/}
    </section>
  );
}

export default About;