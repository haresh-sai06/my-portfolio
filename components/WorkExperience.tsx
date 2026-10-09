const EXPERIENCE = [
  {
    company: "Dendo",
    role: "Mobile Application Developer Intern",
    period: "June to August 2026",
    description:
      "Built and shipped Nexa Ride to the Apple App Store, then handed production maintenance to the Dendo team.",
    stack: "React Native · AWS · REST APIs",
  },
  {
    company: "Tenneco",
    role: "Software Engineering Intern",
    period: "May to June 2026",
    description:
      "Built voice-driven desktop tools that turn speech into maintenance form entries and reduce repetitive data entry.",
    stack: "Tauri · React · Python",
  },
  {
    company: "Codsoft",
    role: "Machine Learning Intern",
    period: "July to August 2025",
    description:
      "Trained and evaluated machine learning models and built dashboards to inspect trends and guide model tuning.",
    stack: "Python · TensorFlow · Data visualization",
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-[#050505] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Experience</p>
            <h2 className="font-display text-4xl uppercase leading-tight md:text-6xl">
              Built beyond
              <br />
              <span className="text-[rgb(168,255,96)]">the classroom.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Three internships in mobile products, industrial workflows, and
            applied machine learning shaped how I build.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {EXPERIENCE.map((item) => (
            <article
              key={item.company}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/45">
                {item.period}
              </p>
              <h3 className="mt-5 text-2xl font-semibold text-white">
                {item.company}
              </h3>
              <p className="mt-2 text-sm text-[rgb(168,255,96)]">{item.role}</p>
              <p className="mt-5 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
              <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/45">
                {item.stack}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-7 text-sm leading-relaxed text-white/55">
          <span
            className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[rgb(168,255,96)]"
            aria-hidden
          />
          Currently representing Reskill as Campus Ambassador at Sri Krishna
          College of Technology.
        </p>
      </div>
    </section>
  );
}
