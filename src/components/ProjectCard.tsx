import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
  }
  
  const ProjectCard = ({ title, description, tech, link }: Project) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <p className="text-sm text-gray-500 mb-4">Tech: {tech.join(", ")}</p>
          {link && <a href={link} className="text-blue-600 hover:underline">View Project</a>}
        </div>
      </motion.div>
    );
  };
  
  export default ProjectCard;