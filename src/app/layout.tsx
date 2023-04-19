import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music.',
}

const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-zinc-900 text-zinc-50 ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
