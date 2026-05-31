function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Contact
        </h2>

        <p className="text-slate-300 mb-12">
          I'm always open to discussing data science,
          analytics, machine learning, research, and
          new opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
  
  <a
    href="https://linkedin.com/in/anamshahidshaikh"
    target="_blank"
    rel="noreferrer"
    className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition"
  >
    <h3 className="text-xl font-semibold">LinkedIn</h3>
    <p className="text-slate-400">
      Connect professionally
    </p>
  </a>

  <a
    href="https://github.com/anamsk147"
    target="_blank"
    rel="noreferrer"
    className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition"
  >
    <h3 className="text-xl font-semibold">GitHub</h3>
    <p className="text-slate-400">
      View my repositories
    </p>
  </a>

  <a
    href="https://public.tableau.com/app/profile/anam.shaikh1182/vizzes"
    target="_blank"
    rel="noreferrer"
    className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition"
  >
    <h3 className="text-xl font-semibold">Tableau Public</h3>
    <p className="text-slate-400">
      Explore dashboards
    </p>
  </a>

  <a
    href="mailto:anamshaikh0306@gmail.com"
    className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition"
  >
    <h3 className="text-xl font-semibold">Email</h3>
    <p className="text-slate-400">
      Get in touch
    </p>
  </a>

</div>
      </div>
    </section>
  );
}

export default Contact;