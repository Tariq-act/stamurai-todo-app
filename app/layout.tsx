import './globals.css'
import type { Metadata } from 'next'
import { Provider } from 'mobx-react'
import { Inter } from 'next/font/google'

import Navbar from '@/app/components/Navbar'
import { todoStore } from '@/store/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo Management App',
  description: 'Todo app to manage the todos according to your day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" >
      <body className={inter.className} suppressHydrationWarning={true}  >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
