"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {  Utensils, Waves, Beer, SpadeIcon as Spa, Flame } from "lucide-react"

export default function AmenitiesGrid() {
  const amenities = [
    {
      id: 1,
      name: "Swimming Pool",
      description: "Take a refreshing dip in our crystal-clear swimming pool, perfect for relaxation and fun.",
      icon: <Waves size={24} />,
      image: "/Pool.webp?height=600&width=800",
    },
    {
      id: 2,
      name: "Restaurant",
      description: "Savor exquisite cuisine prepared by our local chefs.",
      icon: <Utensils size={24} />,
      image: "/Resto.jpg?height=600&width=800",
    },
    {
      id: 3,
      name: "Spa",
      description: "Indulge in rejuvenating treatments at our cozy spa.",
      icon: <Spa size={24} />,
      image: "/Spa.jpg?height=600&width=800",
    },
    {
      id: 4,
      name: "Sauna",
      description: "Relax and detox in our soothing sauna, designed for ultimate comfort and wellness.",
      icon: <Flame size={24} />,
      image: "/Sauna.jpg?height=600&width=800",
    },
    {
      id: 5,
      name: "Hotel Bar",
      description: "Unwind with signature cocktails, fine wines, and premium spirits in our elegant hotel bar.",
      icon: <Beer size={24} />,
      image: "/Bar.webp?height=600&width=800",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {amenities.map((amenity, index) => (
        <motion.div
          key={amenity.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative h-48">
            <Image
              src={amenity.image || "/Amenities.webp"}
              alt={amenity.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="mr-3 text-primary">{amenity.icon}</div>
              <h3 className="text-lg font-bold">{amenity.name}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{amenity.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

