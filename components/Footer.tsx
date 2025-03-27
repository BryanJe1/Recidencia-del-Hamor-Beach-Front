import Link from "next/link"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"
import '@fontsource-variable/grandstander';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">Residencia del Hamor</h3>
            <p style={{ fontFamily: "'Grandstander Variable', cursive" }} className="text-xl font-semibold text-blue-600 mb-2">
              Beach Front
            </p>
            <p className="mb-4 text-gray-300">
              Experience luxury and tranquility at our premier resort destination, where unforgettable memories await.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100065040003922" className="text-gray-300 hover:text-blue-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/accommodations" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <h3 className="text-xl font-bold mb-4">Accommodations</h3>
          <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-300">Standard Room</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300">Junior Suite Room</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300">Deluxe Room</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300">Premier Room</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300">Presidential Suite Room</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Brgy. San Sebastian, Sta. Magdalena, Sorsogon City, Philippines, 4709</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">0905 245 1920</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">reservations@recidenciadel hamorbeachfront.com.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Residencia del Hamor Beach Front. All rights reserved.</p>
          <p>Bryan Jay J. Domagsang</p>
          <p>BSIT 3</p>
        </div>
      </div>
    </footer>
  )
}

