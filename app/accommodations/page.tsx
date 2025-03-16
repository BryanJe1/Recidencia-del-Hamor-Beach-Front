import PageHeader from "@/components/PageHeader"
import RoomGrid from "@/components/RoomGrid"
import DayTourGrid from "@/components/DayTourGrid"
import { Check} from "lucide-react"

export default function AccommodationsPage() {
  return (
    <>
      <PageHeader
        title="Our Accommodations"
        description="Experience luxury and comfort in our thoughtfully designed rooms and suites."
        imagePath="/Accommodation.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Rooms Rates</h2>
        <RoomGrid />
        <h2 className="text-3xl font-bold text-center my-12">Day Tour Rates</h2>
        <DayTourGrid />
        <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services and Policies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All of our accommodations include the following services and policies to ensure a comfortable and
              enjoyable stay.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "24-hour reception",
                  "Room service",
                  "Luggage storage",
                  "Free Parking",
                ].map((service, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Day Tour Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Entrance Fee</h4>
                  <p className="text-gray-600">7:00 am - 5:00 pm (₱350)</p>
                  <p className="text-gray-600">3:00 pm - 9:00 pm (₱500)</p>
                </div>
                <div>
                  <h4 className="font-semibold">Discounts</h4>
                  <p className="text-gray-600">Senior and PWD Discount apply.</p>
                  <p className="text-gray-600">50% Discout for kids aged 8 - 12 yrs. old.</p>
                  <p className="text-gray-600">Free of charge for kids aged 7 yrs. old below.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Accommodation</h4>
                  <p className="text-gray-600">We can only accommodate 5 groups per day (for now).</p>
                  <p className="text-gray-600">First come, Fists serve basis.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Hotel Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Check-in / Check-out</h4>
                  <p className="text-gray-600">Check-in: 2:00 PM to 6:00 PM </p>
                  <p className="text-gray-600">Check-out: Available 24 hours</p>
                </div>
                <div>
                  <h4 className="font-semibold">Cancellation</h4>
                  <p className="text-gray-600">Cancellation and prepayment varies according to accommodation type.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Children</h4>
                  <p className="text-gray-600">Children of all ages are welcome</p>
                  <p className="text-gray-600">Children 12 and above will be charged as adults at this property.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Pets</h4>
                  <p className="text-gray-600">Pets are not allowed</p>
                </div>
                <div>
                  <h4 className="font-semibold">Payment</h4>
                  <p className="text-gray-600">We accept all major credit cards and Cash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

