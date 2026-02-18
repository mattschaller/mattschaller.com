import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-sans',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'matt schaller',
    template: '%s | matt schaller',
  },
  description: "Matthew Schaller's personal homepage.",
  authors: [{ name: 'Matthew Schaller' }],
  creator: 'Matthew Schaller',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mattschaller.com',
    siteName: 'matt schaller',
    title: 'matt schaller',
    description: "Matthew Schaller's personal homepage.",
  },
  twitter: {
    card: 'summary',
    creator: '@mattschaller',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Validate and sanitize GTM ID
const validateGTMId = (id: string | undefined): string | null => {
  const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/

  if (!id) {
    const message = 'Missing NEXT_PUBLIC_GTM_ID environment variable.'
    if (process.env.NODE_ENV === 'production') {
      throw new Error(message)
    }
    console.warn(message + ' GTM disabled in development.')
    return null // Disable GTM in non-production when ID is missing
  }

  if (!GTM_ID_PATTERN.test(id)) {
    const message = `Invalid GTM ID format: ${id}`
    if (process.env.NODE_ENV === 'production') {
      throw new Error(message)
    }
    console.warn(message + ' GTM disabled in development.')
    return null // Disable GTM in non-production when ID is invalid
  }

  return id
}

const GTM_ID = validateGTMId(process.env.NEXT_PUBLIC_GTM_ID)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        {/* Prevent theme flash by applying theme before render.
            External script maintains strict CSP compliance without 'unsafe-inline'. */}
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        {/* Google Tag Manager - External script for CSP compliance */}
        {GTM_ID && (
          <Script 
            src="/gtm-bootstrap.js" 
            strategy="afterInteractive"
            data-gtm-id={GTM_ID}
          />
        )}
      </head>
      <body className="font-sans">
        {/* ASCII art Easter egg comment */}
        {/* 
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   Hey there. If you're reading this, you're probably the      ║
║   kind of person I want to work with.                         ║
║                                                               ║
║   This site was built with intention. Clean, fast,            ║
║   accessible, and a few Easter eggs for those who look.       ║
║                                                               ║
║   Try:                                                        ║
║   - View /humans.txt                                          ║
║   - Press Ctrl+Shift+L (or Cmd+Shift+L on Mac)               ║
║   - Append ?legacy=true to the URL                            ║
║                                                               ║
║   Built by someone who learned Visual Basic before            ║
║   JavaScript existed. Still ships code. Still gives a shit.   ║
║                                                               ║
║   - Matt                                                      ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
        */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
