import PageHeader from "@/components/PageHeader"
import BookingForm from "@/components/BookingForm"

export default function BookingPage() {
  return (
    <>
      <PageHeader
        title="Book Your Stay"
        description="Reserve your perfect getaway at Residencia del Hamor Beach Front."
        imagePath="/Booking.webp"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Reservation Form</h2>
          <BookingForm />
        </div>
      </div>
    </>
  )
}

