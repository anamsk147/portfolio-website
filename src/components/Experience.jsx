import { experience } from "../data/experience";

function Experience() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-14">
          Experience
        </h2>

        {experience.map((job, index) => (
          <div
            key={index}
            className="bg-slate-800 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold">
              {job.role}
            </h3>

            <p className="text-blue-400 mt-2">
              {job.company}
            </p>

            <p className="text-slate-400 mb-6">
              {job.duration}
            </p>

            <ul className="space-y-3">
              {job.responsibilities.map((item, i) => (
                <li key={i}>
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;