import '../../globals.css'

export const metadata = {
  title: 'Craig Parfitt UI/UX Designer',
  description: 'Craig Parfitt UI/UX Portfolio',
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
