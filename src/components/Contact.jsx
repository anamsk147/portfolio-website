function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <p className="text-slate-300 mb-12">
          I'm always open to discussing data science,
          analytics, machine learning, research, and
          new opportunities.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <a
            href="https://linkedin.com/in/anamshahidshaikh"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/anamsk147"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://public.tableau.com/app/profile/anam.shaikh1182/vizzes"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            Tableau Public
          </a>

          <a
            href="mailto:anamshaikh0306@gmail.com"
            className="text-blue-400 hover:underline"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;