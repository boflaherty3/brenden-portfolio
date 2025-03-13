const Skills = () => {
    const skills = [
        "Python",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "JavaScript",
        "SQL",
        "AWS",
        "Git Version Control",
        "Astro",
        "C++",
        "CI/CD",
        "Vite",
        "GitHub Pages",
        "SEO",
        "Google Analytics",
        "WordPress",
        "HTML",
        "DNS Configuration",
    ];

    return(
        <section className="min-h-screen py-12 bg-gray-900 text-white overflow-x-hidden">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Skills</h2>
                <div className="flex flex-wrap justify-center gap-6 my-8">
                    {skills.map((skills, index) => (
                    <div key={index} className="bg-gray-800 text-blue-500 px-4 py-2 rounded-full text-md lg:text-xl font-semibold hover:bg-blue-500 hover:text-white transition-colors">{skills}</div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Skills