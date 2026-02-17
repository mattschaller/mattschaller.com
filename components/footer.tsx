interface FooterProps {
  onToggleTheme: () => void
}

export default function Footer({ onToggleTheme }: FooterProps) {
  return (
    <footer className="pt-12 pb-8 border-t border-border-color font-mono text-xs text-text-dim text-center">
      <nav className="flex justify-center gap-4 mb-4" aria-label="Footer navigation">
        <a href="/humans.txt" className="hover:text-accent-blue transition-colors">
          humans.txt
        </a>
        <button
          onClick={onToggleTheme}
          className="hover:text-accent-blue transition-colors"
          aria-label="Toggle between light and dark theme"
        >
          toggle theme
        </button>
        <a
          href="https://github.com/mattschaller/mattschaller.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-blue transition-colors"
          aria-label="View source code on GitHub (opens in new tab)"
        >
          view source
        </a>
      </nav>
      <p>Built with intention. No frameworks harmed in the making of this site.</p>
      <p className="mt-2 opacity-50 text-[12px]">
        Best viewed in Netscape Navigator 4.0 or higher
      </p>
    </footer>
  )
}
