"use client"

import { useEffect, useRef } from "react"

export default function GoogleMap() {
  const mapRef = useRef<HTMLIFrameElement>(null)

  return (
    <div className="mb-6">
      <iframe
        ref={mapRef}
        className="w-full h-64 rounded-lg overflow-hidden"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15573.268619799443!2d124.0905275195435!3d12.6271868910373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0c96c1198dc6f%3A0x995aaec9dae2c17a!2sRecidencia%20del%20Hamor%20Beachfront!5e0!3m2!1sen!2sph!4v1741971738963!5m2!1sen!2sph"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label="Google Map showing the location of Residencia del Hamor"
      ></iframe>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
        Brgy. San Sebastian, Sta. Magdalena, Sorsogon City, Philippines, 4709
      </p>
    </div>
  )
}