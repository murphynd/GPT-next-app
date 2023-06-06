import './globals.css'
import { Inter } from 'next/font/google'

// setting up font via nextjs
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog AI app',
  description: 'Blog built in Jext Js that uses AI to generate content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
