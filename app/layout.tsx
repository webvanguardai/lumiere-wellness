import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumière Wellness Studio | Luxury Spa & Beauty · Dubai Marina',
  description: 'Award-winning luxury spa in Dubai Marina. Signature facials, holistic massages, gold rituals. Book your treatment at Lumière Wellness Studio.',
  keywords: 'luxury spa dubai, spa dubai marina, facial treatment dubai, massage dubai, beauty salon dubai marina, wellness dubai',
  metadataBase: new URL('https://lumiere-wellness.vercel.app'),
  alternates: {
    canonical: 'https://lumiere-wellness.vercel.app',
  },
  openGraph: {
    title: 'Lumière Wellness Studio | Luxury Spa & Beauty · Dubai Marina',
    description: 'Award-winning luxury spa in Dubai Marina. Signature facials, holistic massages, gold rituals. Book your treatment at Lumière Wellness Studio.',
    url: 'https://lumiere-wellness.vercel.app',
    siteName: 'Lumière Wellness Studio',
    images: [
      {
        url: 'https://lumiere-wellness.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lumière Wellness Studio — Luxury Spa Dubai Marina',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumière Wellness Studio | Luxury Spa & Beauty · Dubai Marina',
    description: 'Award-winning luxury spa in Dubai Marina. Signature facials, holistic massages, gold rituals.',
    images: ['https://lumiere-wellness.vercel.app/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
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
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PLACEHOLDER');
        `}</Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
