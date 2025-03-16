"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Users, CreditCard, Mail, Phone, User } from "lucide-react"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    roomType: "",
    specialRequests: "",
    paymentMethod: "credit-card",
    agreeToTerms: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const roomTypes = [
    { id: "standard", name: "Standard Room", price: 11500.00},
    { id: "junior", name: "Junior Suite Room", price: 13000.00 },
    { id: "deluxe", name: "Deluxe Room", price: 15000.00 },
    { id: "premier", name: "Premier Room", price: 17000.00 },
    { id: "presidential", name: "Presidential Suite Room", price: 22000.00 },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required"
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required"
    if (!formData.roomType) newErrors.roomType = "Please select a room type"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const checkIn = new Date(formData.checkIn)
    const checkOut = new Date(formData.checkOut)

    if (formData.checkIn && checkIn < today) {
      newErrors.checkIn = "Check-in date cannot be in the past"
    }

    if (formData.checkOut && checkOut <= checkIn) {
      newErrors.checkOut = "Check-out date must be after check-in date"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)

        setTimeout(() => {
          setIsSuccess(false)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            checkIn: "",
            checkOut: "",
            adults: 2,
            children: 0,
            roomType: "",
            specialRequests: "",
            paymentMethod: "credit-card",
            agreeToTerms: false,
          })
        }, 3000)
      }, 1500)
    }
  }

  const getSelectedRoomPrice = () => {
    const room = roomTypes.find((room) => room.id === formData.roomType)
    return room ? room.price : 0
  }

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0

    const checkIn = new Date(formData.checkIn)
    const checkOut = new Date(formData.checkOut)
    const diffTime = checkOut.getTime() - checkIn.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays > 0 ? diffDays : 0
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    const roomPrice = getSelectedRoomPrice()
    return nights * roomPrice
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Thank you for choosing Residencia del Hamor. Your booking has been received and confirmed.
        </p>
        <p className="text-gray-600 dark:text-gray-300">A confirmation email has been sent to {formData.email}.</p>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name *
              </label>
              <div className="relative">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Juan"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                />
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name *
              </label>
              <div className="relative">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Dela Cruz"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-2 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                />
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juandelacruz@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone *
              </label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+639632057181"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-2 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                />
                <Phone
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Booking Details</h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="checkIn" className="block text-sm font-medium mb-1">
                Check In *
              </label>
              <div className="relative">
                <input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className={`w-full p-2 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.checkIn ? "border-red-500" : "border-gray-300"}`}
                />
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                />
              </div>
              {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
            </div>

            <div>
              <label htmlFor="checkOut" className="block text-sm font-medium mb-1">
                Check Out *
              </label>
              <div className="relative">
                <input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className={`w-full p-2 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.checkOut ? "border-red-500" : "border-gray-300"}`}
                />
                <Calendar
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                />
              </div>
              {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="adults" className="block text-sm font-medium mb-1">
                  Adults
                </label>
                <div className="relative">
                  <select
                    id="adults"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <Users
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="children" className="block text-sm font-medium mb-1">
                  Children
                </label>
                <div className="relative">
                  <select
                    id="children"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white appearance-none"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <Users
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="roomType" className="block text-sm font-medium mb-1">
                Room Type *
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className={`w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.roomType ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select a room type</option>
                {roomTypes.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} - ₱{room.price}/night
                  </option>
                ))}
              </select>
              {errors.roomType && <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>}
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium mb-1">
          Special Requests
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
          placeholder="Any special requests or preferences?"
        ></textarea>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Payment Method</h3>

        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="credit-card"
              name="paymentMethod"
              type="radio"
              value="credit-card"
              checked={formData.paymentMethod === "credit-card"}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="credit-card" className="ml-2 block">
              <div className="flex items-center">
                <CreditCard size={18} className="mr-2 text-gray-500 dark:text-gray-400" />
                <span>Credit Card (Pay Now)</span>
              </div>
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="pay-at-hotel"
              name="paymentMethod"
              type="radio"
              value="pay-at-hotel"
              checked={formData.paymentMethod === "pay-at-hotel"}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
            />
            <label htmlFor="pay-at-hotel" className="ml-2 block">
              <div className="flex items-center">
                <CreditCard size={18} className="mr-2 text-gray-500 dark:text-gray-400" />
                <span>Pay at Hotel</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {formData.checkIn && formData.checkOut && formData.roomType && (
        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>

          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Room Type:</span>
              <span className="font-medium">{roomTypes.find((room) => room.id === formData.roomType)?.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Check In:</span>
              <span className="font-medium">{new Date(formData.checkIn).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Check Out:</span>
              <span className="font-medium">{new Date(formData.checkOut).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Number of Nights:</span>
              <span className="font-medium">{calculateNights()}</span>
            </div>
            <div className="flex justify-between">
              <span>Guests:</span>
              <span className="font-medium">
                {formData.adults} Adults, {formData.children} Children
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>₱{calculateTotal()}</span>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-start">
        <input
          id="agreeToTerms"
          name="agreeToTerms"
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          className={`h-4 w-4 mt-1 text-primary focus:ring-primary border-gray-300 ${errors.agreeToTerms ? "border-red-500" : ""}`}
        />
        <label htmlFor="agreeToTerms" className="ml-2 block text-sm">
          I agree to the{" "}
          <a href="#" className="text-primary hover:underline">
            terms and conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            privacy policy
          </a>
          .
        </label>
      </div>
      {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          "Complete Booking"
        )}
      </button>
    </form>
  )
}

