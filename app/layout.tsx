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
const validateGTMId = (id: string | undefined): string => {
  const GTM_ID_PATTERN = /^GTM-[A-Z0-9]+$/

  if (!id) {
    const message = 'Missing NEXT_PUBLIC_GTM_ID environment variable.'
    if (process.env.NODE_ENV === 'production') {
      throw new Error(message)
    }
    console.error(message)
    return 'GTM-5B2WMN' // fallback to known valid ID in non-production
  }

  if (!GTM_ID_PATTERN.test(id)) {
    const message = `Invalid GTM ID format: ${id}`
    if (process.env.NODE_ENV === 'production') {
      throw new Error(message)
    }
    console.error(message)
    return 'GTM-5B2WMN' // fallback to known valid ID in non-production
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
        {/* Prevent theme flash by applying theme before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else if (!theme && window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',${JSON.stringify(GTM_ID)});
          `}
        </Script>
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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
