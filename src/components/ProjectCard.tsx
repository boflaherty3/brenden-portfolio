import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    link2?: string;
    link3?: string;
  }
  
  const ProjectCard = ({ title, description, tech, link, link2 }: Project) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/50 transition-shadow">
        <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <p className="text-sm text-gray-400 mb-4">Tech: {tech.join(", ")}</p>
        <div className="grid grid-cols-2 gap-4">
          {link && <a href={link} target="_blank" className="inline-block text-center border-2 border-blue-600 bg-transparent text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">View Repo</a>}
          {link2 && <a href={link2} target="_blank" className="inline-block text-center border-2 border-blue-600 bg-transparent text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">Visit Website</a>}
        </div>
      </motion.div>
    );
  };
  
  export default ProjectCard;