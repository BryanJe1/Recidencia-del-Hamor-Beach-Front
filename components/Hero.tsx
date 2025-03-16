"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/Hero1.webp?height=1080&width=1920",
      title: "Welcome to Residencia del Hamor Beach Front",
      subtitle: "Experience Luxury and Tranquility",
    },
    {
      image: "/Hero2.webp?height=1080&width=1920",
      title: "Discover Paradise",
      subtitle: "Where Memories Are Made",
    },
    {
      image: "/Hero3.avif?height=1080&width=1920",
      title: "Unwind in Elegance",
      subtitle: "Your Dream Vacation Awaits",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl text-white mb-8">{slides[currentSlide].subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/booking"
              className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
            <Link
              href="/accommodations"
              className="px-8 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Rooms
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

