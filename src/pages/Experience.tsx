const Experience = () => {
    const experiences = [{
        company: "Infinite Limit Business Services",
        role: "Web Developer, Freelance Contractor",
        date: "Dec 2024 - Present",
        description: "As a freelance website developer, I crafted and launched a sophisticated 6-page website utilizing Astro.build, TypeScript, JavaScript, HTML, and TailwindCSS, delivering a seamless and visually appealing user experience. I established robust CI/CD pipelines with GitHub Pages, ensuring 100% uptime following the site’s debut. Locally, I leveraged Node.js to develop innovative features, including a dynamic contact form that streamlined client inquiries. Additionally, I explored a generative AI-powered chatbot using Node.js and OpenAI’s API to enhance user engagement.",
    },
    {
        company: "Brand and Buzz Consulting",
        role: "Web Developer,  Freelance Contractor",
        date: "Sep 2024 - Present",
        description: "In my role as a freelance website developer, I revitalized the Media and Speaking Engagements pages on a WordPress platform, driving a 25% increase in site traffic through meticulous SEO optimization and consolidated article postings. By reconfiguring backend logic, I streamlined the blog posting process, cutting update times in half. I integrated Google Analytics and Search Console to track user behavior, laying the groundwork for potential machine learning-driven personalization features. To further boost visibility, I enhanced SEO with the Yoast plugin, optimizing keywords and internal linking while employing AI tools to forecast high-impact keyword trends.",
    },
    {
        company: "Medtronic",
        role: "Process Engineer II - New Produt Introduction",
        date: "Nov 2023 - Present",
        description: "As a Process Engineer II, I author and evaluate PLC software for custom automation equipment, ensuring flawless integration into production lines for advanced manufacturing processes. I partner with cross-functional teams to design and validate software-driven solutions that enhance operational efficiency. Leading engineering change orders, I spearhead the adoption of new technologies within clinical production environments. Recognized as a Subject Matter Expert (SME) on equipment development, I support a 1,000-person manufacturing site by designing, developing, and procuring custom equipment and fixtures tailored to the production of innovative Catheter Delivery Systems. My expertise extends to mastering the intricate product designs of Class II and III medical devices.",
    },
    {
        company: "Abbott Laborotories",
        role: "Engineer I and II, Product Analysis",
        date: "Jun 2020 - Nov 2023",
        description: "During my tenure at Abbott Laboratories, I progressed from Engineer I to Engineer II, culminating in the leadership of a new lab space creation, where I designed and implemented testing procedures for a groundbreaking Class III product line. I developed rigorous testing protocols for implantable cardiac devices, analyzing failure data to drive continuous product enhancements. My responsibilities included coordinating the procurement, calibration, and maintenance of new equipment, collaborating seamlessly with internal and external teams. Consistently surpassing objectives, I initiated and executed projects that expanded the department’s capabilities and impact.",
    }];

    return(
        <section className="min-h-screen py-12 bg-gray-900 text-white overflow-x-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">Experience</h2>
                <div className="relative border-l-2 border-blue-500">
                    {experiences.map((experience, index) => (
                    <div key={index} className="mb-8 pl-6">
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-1.5"></div>
                        <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
                        <p className="text-lg text-blue-500">{experience.role}</p>
                        <p className="text-sm text-gray-400 mb-2">{experience.date}</p>
                        <p className="text-gray-300">{experience.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Experience