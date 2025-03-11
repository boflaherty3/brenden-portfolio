import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Infinite Limit Business Services Website",
      description: "Designed and deployed a 6-page website with Astro, TypeScript, and TailwindCSS. Integrated a CI/CD pipeline with GitHub Pages and built a dynamic contact form with Node.js.",
      tech: ["Astro", "TypeScript", "TailwindCSS", "Node.js", "GitHub Pages"],
      link: "https://github.com/yourusername/infinite-limit", // Replace with real link
    },
    {
      title: "Brand and Buzz Consulting Redesign",
      description: "Redesigned WordPress pages, boosting traffic by 25% with SEO optimization and reducing update time by 50% via backend improvements.",
      tech: ["WordPress", "SEO", "Google Analytics"],
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;