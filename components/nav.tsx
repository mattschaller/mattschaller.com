export default function Nav() {
  return (
    <nav className="mb-20 pb-6 border-b border-border-color" aria-label="Main navigation">
      <ul className="flex gap-8">
        <li><a href="#about" className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors" aria-label="Navigate to About section">About</a></li>
        <li><a href="#experience" className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors" aria-label="Navigate to Experience section">Experience</a></li>
        <li><a href="#skills" className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors" aria-label="Navigate to Skills section">Skills</a></li>
        <li><a href="#contact" className="text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors" aria-label="Navigate to Contact section">Contact</a></li>
      </ul>
    </nav>
  )
}
