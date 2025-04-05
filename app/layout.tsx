import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LoadingProvider from "@/components/loading-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "8 Bit Warriors | The Future of Technology Starts Here",
  description:
    "8 Bit Warriors is a leading student-driven tech organization offering internships, events, hackathons, and a curated set of technical tools.",
  keywords:
    "tech community, student tech organization, hackathons, web development, AI learning, cybersecurity, tech internships, developer tools, open source projects, student tech club, software engineering, coding bootcamp, UI/UX design, cloud computing, competitive programming, IT careers, college tech events, student developer programs, programming tools, open source contributions",
  openGraph: {
    title: "8 Bit Warriors | The Future of Technology Starts Here",
    description:
      "Join 8 Bit Warriors, a dynamic student-led tech organization bridging innovation and learning through events, tools, and internships.",
    url: "https://8bitwarriors.com",
    siteName: "8 Bit Warriors",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "8 Bit Warriors Tech Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "8 Bit Warriors | The Future of Technology Starts Here",
    description:
      "Join 8 Bit Warriors, a dynamic student-led tech organization bridging innovation and learning through events, tools, and internships.",
    images: ["/images/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'