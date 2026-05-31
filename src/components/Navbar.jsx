import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-white text-lg md:text-xl font-bold">
          Anam Shaikh
        </h1>

        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-8 py-4 flex flex-col gap-4 text-slate-300">

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#research"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Research
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-400"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;