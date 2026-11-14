import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Face Brand Digital | The Digital Face of Your Brand',
  description: 'Web development, performance marketing, QA automation, cybersecurity, and connected business operations. Everywhere every time.',
  generator: 'Face Brand Digital',
  openGraph: {
    title: 'Face Brand Digital | The Digital Face of Your Brand',
    description: 'One connected team for web, growth, quality, and business operations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Face Brand Digital',
    description: 'The digital face of your brand. Everywhere every time.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050811',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
