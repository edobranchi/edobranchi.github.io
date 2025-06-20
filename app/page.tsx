import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { AppCarousel } from "@/components/app-carousel"
import { Camera, Database, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/PokeScanDexWebsite/pokescandex-logo.png" alt="PokeScanDex Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">PokeScanDex</span>
        </div>
        <ModeToggle />
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/PokeScanDexWebsite/pokescandex-logo.png"
              alt="PokeScanDex Logo"
              className="h-24 w-24 rounded-2xl mb-4 shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">PokeScanDex</h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mb-8">
            Collect, scan, and track your Pokémon cards like never before! This powerful and fast Pokémon card
            collection manager is designed for serious collectors and casual fans alike.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <Link
              href="https://play.google.com/store/apps/details?id=com.EBDev.pokescandex"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/PokeScanDexWebsite/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See PokeScanDex in Action</h2>
          <AppCarousel />
        </section>

        <section id="features" className="py-12 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Camera className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Card Recognition</CardTitle>
                <CardDescription>Instantly identify any Pokémon card with your camera.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Simply point your camera at any Pokémon card and our advanced AI will instantly recognize and identify
                  it, adding it to your collection with all the details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Complete Set Database</CardTitle>
                <CardDescription>Browse all Pokémon sets ever released.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Explore the complete database of every Pokémon TCG set from Base Set to the latest releases. Track
                  your collection progress and discover new cards.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Real-Time Price Tracking</CardTitle>
                <CardDescription>Track prices from Cardmarket and TCGplayer.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Stay updated with real-time market prices from major platforms like Cardmarket and TCGplayer to make
                  informed buying and selling decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto mb-8">
            Join thousands of Pokémon card collectors who have revolutionized their collection management with
            PokeScanDex.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://play.google.com/store/apps/details?id=com.EBDev.pokescandex"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <img
                src="/PokeScanDexWebsite/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PokeScanDex. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://github.com/edobranchi/PokeScanDexPrivacyPolicy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <a href="mailto:pokescandex@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
              pokescandex@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
