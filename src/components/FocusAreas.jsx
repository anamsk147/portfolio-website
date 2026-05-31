function FocusAreas() {
  const focusAreas = [
    {
      title: "Analytics",
      description:
        "Transforming data into actionable business insights through visualization, exploration, and decision support.",
      icon: "📊",
    },
    {
      title: "Machine Learning",
      description:
        "Building predictive models and intelligent solutions using statistical and machine learning techniques.",
      icon: "🤖",
    },
    {
      title: "Research",
      description:
        "Applying data-driven methodologies and analytical thinking to solve real-world challenges.",
      icon: "🔬",
    },
    {
      title: "Sustainability",
      description:
        "Using analytics to address environmental and sustainability challenges through impactful research.",
      icon: "🌱",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-14">
          Areas of Focus
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl"
            >
              <div className="text-5xl mb-4">
                {area.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {area.title}
              </h3>

              <p className="text-slate-300">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FocusAreas;