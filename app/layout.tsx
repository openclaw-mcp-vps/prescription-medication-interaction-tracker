import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedSafe – Prescription Medication Interaction Tracker',
  description: 'Track dangerous drug interactions for multiple medications. Get severity-coded alerts for dangerous combinations and food interactions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ccb37ce9-2865-4c6a-b0d9-6ade37695e5d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
