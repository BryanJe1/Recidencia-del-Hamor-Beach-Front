"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Residencia del Hamor Beach Front</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            Great care is taken to ensure guests experience comfort through top-notch services and amenities.
            Remain linked during your visit by utilizing the complimentary internet access available.
            Parking is accessible, supplied by the hotel for guests who arrive by car. 
            Need some relaxation? Your room features daily housekeeping to make your stay even 
            more comfortable and enjoyable.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            Crafted for coziness, every guestroom provides an array of features, 
            guaranteeing a tranquil night's sleep while maintaining the level of comfort.
            For an elevated experience at hotel, select rooms are equipped with air 
            conditioning to improve your stay. Expand your in-room entertainment 
            choices with various amenities, such as cable TV offered in certain 
            accommodations. Rest assured that your hydration needs will be met, 
            as some guestrooms are equipped with a refrigerator, bottled water, 
            instant coffee, instant tea and mini bar.Maintain your cleanliness 
            and comfort using toiletries and towels available in select guest restrooms. 
            Begin your day on a delightful note with a scrumptious complimentary breakfast, 
            consistently served at Recidencia Del Hamor Beach Front.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">16+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Amenities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">280+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Happy Guests</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Recidencia.webp?height=800&width=600"
                alt="Residencia del Hamor Beach Front"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary rounded-lg overflow-hidden shadow-xl hidden md:block">
              <Image
                src="/Logo.jpg?height=400&width=400"
                alt="Resort Detail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

