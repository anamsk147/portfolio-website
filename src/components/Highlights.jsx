function Highlights() {
  const highlights = [
    {
      title: "CGPA",
      value: "3.67 / 4.0",
    },
    {
      title: "Experience",
      value: "AI/ML Intern",
    },
    {
      title: "Research",
      value: "Health Insurance & E-Waste",
    },
    {
      title: "Certifications",
      value: "Oracle OCI",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Quick Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl text-center"
            >
              <h3 className="text-lg text-blue-400 mb-2">
                {item.title}
              </h3>

              <p className="text-2xl font-bold">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;