
import '/styles/globals.css'
import PlausibleProvider from 'next-plausible'

export const metadata = {
  title: "Langara Computer Science Club",
  description: "The official website of the Langara Computer Science Club.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <PlausibleProvider domain="langaracs.ca" customDomain='https://plausible.langaracs.ca' trackOutboundLinks selfHosted/>
        </head>
        <body> 
          {children}
        </body>
    </html>
  )
}
 
