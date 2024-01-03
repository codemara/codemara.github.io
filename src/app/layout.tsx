
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'codeMARA',
  description: 'Web and I.T. solutions by Noemi Desmarais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
    <body>

          {children}
      </body>
    </html>
  );
}


