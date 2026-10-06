import type { Metadata } from "next"
import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "PokeScanDex — Pokémon Card Scanner & Collection Tracker",
  description: "Scan Pokémon cards, browse sets, track sealed products, manage your collection, and follow portfolio value with PokeScanDex.",
  metadataBase: new URL("https://edobranchi.github.io"),
  alternates: { canonical: "/" },
  icons: { icon: "/pokescandex-logo.png", apple: "/pokescandex-logo.png" },
  openGraph: {
    title: "PokeScanDex",
    description: "Scan, organize, and track your Pokémon TCG collection.",
    url: "https://edobranchi.github.io",
    siteName: "PokeScanDex",
    type: "website",
    images: [{ url: "/homepage.png", alt: "PokeScanDex portfolio dashboard" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
