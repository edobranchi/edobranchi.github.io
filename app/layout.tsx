import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "PokeScanDex",
  description: "Scan and manage your Pokémon card collection with live prices and stats!",
  icons: {
    icon: [
      { url: "/PokeScanDexWebsite/pokescandex-logo.png", sizes: "any" },
      { url: "/PokeScanDexWebsite/pokescandex-logo.png", sizes: "16x16", type: "image/png" },
      { url: "/PokeScanDexWebsite/pokescandex-logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/PokeScanDexWebsite/pokescandex-logo.png", sizes: "180x180" }],
    other: [
      { url: "/PokeScanDexWebsite/pokescandex-logo.png", sizes: "192x192", type: "image/png" },
      { url: "/PokeScanDexWebsite/pokescandex-logo.png", sizes: "512x512", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
