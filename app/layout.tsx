import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import type React from "react"
import { MotionProvider } from "@/components/providers/MotionProvider"

export const metadata = {
  title: "NotMid Agency - Digital Experiences That Matter",
  description:
    "Creative digital agency specializing in brand identity, web design, and interactive experiences that elevate your business above the ordinary.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}
