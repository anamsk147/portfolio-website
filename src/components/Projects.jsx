import { projects } from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;