import { research } from "../data/research";

function Research() {
  return (
    <section
      id="research"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-14">
          Research & Academic Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {research.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-300 mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
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

export default Research;