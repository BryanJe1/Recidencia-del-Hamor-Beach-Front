"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import '@fontsource-variable/grandstander';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Accommodations", path: "/accommodations" },
    { name: "Amenities", path: "/amenities" },
    { name: "Book Now", path: "/booking" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white/30 backdrop-blur-md"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center text-2xl font-bold text-blue-600 gap-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
            <p className="text-primary">Residencia del Hamor</p> 
            <p style={{ fontFamily: "'Grandstander Variable', cursive" }} className="text-2xl font-semibold text-blue-600 mt-2">
              Beach Front
            </p>
          </Link>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href={link.path}
                  className={`font-bold transition-colors hover:text-blue-600 ${pathname === link.path ? "text-blue-600" : "text-gray-700"}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href={link.path}
                  className={`block py-2 font-medium transition-colors hover:text-primary ${pathname === link.path ? "text-primary border-b-2 border-primary" : "text-gray-700"}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
