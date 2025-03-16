"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, Phone, MessageSquare } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
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
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          })
        }, 3000)
      }, 1500)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900 rounded-lg p-6 text-center">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Message Sent!</h3>
        <p className="text-green-700 dark:text-green-300">
          Thank you for contacting us. We'll get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Your Name *
        </label>
        <div className="relative">
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.name ? "border-red-500" : "border-gray-300"}`}
            placeholder="Juan"
          />
          <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address *
        </label>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.email ? "border-red-500" : "border-gray-300"}`}
            placeholder="juandelacruz@gmail.com"
          />
          <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone Number (Optional)
        </label>
        <div className="relative">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-3 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            placeholder="09632057181"
          />
          <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full p-3 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.subject ? "border-red-500" : "border-gray-300"}`}
        >
          <option value="">Select a subject</option>
          <option value="booking">Booking Inquiry</option>
          <option value="general">General Information</option>
          <option value="feedback">Feedback</option>
          <option value="support">Customer Support</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message *
        </label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full p-3 pl-10 border rounded focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 ${errors.message ? "border-red-500" : "border-gray-300"}`}
            placeholder="How can we help you?"
          ></textarea>
          <MessageSquare size={18} className="absolute left-3 top-6 text-gray-500 dark:text-gray-400" />
        </div>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

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
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  )
}

