import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] })

export const metadata = {
  title: "eSports Tournament - PGMC IT DEPARTMENT",
  description: "Join the ultimate gaming showdown at PGMC IT Department",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

