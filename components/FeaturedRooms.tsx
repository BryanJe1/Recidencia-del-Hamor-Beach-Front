"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function FeaturedRooms() {
  const [activeRoom, setActiveRoom] = useState(0)

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description: "Spacious and elegantly designed, perfect for families looking for extra comfort.",
      price: 15000,
      image: "/Deluxe.webp?height=600&width=800",
      features: ["Queen sized bed", "Complimentary Breakfast", "Mini Bar", "Ocean View"],
    },
    {
      id: 2,
      name: "Premier Room",
      description: "A luxurious retreat featuring premium amenities and breathtaking ocean views.",
      price: 17000,
      image: "/Premier.avif?height=600&width=800",
      features: ["Queen sized bed", "Complimentary Breakfast", "Mini Bar"],
    },
    {
      id: 3,
      name: "Presidential Suite Room",
      description: "Experience ultimate luxury in our prestigious Presidential Suite, featuring a private pool and exclusive amenities.",
      price: 22000,
      image: "/Presidential.jpeg?height=600&width=800",
      features: ["Queen sized bed", "Complimentary Breakfast", "Mini Bar", "Wine with Cheese"],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Accommodations</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our most popular rooms and suites, designed for comfort and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={rooms[activeRoom].image || "/placeholder.svg"}
              alt={rooms[activeRoom].name}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <motion.div
              key={activeRoom}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-3">{rooms[activeRoom].name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{rooms[activeRoom].description}</p>
              <p className="text-xl font-bold text-primary mb-6">₱{rooms[activeRoom].price} per night</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Room Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {rooms[activeRoom].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <ChevronRight size={16} className="text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/accommodations"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </motion.div>

            <div className="flex space-x-4 mt-8">
              {rooms.map((room, index) => (
                <button
                  key={room.id}
                  onClick={() => setActiveRoom(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeRoom ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`View ${room.name}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/accommodations" className="inline-flex items-center text-primary hover:underline">
            View All Accommodations
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

