import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'
import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import { ClerkProvider } from '@clerk/nextjs'
import NextNProgress from 'nextjs-progressbar'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lemon Threads',
  description: 'Made with Nextjs 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      
      <html lang="en">
        <body className={inter.className}>
        {/* <NextNProgress color='#29e' /> */}
          <Topbar />
            <Suspense fallback={<Loading />}>
              <main className='flex flex-row'>
                <LeftSidebar />

                    <section className="main-container">
                      <div className="w-full max-w-4xl">
                        {children}
                      </div>
                    </section>

                <RightSidebar />
              </main>
            </Suspense>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
