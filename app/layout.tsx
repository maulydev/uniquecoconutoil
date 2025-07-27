import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Unique Coconut Oil',
  description: 'Premium unrefined coconut oil for hair, skin, and cooking. 100% natural and locally sourced.',
  openGraph: {
    title: 'Unique Coconut Oil',
    description: 'Premium unrefined coconut oil for hair, skin, and cooking. 100% natural and locally sourced.',
    url: 'https://uniquecart.vercel.app',
    siteName: 'Unique Coconut Oil',
    images: [
      {
        url: 'https://uniquecart.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: '25 Litre Unique Coconut Oil Gallon',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unique Coconut Oil',
    description: 'Premium unrefined coconut oil for hair, skin, and cooking. 100% natural and locally sourced.',
    images: ['https://uniquecart.vercel.app/og-image.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
