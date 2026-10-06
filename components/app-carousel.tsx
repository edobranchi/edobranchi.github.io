"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const shots = [
  { src: "/screenshot-scan.png", title: "Scan cards", alt: "PokeScanDex live card scanner" },
  { src: "/screenshot-scan-detail.png", title: "Review scan results", alt: "PokeScanDex scan result screen" },
  { src: "/homepage.png", title: "Track your portfolio", alt: "PokeScanDex portfolio dashboard" },
  { src: "/screenshot-stats.png", title: "See collection stats", alt: "PokeScanDex collection statistics" },
  { src: "/screenshot-sets.png", title: "Browse sets", alt: "PokeScanDex set browser" },
  { src: "/screenshot-jungle.png", title: "Track set progress", alt: "PokeScanDex set detail screen" },
  { src: "/screenshot-binder.png", title: "Build your binder", alt: "PokeScanDex binder collection view" },
  { src: "/screenshot-sealed.png", title: "Browse sealed products", alt: "PokeScanDex sealed products browser" },
  { src: "/screenshot-sealed-detail.png", title: "Explore sealed releases", alt: "PokeScanDex sealed product collection screen" },
]

export function AppCarousel() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((index - 1 + shots.length) % shots.length)
  const next = () => setIndex((index + 1) % shots.length)
  const shot = shots[index]

  return (
    <div className="w-full">
      <div className="rounded-[2rem] border border-border/70 bg-card/90 p-4 shadow-2xl backdrop-blur sm:p-5">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous screenshot"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background/90 hover:bg-muted md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="min-w-0 text-center">
            <img
              src={shot.src}
              alt={shot.alt}
              className="mx-auto max-h-[640px] w-auto max-w-full object-contain"
            />
            <h3 className="mt-5 text-lg font-semibold">{shot.title}</h3>
          </div>

          <button
            onClick={next}
            aria-label="Next screenshot"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-background/90 hover:bg-muted md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous screenshot"
            className="flex h-9 w-9 items-center justify-center rounded-full border bg-background sm:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex max-w-[70vw] flex-wrap justify-center gap-2">
            {shots.map((s, i) => (
              <button
                key={s.src}
                onClick={() => setIndex(i)}
                aria-label={`Show ${s.title}`}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next screenshot"
            className="flex h-9 w-9 items-center justify-center rounded-full border bg-background sm:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
