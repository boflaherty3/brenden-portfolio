import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Infinite Limit Business Services Website",
      description: "Designed and deployed a 6-page website with Astro, TypeScript, and TailwindCSS. Integrated a CI/CD pipeline with GitHub Pages and built a dynamic contact form with Node.js.",
      tech: ["Astro", "TypeScript", "TailwindCSS", "Node.js", "GitHub Pages"],
      link: "https://github.com/Infinite-Limit/marketing-site",
      link2: "https://infinite-limit.github.io/marketing-site/",
    },
    {
      title: "Brand and Buzz Consulting Redesign",
      description: "Redesigned WordPress pages, boosting traffic by 25% with SEO optimization and reducing update time by 50% via backend improvements.",
      tech: ["WordPress", "SEO", "Google Analytics"],
      link2: "https://brandandbuzzconsulting.com",
    },
    {
      title: "Brenden's Portfolio Website",
      description: "Created this portfolio site using Vite with Typescript, React, and TailwindCSS. Integrated a CI/CD pipeline with GitHub Pages and deployed to custom domain at brendenoflaherty.dev. Utilized Node.js for local development and deployment.",
      tech: ["TypeScript", "TailwindCSS", "Node.js", "GitHub Pages"],
      link: "https://github.com/boflaherty3/brenden-portfolio",
      link2: "https://brendenoflaherty.dev",
    },
    {
      title: "Tic Tac Toe Game",
      description: "Developed a Tic Tac Toe game using Python. Implemented a minimax algorithm to simulate 'AI' moves. Created players with different strategies and difficulty levels.",
      tech: ["Python", "Git"],
      link: "https://github.com/boflaherty3/tictactoe",
    },
    {
      title: "Electrocardiogram (ECG) Project",
      description: "Designed and built a functional ECG using operational amplifiers, capacitors, and resistors, applying MATLAB and DSP to filter noise and output accurate readings.",
      tech: ["MATLAB", "DSP", "Electical Circuits"],
    },
  ];

  return (
    <section className="min-h-screen py-12 bg-gray-900 text-white overflow-x-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
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