function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-between px-20 pt-24">
      
      <div className="max-w-3xl">
        <h1 className="text-7xl font-bold mb-4">
          Anam Shaikh
        </h1>

        <h2 className="text-2xl text-blue-400 mb-6">
          Data Science Graduate | Analytics, Machine Learning & Research
        </h2>

        <p className="text-xl text-slate-300 mb-8">
          From Data to Decisions Through Analytics,
          Machine Learning, and Research.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg">
            View Projects
          </button>

          <button className="bg-white text-slate-900 px-6 py-3 rounded-lg">
            Download Resume
          </button>
        </div>
      </div>

      <div>
        <img
          src="/profile.jpg"
          alt="Anam Shaikh"
          className="w-80 h-80 rounded-full object-cover border-4 border-blue-500"
        />
      </div>

    </section>
  );
}

export default Hero;