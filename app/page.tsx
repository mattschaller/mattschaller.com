'use client'

import { Suspense, useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/header'
import Nav from '@/components/nav'
import About from '@/components/about'
import Experience from '@/components/experience'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

function HomeContent() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [isInitialized, setIsInitialized] = useState(false)
  const searchParams = useSearchParams()

  // Initialize theme from localStorage or system preference after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
    }
    setIsInitialized(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  // Only persist theme changes after initialization to avoid race condition
  useEffect(() => {
    if (!isInitialized) return

    document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'light' : ''
    )
    localStorage.setItem('theme', theme)
  }, [theme, isInitialized])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault()
        toggleTheme()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [toggleTheme])

  useEffect(() => {
    if (searchParams.get('legacy') === 'true') {
      console.log('🎮 Legacy mode detected! (This is where the terminal or mIRC version would load)')
    }
  }, [searchParams])

  return (
    <div className="max-w-content mx-auto px-6 sm:px-10 py-20">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer onToggleTheme={toggleTheme} />
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="max-w-content mx-auto px-6 sm:px-10 py-20">
        <div className="text-text-secondary">Loading...</div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  )
}
