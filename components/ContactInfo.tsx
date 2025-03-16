import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <MapPin size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-medium">Address</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Brgy. San Sebastian,
            <br />
            Sta. Magdalena,
            <br />
            Sorsogon City,
            <br />
            Philippines,
            <br />
            4709
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Phone size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-medium">Phone</h3>
          <p className="text-gray-600 dark:text-gray-300">
            0905 245 1920
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Mail size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-medium">Email</h3>
          <p className="text-gray-600 dark:text-gray-300">
            reservations@recidenciadelhamorbeachfront.com.ph
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Clock size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
        <div>
          <h3 className="font-medium">Hours</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Reception: 24/7
          </p>
        </div>
      </div>
    </div>
  )
}

