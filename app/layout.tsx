import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumière Wellness Studio | Luxury Spa & Beauty · Dubai Marina',
  description: 'An elevated sanctuary of beauty and wellness in the heart of Dubai Marina. Premium facials, body rituals, massage therapy, and holistic treatments.',
  keywords: 'luxury spa Dubai, beauty studio Dubai Marina, wellness retreat Dubai, premium facials Dubai, massage therapy Dubai',
  openGraph: {
    title: 'Lumière Wellness Studio',
    description: 'An elevated sanctuary of beauty and wellness in Dubai Marina.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
