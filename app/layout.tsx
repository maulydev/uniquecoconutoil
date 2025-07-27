import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Unique Coconut Oil",
  description: "Unique Coconut Oil",
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
