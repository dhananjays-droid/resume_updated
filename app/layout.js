import './globals.css'

export const metadata = {
  title: 'Dhananjay Sarathe - Software Development Engineer',
  description: 'Founding Member at Quickads | Full Stack Engineer specializing in Next.js and AI-driven applications',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

