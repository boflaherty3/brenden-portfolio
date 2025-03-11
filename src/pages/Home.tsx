const Home = () => {
    return (
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Brenden O’Flaherty</h1>
          <p className="text-xl md:text-2xl mb-6">Software Engineer | Front-End & Full-Stack Developer</p>
          <p className="text-lg mb-8">Building responsive, user-focused solutions with modern tech.</p>
          <div className="space-x-4">
            <a href="/projects" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">View Projects</a>
            <a href="/contact" className="border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600">Contact Me</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;