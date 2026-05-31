import { certifications } from "../data/certifications";

function Certifications() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Certifications
        </h2>

        <div
  key={index}
  className="bg-slate-800 p-6 rounded-xl"
>
  <h3 className="text-xl font-semibold mb-2">
    {cert.title}
  </h3>

  <p className="text-blue-400 mb-4">
    {cert.issuer}
  </p>

  <a
    href={cert.link}
    target="_blank"
    rel="noreferrer"
    className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
  >
    View Certificate
  </a>
</div>
      </div>
    </section>
  );
}

export default Certifications;