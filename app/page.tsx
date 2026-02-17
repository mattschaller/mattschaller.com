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
  const searchParams = useSearchParams()

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'light' ? 'light' : ''
    )
  }, [theme])

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
      alert('\uD83C\uDFAE Legacy mode detected! (This is where the terminal or mIRC version would load)')
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
    <Suspense>
      <HomeContent />
    </Suspense>
  )
}
