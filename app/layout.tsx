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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5B2WMN');
          `}
        </Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
/*
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
*/
`,
          }}
        />
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5B2WMN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
