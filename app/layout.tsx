import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Gautham ? Portfolio',
    template: '%s ? Gautham'
  },
  description: 'Engineer. Builder. Open-source. A portfolio that resonates and stays remembered.',
  openGraph: {
    title: 'Gautham ? Portfolio',
    description: 'Engineer. Builder. Open-source. A portfolio that resonates and stays remembered.',
    url: 'https://agentic-d79c8cc7.vercel.app',
    siteName: 'Gautham Portfolio',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Gautham Portfolio' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  metadataBase: new URL('https://agentic-d79c8cc7.vercel.app'),
  twitter: { card: 'summary_large_image' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-[radial-gradient(1250px_circle_at_50%_0%,rgba(56,189,248,.15),rgba(67,56,202,.05)_40%,transparent_70%)] relative">
        <div className="aurora" />
        <div className="grid-overlay" />
        {children}
      </body>
    </html>
  )
}
