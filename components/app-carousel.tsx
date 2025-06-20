"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const screenshots = [
  {
    src: "/add_scan-portrait.png?height=600&width=300",
    alt: "Card scanning feature - Point your camera at any Pokémon card",
    title: "Scan Any Card",
  },
  {
    src: "/collection_sets-portrait.png?height=600&width=300",
    alt: "Browse complete set database with all Pokémon TCG sets",
    title: "Browse All Sets",
  },
  {
    src: "/collection_value-portrait.png?height=600&width=300",
    alt: "Real-time price tracking from Cardmarket and TCGplayer",
    title: "Track Prices",
  },
  {
    src: "/team_rocket_set-portrait.png?height=600&width=300",
    alt: "Your personal collection overview and statistics",
    title: "View any card",
  },
]

export function AppCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-black/5 dark:bg-black/20 p-8">
        <div className="flex items-center justify-center gap-8">
          {/* Navigation Button - Left */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="hidden md:flex shrink-0 h-12 w-12 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Screenshots Container */}
          <div className="flex items-center justify-center gap-4 flex-1">
            {/* Previous Screenshot (hidden on mobile) */}
            <div className="hidden lg:block opacity-40 transform scale-75">
              <img
                src={
                  screenshots[(currentIndex - 1 + screenshots.length) % screenshots.length].src || "/placeholder.svg"
                }
                alt={screenshots[(currentIndex - 1 + screenshots.length) % screenshots.length].alt}
                className="h-80 w-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Current Screenshot */}
            <div className="transform transition-all duration-500 ease-in-out">
              <img
                src={screenshots[currentIndex].src || "/placeholder.svg"}
                alt={screenshots[currentIndex].alt}
                className="h-96 w-auto rounded-2xl shadow-2xl"
              />
              <p className="text-center mt-4 font-semibold text-lg">{screenshots[currentIndex].title}</p>
            </div>

            {/* Next Screenshot (hidden on mobile) */}
            <div className="hidden lg:block opacity-40 transform scale-75">
              <img
                src={screenshots[(currentIndex + 1) % screenshots.length].src || "/placeholder.svg"}
                alt={screenshots[(currentIndex + 1) % screenshots.length].alt}
                className="h-80 w-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Navigation Button - Right */}
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="hidden md:flex shrink-0 h-12 w-12 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <Button variant="outline" size="icon" onClick={prevSlide} className="h-10 w-10">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="h-10 w-10">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
