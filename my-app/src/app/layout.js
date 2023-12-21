import {  Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({weight: "300", style: "normal", subsets: ['latin']})


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
