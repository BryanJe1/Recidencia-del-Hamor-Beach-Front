import Hero from "@/components/Hero"
import FeaturedRooms from "@/components/FeaturedRooms"
import AboutSection from "@/components/AboutSection"
import Testimonials from "@/components/Testimonials"
import WeatherWidget from "@/components/WeatherWidget"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedRooms />
      <Testimonials />
      <WeatherWidget />
      <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
        Your Beachfront Escape Begins Here! Reserve your stay at Residencia del Hamor Beach Front and make memories that will last forever. 
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/booking"
            className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white bg-white text-primary rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}