interface FooterProps {
  onToggleTheme: () => void
}

export default function Footer({ onToggleTheme }: FooterProps) {
  return (
    <footer className="pt-12 pb-8 border-t border-border-color font-mono text-xs text-text-dim text-center">
      <div className="flex justify-center gap-4 mb-4">
        <a href="/humans.txt" className="hover:text-accent-blue transition-colors">
          humans.txt
        </a>
        <button
          onClick={onToggleTheme}
          className="hover:text-accent-blue transition-colors"
        >
          toggle theme
        </button>
        <a
          href="https://github.com/mattschaller/mattschaller.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-blue transition-colors"
        >
          view source
        </a>
      </div>
      <p>Built with intention. No frameworks harmed in the making of this site.</p>
      <p className="mt-2 opacity-50 text-[11px]">
        Best viewed in Netscape Navigator 4.0 or higher
      </p>
    </footer>
  )
}
