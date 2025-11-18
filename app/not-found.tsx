import Link from 'next/link'
import { Terminal, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <Terminal className="w-20 h-20 text-[#58a6ff] mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-[#c9d1d9] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#8b949e] mb-4">Page not found</h2>
        </div>
        
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-6">
          <p className="text-[#c9d1d9] mb-0">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#238636] text-white rounded-md hover:bg-[#2ea043] transition-colors"
        >
          <Home className="w-4 h-4" />
          Go back home
        </Link>
      </div>
    </div>
  )
}

