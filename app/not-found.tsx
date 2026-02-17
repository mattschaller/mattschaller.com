import Link from 'next/link'
import { Terminal, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <Terminal className="w-20 h-20 text-accent-blue mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-text-secondary mb-4">Page not found</h2>
        </div>

        <div className="bg-bg-secondary border border-border-color rounded-lg p-6 mb-6">
          <p className="text-text-primary mb-0">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green text-white rounded-md hover:opacity-90 transition-opacity"
        >
          <Home className="w-4 h-4" />
          Go back home
        </Link>
      </div>
    </div>
  )
}
