function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 pt-24 gap-12">
      
      <div className="max-w-3xl text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-4">
          Anam Shaikh
        </h1>

        <h2 className="text-3xl text-blue-400 mb-4">
          Data Science Graduate
        </h2>

        <p className="text-xl text-slate-300 mb-3">
          Analytics • Machine Learning • Research
        </p>

        <p className="text-lg text-slate-400 mb-8">
          From Data to Decisions Through Analytics,
          Machine Learning, and Research.
        </p>

        <div className="mb-8">
          <p className="text-lg font-medium">
            B.Sc. Data Science | CGPA: 3.67 / 4.0
          </p>

          <p className="text-slate-400">
            NMIMS University
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-white text-slate-900 px-6 py-3 rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div>
        <img
          src="/profile.jpg"
          alt="Anam Shaikh"
          className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl shadow-blue-500/20"
        />
      </div>

    </section>
  );
}

export default Hero;