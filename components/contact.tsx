export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 mb-20">
      <h2 className="text-3xl sm:text-[32px] font-semibold text-text-primary mb-8 tracking-tight">
        Contact
      </h2>
      <div className="flex gap-6 flex-wrap">
        <a
          href="mailto:matt@mattschaller.com"
          className="inline-flex items-center gap-2 px-5 py-3 bg-bg-secondary border border-border-accent rounded-md text-text-primary text-sm font-medium hover:bg-bg-tertiary hover:border-accent-blue hover:-translate-y-px transition-all"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/mattschaller"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-bg-secondary border border-border-accent rounded-md text-text-primary text-sm font-medium hover:bg-bg-tertiary hover:border-accent-blue hover:-translate-y-px transition-all"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mattschaller"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-bg-secondary border border-border-accent rounded-md text-text-primary text-sm font-medium hover:bg-bg-tertiary hover:border-accent-blue hover:-translate-y-px transition-all"
        >
          GitHub
        </a>
      </div>
      <p className="mt-6 text-text-secondary text-sm leading-relaxed">
        I architect AI systems, build engineering teams, and drive technical strategy.
        Always open to interesting conversations about challenging problems.
      </p>
    </section>
  )
}
