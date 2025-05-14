import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Harmony Wellness | Massage Therapy",
  description:
    "Experience therapeutic massage tailored to your unique needs, helping you reconnect with your body's natural harmony.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <footer className="bg-stone-800 text-stone-300 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 font-light">Harmony Wellness</h3>
                  <p className="text-sm font-light">
                    Therapeutic massage tailored to your unique needs, helping you reconnect with your body's natural
                    harmony.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 font-light">Hours</h3>
                  <ul className="space-y-2 text-sm font-light">
                    <li>Monday - Friday: 9am - 6pm</li>
                    <li>Saturday: 10am - 4pm</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 font-light">Contact</h3>
                  <ul className="space-y-2 text-sm font-light">
                    <li>123 Serenity Lane</li>
                    <li>Wellness City, WC 12345</li>
                    <li>info@harmonywellness.com</li>
                    <li>(555) 123-4567</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-stone-700 mt-8 pt-8 text-center text-sm font-light">
                <p>© {new Date().getFullYear()} Harmony Wellness. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
