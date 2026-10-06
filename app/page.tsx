import { AppCarousel } from "@/components/app-carousel"
import { ModeToggle } from "@/components/mode-toggle"
import { Camera, Database, PackageOpen, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"

const playStoreUrl = "https://play.google.com/store/apps/details?id=com.EBDev.pokescandex"

const features = [
  { icon: Camera, title: "Scan cards fast", text: "Point your camera at a card, identify it, and jump straight into the details." },
  { icon: Database, title: "Track your collection", text: "Browse sets, see what you own, and spot what is still missing." },
  { icon: TrendingUp, title: "Watch portfolio value", text: "Follow collection value, market movers, and your most valuable cards." },
  { icon: PackageOpen, title: "Track sealed products", text: "Keep sealed products alongside cards in one collection." },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/pokescandex-logo.png" alt="PokeScanDex" className="h-10 w-10 rounded-xl shadow-sm" />
            <span className="text-lg font-semibold tracking-tight">PokeScanDex</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#features" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline">Features</Link>
            <Link href="#app" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline">App</Link>
            <ModeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="container mx-auto grid items-center gap-14 px-4 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" /> Built for Pokémon TCG collectors
            </div>
            <h1 className="max-w-3xl text-5xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Scan less. <span className="block bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">Collect smarter.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Scan cards, browse sets, track sealed products, and follow your collection value from one focused Android app.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                <img src="/google-play-badge.png" alt="Get PokeScanDex on Google Play" className="h-16 w-auto" />
              </Link>
              <span className="text-sm text-muted-foreground">Available on Android</span>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                ["Fast", "Camera-first scanning"],
                ["Organized", "Cards, sets & sealed"],
                ["Useful", "Portfolio & market data"],
              ].map(([a,b]) => (
                <div key={a} className="rounded-2xl border border-border/70 bg-card/80 p-4 shadow-sm">
                  <div className="font-semibold">{a}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-10 -z-10 rounded-full bg-primary/15 blur-3xl" />
            <div className="rounded-[2rem] border border-border/70 bg-card/90 p-4 shadow-2xl">
              <img src="/homepage.png" alt="PokeScanDex portfolio dashboard" className="w-full object-contain" />
            </div>
          </div>
        </section>

        <section id="features" className="border-y border-border/60 bg-muted/30">
          <div className="container mx-auto px-4 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[.2em] text-primary">Everything in one place</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A better collecting workflow</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map(({icon: Icon,title,text}) => (
                <article key={title} className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="app" className="container mx-auto px-4 py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[.2em] text-primary">Inside PokeScanDex</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">See the app in action</h2>
            <p className="mt-4 text-muted-foreground">Scanning, sets, pricing, and collection management in one place.</p>
          </div>
          <AppCarousel />
        </section>

        <section className="container mx-auto px-4 pb-24">
          <div className="overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-violet-500/10 px-6 py-12 text-center">
            <h2 className="text-3xl font-bold">Your collection, always with you</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Download PokeScanDex and start organizing your Pokémon TCG collection.</p>
            <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-block">
              <img src="/google-play-badge.png" alt="Get PokeScanDex on Google Play" className="h-16 w-auto" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PokeScanDex</p>
          <div className="flex flex-wrap gap-6">
            <Link href="https://github.com/edobranchi/PokeScanDexPrivacyPolicy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Privacy Policy</Link>
            <a href="mailto:pokescandex@gmail.com" className="hover:text-foreground">Contact</a>
            <Link href="/app-ads.txt" className="hover:text-foreground">app-ads.txt</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
