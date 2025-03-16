"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function DayTourGrid() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const activities = [
    {
      id: 1,
      name: "Parasol Cottage",
      description: "Relax in a cozy parasol cottage, offering a serene retreat with stunning ocean views.",
      image: "/Cottage.jpg?height=600&width=800",
      rates: "PHP1200 (good for 6pax)",
    },
    {
      id: 2,
      name: "Cabana",
      description: "Unwind in a stylish cabana, perfect for lounging by the beach with refreshing sea breezes.",
      image: "/Cabana.webp?height=600&width=800",
      rates: "PHP2,800 (good for 10pax)",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length)
  }

  const pauseAutoplay = () => setAutoplay(false)
  const resumeAutoplay = () => setAutoplay(true)

  const toggleExpand = () => setExpanded(!expanded)

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {activities.map((activity, index) => (
            <div key={activity.id} className="w-full flex-shrink-0">
              <div className="relative h-[300px] md:h-[400px]" onClick={toggleExpand}>
                <Image
                  src={activity.image || "/contact.svg"}
                  alt={activity.name}
                  fill
                  className="object-cover object-center cursor-pointer"
                  sizes="(max-width: 1024px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{activity.name}</h3>
                  <p className="text-white/90">{activity.description}</p>
                  <p className="text-blue-600">{activity.rates}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
        aria-label="Previous activity"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
        aria-label="Next activity"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {activities.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
            }`}
            aria-label={`Go to activity ${index + 1}`}
          />
        ))}
      </div>
      
      {expanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={toggleExpand}
            className="absolute top-4 right-4 text-white bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-gray-800 transition"
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-4xl h-[90vh]">
            <Image
              src={activities[currentSlide].image || "/contact.svg"}
              alt={activities[currentSlide].name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
