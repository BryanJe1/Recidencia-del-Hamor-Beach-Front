"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ActivitiesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const activities = [
    {
      id: 1,
      name: "Scuba Diving",
      description: "Explore vibrant coral reefs and marine life with our certified diving instructors.",
      image: "/Scuba.jpg?height=600&width=800",
    },
    {
      id: 2,
      name: "Island Hopping",
      description: "Discover nearby islands and hidden beaches on our exclusive boat tours.",
      image: "/IslandHopping.webp?height=600&width=800",
    },
    {
      id: 3,
      name: "Kayaking",
      description: "Paddle through crystal-clear waters and explore scenic coastlines at your own pace.",
      image: "/Kayaking.jpg?height=600&width=800",
    },
    {
      id: 4,
      name: "Snorkeling",
      description: "Swim among colorful fish and coral reefs in pristine tropical waters.",
      image: "/Snorkeling.jpg?height=600&width=800",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length)
  }

  const pauseAutoplay = () => {
    setAutoplay(false)
  }

  const resumeAutoplay = () => {
    setAutoplay(true)
  }

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
          {activities.map((activity) => (
            <div key={activity.id} className="w-full flex-shrink-0">
              <div className="relative h-96">
                <Image
                  src={activity.image || "/contact.svg"}
                  alt={activity.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{activity.name}</h3>
                  <p className="text-white/90">{activity.description}</p>
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
    </div>
  )
}

