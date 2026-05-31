import { skills } from "../data/skills";

function Skills() {
  const categories = [
    {
      title: "Analytics & BI",
      items: skills.analytics,
    },
    {
      title: "Machine Learning",
      items: skills.machineLearning,
    },
    {
      title: "Research & Statistics",
      items: skills.research,
    },
    {
      title: "Tools & Technologies",
      items: skills.tools,
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-14">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                  >
                    {skill}
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

export default Skills;