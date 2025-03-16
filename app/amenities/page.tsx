import PageHeader from "@/components/PageHeader"
import AmenitiesGrid from "@/components/AmenitiesGrid"
import ActivitiesCarousel from "@/components/ActivitiesCarousel"

export default function AmenitiesPage() {
  return (
    <>
      <PageHeader
        title="Amenities & Activities"
        description="Indulge in our world-class amenities and exciting activities."
        imagePath="/Amenities.webp"
      />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Resort Amenities</h2>
        <AmenitiesGrid />
        <h2 className="text-3xl font-bold text-center my-12">Activities & Experiences</h2>
        <ActivitiesCarousel />
        <section className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-b from-blue-50 to-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Special Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover exclusive packages designed for unforgettable moments, ultimate relaxation, and thrilling adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Wedding Package",
                description:
                  "Say 'I do' in paradise with an elegant beachfront ceremony, exquisite dining, and personalized touches for your perfect day.",
                price: "₱275,000.00 - ₱356,000.00",
              },
              {
                name: "Aqua Adventure Package",
                description:
                  "Experience the thrill of the sea with adrenaline-pumping water activities, guided island tours, and stunning ocean views.",
                price: "₱38,336.99",
              },
              {
                name: "Barkada Package",
                description:
                  "Enjoy a fun-filled getaway with your squad, featuring exciting activities, relaxing beachside moments, and unforgettable memories.",
                price: "₱22,438.00",
              },
              {
                name: "Pampering Getaway",
                description:
                  "Indulge in pure relaxation with luxurious spa treatments, serene ocean breezes, and a tranquil escape from the everyday.",
                price: "₱21,710.00",
              },
              {
                name: "Pre-nup / Birthday Shooting Package",
                description:
                  "Capture life’s most cherished moments with a breathtaking beachfront backdrop and professional photography settings.",
                price: "₱10,500.00",
              },
            ].map((package_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{package_.name}</h3>
                <p className="text-gray-600 mb-6">{package_.description}</p>
                <div className="flex justify-between items-center text-lg font-medium">
                  <span className="text-blue-600">{package_.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

