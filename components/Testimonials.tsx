"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Kier Labrador",
      location: "Local Guide",
      avatar: "/Kier.png?height=200&width=200",
      rating: 5,
      text: "The best resort in Sorsogon. A bit pricey but worth it if you want staycation vibe with them. They have 2 large pools. The other pool is for day tourists. Breakfast and lunch is good. Delicious meals and drinks. Public beach is freely accessible as well. There’s also a dedicated parking for day tourists. There’s also cottages so it’s really relaxing and comfortable to stay outside your room. Overall, highly recommended for both couple and family stay.",
    },
    {
      id: 2,
      name: "Ignatius Amo",
      location: "Local Guide",
      avatar: "/Ignatius.png?height=200&width=200",
      rating: 5,
      text: "A very relaxing place. You feel the exclusivity here. The food is good too. Safe place. Guards at watch 24/7. Staff is polite and provides service. Sand is combed. The shore has been blocked by cement tho so you have to go to the nearby resort to enjoy the shoreline. I recommend walking on the tiles barefoot as most of the time the tiles are slippery. There is a mat to help you walk around. Summer is the best time to stay here. I dont recommend coming here on the rainy season because this place has been built to be picturesque so a bad weather would be unfavorable for your shots.",
    },
    {
      id: 3,
      name: "JC Llarena",
      location: "Local Guide",
      avatar: "/JC.png?height=200&width=200",
      rating: 5,
      text: "We had an overnight stay and got 2 rooms. A bit pricey.. 11k and 14k I think but we' ve got a senior citizen discount so more or less we our dinner and snacks were free. The place is superb and cozy. Pool is warm. Even kids will enjoy. And the views are amazing.",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Read about the experiences of our valued guests at Residencia del Hamor.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>

                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.location}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

