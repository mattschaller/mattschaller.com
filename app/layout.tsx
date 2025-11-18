import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    creator: '@_mattschaller',
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
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-18781495-3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-18781495-3');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
