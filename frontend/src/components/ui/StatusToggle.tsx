'use client'

export default function StatusToggle() {
  return (
    <div
      role="status"
      aria-label="Computer science student specializing in AI and machine learning"
      className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/5 px-3 py-1.5 text-[10px] font-mono font-semibold tracking-wider text-cyan-200 shadow-sm shadow-cyan-950/20"
    >
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400/40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
      </span>
      <span>CSE STUDENT</span>
      <span className="text-slate-600" aria-hidden="true">/</span>
      <span className="text-slate-300">AI/ML</span>
    </div>
  )
}
