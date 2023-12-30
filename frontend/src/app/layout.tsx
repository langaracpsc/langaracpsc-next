import { NextUIProvider } from '@nextui-org/react'
import '/styles/globals.css'

export const metadata = {
  title: "Langara Computer Science Club",
  description: "Website for Langara Computer Science Club.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}
