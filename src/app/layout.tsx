import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Next Events App",
  description: "An Events booking platform built with next.js and AI tools"
}

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"]
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratFont.className} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  )
}
