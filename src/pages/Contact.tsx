const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <p className="text-lg text-gray-300 mb-6">I'm always open to new opportunities 
                and collaborations. Reach out to me via email or connect with me on LinkedIn!
            </p>
            <div className="space-y-4">
                <p>
                    <a href="mailto:brendenoflaherty@gmail.com" 
                    className="text-blue-500 hover:text-blue-600 transition-colors">
                    brendenoflaherty@gmail.com</a>
                </p>
                <p>
                    <a href="https://www.github.com/boflaherty3" 
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                    target="_blank">
                    Github Profile</a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/brendenoflaherty" 
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                    target="_blank">
                    LinkedIn Profile</a>
                </p>
                <p>
                    <a href="/resume.pdf" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
                    Download Resume</a>
                </p>
            </div>
        </div>
    </section>
  );
}

export default Contact;