export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold">Project One</h3>
          <p className="mt-2 text-slate-300">Project summary and impact details.</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-xl font-semibold">Project Two</h3>
          <p className="mt-2 text-slate-300">Project summary and impact details.</p>
        </div>
      </div>
    </section>
  );
}
