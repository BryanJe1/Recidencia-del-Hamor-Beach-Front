"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function RoomGrid() {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)

  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      description: "Comfortable and well-appointed, our Standard Room offers a relaxing stay with modern amenities.",
      price: 11500,
      image: "/Standard.avif?height=600&width=800",
      size: "24 m²/258 ft²",
      capacity: "2 Adults and 2 Child",
      bed: "Queen Bed",
      features: [
        "Sea (partial view) view",
        "Non-smoking",
        "Shower",
        "Free Wi-Fi",
        "Electric kettle",
        "Air Conditioning",
        "Mirror",
        "Private bathroom",
        "Toiletries",
        "Towels",
        "Slippers",
        "Flat-screen TV",
        "complimentary breakfast for 2 persons",
        "In-room safe box",
      ],
    },
    {
      id: 2,
      name: "Junior Suite Room",
      description: "Enjoy added space and comfort with stunning ocean views from your private balcony.",
      price: 13000,
      image: "/Junior.avif?height=600&width=800",
      size: "25 m²/269 ft²",
      capacity: "2 Adults and 2 Child",
      bed: "Queen Bed",
      features: [
        "Ocean view",
        "Balcony/terrace",
        "Non-smoking",
        "Shower",
        "Free Wi-Fi",
        "Electric kettle",
        "Air Conditioning",
        "Mirror",
        "Private bathroom",
        "Toiletries",
        "Towels",
        "Slippers",
        "Flat-screen TV",
        "complimentary breakfast for 2 persons",
        "In-room safe box",
      ],
    },
    {
      id: 3,
      name: "Deluxe Room",
      description: "Spacious and elegantly designed, perfect for families looking for extra comfort.",
      price: 15000,
      image: "/Deluxe.webp?height=600&width=800",
      size: "30 m²/323 ft²",
      capacity: "2 Adults and 2 Child",
      bed: "Queen Bed",
      features: [
        "Ocean view",
        "Balcony/terrace",
        "Non-smoking",
        "Air Conditioning",
        "Shower",
        "Free Wi-Fi",
        "Mini Bar",
        "Electric kettle",
        "Mirror",
        "Private bathroom",
        "Toiletries",
        "Towels",
        "Slippers",
        "Flat-screen TV",
        "complimentary breakfast for 2 persons",
        "In-room safe box",
      ],
    },
    {
      id: 4,
      name: "Premier Room",
      description: "A luxurious retreat featuring premium amenities and breathtaking ocean views.",
      price: 17000,
      image: "/Premier.avif?height=600&width=800",
      size: "35 m²/377 ft²",
      capacity: "2 Adults and 2 Child",
      bed: "Queen Bed",
      features: [
        "Air Conditioning",
        "Non-smoking",
        "Shower",
        "Free Wi-Fi",
        "Mini Bar",
        "Electric kettle",
        "Mirror",
        "Private bathroom",
        "Toiletries",
        "Towels",
        "Slippers",
        "Flat-screen TV",
        "complimentary breakfast for 2 persons",
        "In-room safe box",
      ],
    },
    {
      id: 5,
      name: "Presidential Suite Room",
      description: "Experience ultimate luxury in our prestigious Presidential Suite, featuring a private pool and exclusive amenities.",
      price: 22000,
      image: "/Presidential.jpeg?height=600&width=800",
      size: "40 m²/430.56 ft²",
      capacity: "2 Adults and 2 Child",
      bed: "Queen Bed",
      features: [
        "Ocean View",
        "Balcony/terrace",
        "Private Pool",
        "Air Conditioning",
        "Non-smoking",
        "Shower",
        "Free Wi-Fi",
        "Mini Bar",
        "Electric kettle",
        "Mirror",
        "Private bathroom",
        "Toiletries",
        "Towels",
        "Slippers",
        "Flat-screen TV",
        "complimentary breakfast for 2 persons",
        "In-room safe box",
        "Wine with Cheese",
      ],
    },
  ]

  const openRoomDetails = (id: number) => {
    setSelectedRoom(id)
  }

  const closeRoomDetails = () => {
    setSelectedRoom(null)
  }

  const getSelectedRoom = () => {
    return rooms.find((room) => room.id === selectedRoom)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={room.image || "/Accommodation.jpg"}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{room.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{room.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-primary">
                ₱{room.price} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/ night</span>
                </span>
                <button
                  onClick={() => openRoomDetails(room.id)}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  View Details
                </button>
              </div>

              <button
                onClick={() => openRoomDetails(room.id)}
                className="w-full py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedRoom && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeRoomDetails}
                className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md z-10"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              <div className="relative h-72 md:h-96">
                <Image
                  src={getSelectedRoom()?.image || ""}
                  alt={getSelectedRoom()?.name || ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{getSelectedRoom()?.name}</h3>
                <span className="text-xl font-bold text-primary">
                    ₱{getSelectedRoom()?.price}{" "}
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/ night</span>
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">{getSelectedRoom()?.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Room Size</p>
                  <p className="font-medium">{getSelectedRoom()?.size}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Capacity</p>
                  <p className="font-medium">{getSelectedRoom()?.capacity}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Bed Type</p>
                  <p className="font-medium">{getSelectedRoom()?.bed}</p>
                </div>
              </div>

              <h4 className="font-bold mb-4">Room Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {getSelectedRoom()?.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-6">
                <button
                  onClick={closeRoomDetails}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded mr-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Book This Room
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

