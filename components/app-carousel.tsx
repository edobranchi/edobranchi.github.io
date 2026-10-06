"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const shots = [
  { src: "/scan-fresh.webp", title: "Scan cards", alt: "PokeScanDex card scanner" },
  { src: "/collection_sets-portrait.png", title: "Browse sets", alt: "PokeScanDex set browser" },
  { src: "/collection_value-portrait.png", title: "Track value", alt: "PokeScanDex collection value" },
  { src: "/team_rocket_set-portrait.png", title: "Explore cards", alt: "PokeScanDex card list" },
]

export function AppCarousel() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((index - 1 + shots.length) % shots.length)
  const next = () => setIndex((index + 1) % shots.length)
  const shot = shots[index]

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-[2rem] border border-border/70 bg-card/80 p-5 shadow-xl sm:p-8">
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          <button onClick={prev} aria-label="Previous screenshot" className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-background hover:bg-muted sm:flex">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="min-w-0 text-center">
            <img src={shot.src} alt={shot.alt} className="mx-auto max-h-[620px] w-auto max-w-full rounded-[1.6rem] border border-border/60 shadow-2xl" />
            <h3 className="mt-5 text-lg font-semibold">{shot.title}</h3>
          </div>

          <button onClick={next} aria-label="Next screenshot" className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-background hover:bg-muted sm:flex">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={prev} aria-label="Previous screenshot" className="flex h-9 w-9 items-center justify-center rounded-full border bg-background sm:hidden"><ChevronLeft className="h-4 w-4" /></button>
          <div className="flex gap-2">
            {shots.map((s,i) => (
              <button key={s.src} onClick={() => setIndex(i)} aria-label={`Show ${s.title}`} className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30"}`} />
            ))}
          </div>
          <button onClick={next} aria-label="Next screenshot" className="flex h-9 w-9 items-center justify-center rounded-full border bg-background sm:hidden"><ChevronRight className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  )
}
