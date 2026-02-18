export default function Header() {
  return (
    <header className="mb-12">
      <h1 className="text-5xl sm:text-[48px] font-semibold tracking-tight text-text-primary mb-2">
        Matt Schaller
      </h1>
      <p className="text-xl text-text-secondary mb-6">
        VP, Software Development | Engineering Leadership &amp; AI Acceleration
      </p>
      <div className="font-mono text-[13px] text-text-dim flex gap-4 flex-wrap">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-[pulse-dot_2s_ease-in-out_infinite]" />
          Available
        </span>
        <span>15 years building teams &amp; products</span>
        <span>Miami-Fort Lauderdale Area</span>
      </div>
    </header>
  )
}
