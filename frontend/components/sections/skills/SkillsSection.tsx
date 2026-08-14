export function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Design'].map((skill) => (
          <span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
