import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="flex items-center justify-center bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <p className="text-lg text-gray-300 mb-6">
                I’m actively seeking full-stack and front-end opportunities to contribute to innovative projects and grow as a developer. Let’s connect—I’d love to discuss how I can bring value to your team!
            </p>
            <div className="space-y-4">
                <p>
                    <span className="flex items-center justify-center">
                        <a href="mailto:brendenoflaherty@gmail.com" 
                        className="flex items-center justify-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
                        <FaEnvelope className="w-5 h-5" />
                        <span>brendenoflaherty@gmail.com</span>
                        </a>
                    </span>
                </p>
                <p>
                    <span className="flex items-center justify-center">
                        <a href="https://www.github.com/boflaherty3" 
                        className="flex items-center justify-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
                        target="_blank">
                        <FaGithub className="w-5 h-5" />
                        <span>GitHub Profile</span>
                        </a>
                    </span>
                </p>
                <p>
                    <span className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/brendenoflaherty" 
                        className="flex items-center justify-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
                        target="_blank">
                        <FaLinkedin className="w-5 h-5" />
                        <span>LinkedIn Profile</span>
                        </a>
                    </span>
                </p>
                <p>
                    <span className="flex items-center justify-center">
                        <a href="/BrendenO'FlahertyResume.pdf" download 
                        className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-block">
                            <FaFileDownload className="w-5 h-5" />
                        <span>Download Resume</span>
                        </a>
                    </span>
                </p>
            </div>
        </div>
    </section>
  );
}

export default Contact;