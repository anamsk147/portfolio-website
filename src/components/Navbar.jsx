function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <h1 className="text-white text-lg md:text-xl font-bold">
          Anam Shaikh
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>

          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>

          <a href="#research" className="hover:text-blue-400">
            Research
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;