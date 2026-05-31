function Projects() {
  const projects = [
    {
      title: "Modeling the Electric Mobility Ecosystem in India",
      description:
        "Achieved R² = 0.833 in charging duration prediction and forecasted the need for approximately 17,491 additional charging stations in India.",
      tech: "Python • ARIMA • K-Means • Regression",
    },
    {
      title: "Fraud Detection Using Apache Spark",
      description:
        "Built scalable fraud detection models using distributed computing and machine learning techniques on large datasets.",
      tech: "Spark • Hadoop • MLlib • Scala",
    },
    {
      title: "Frequent Itemset Mining",
      description:
        "Applied Apriori and FP-Growth algorithms to discover purchasing patterns and support recommendation systems.",
      tech: "Python • Apriori • FP-Growth",
    },
    {
      title: "Credit Card Complaints Dashboard",
      description:
        "Designed an interactive Tableau dashboard to analyze complaint trends and support business decision-making.",
      tech: "Tableau • Data Visualization",
    },
  ];

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
              className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-4">
                {project.description}
              </p>

              <span className="text-blue-400">
                {project.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;